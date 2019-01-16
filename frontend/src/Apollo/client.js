import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./localState";
import { toast } from "react-toastify";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  clientState: { defaults, resolvers },
  onError: ({ graphQLErrors }) => {
    graphQLErrors.forEach(error => toast.error(error.message));
  }
});

export default client;
