import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./localState";
import { toast } from "react-toastify";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  clientState: { defaults, resolvers },
  onError: ({ graphQLErrors }) => {
    if (graphQLErrors && graphQLErrors.map) {
      graphQLErrors.forEach(error => toast.error(error.message));
    }
  },
  request: async operation => {
    operation.setContext({
      headers: {
        Authorization: `JWT ${localStorage.getItem("jwt") || ""}`
      }
    });
  }
});

export default client;
