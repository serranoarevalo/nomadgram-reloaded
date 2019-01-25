import ApolloClient from "apollo-boost";
import { AsyncStorage } from "react-native";
import { getDefaults, resolvers } from "./localState";

const JWT = "jwt";
let token;

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(JWT);
    if (token) {
      token = token;
    }
  } catch {
    token = null;
  }
};

const client = new ApolloClient({
  uri: "https://localhost:4000/graphql",
  clientState: { defaults: getDefaults(token), resolvers }
});

console.log();

export default client;
