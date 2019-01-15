import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./localState";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  clientState: { defaults, resolvers }
});

export default client;
