import { AsyncStorage } from "react-native";
import { getToken } from "./utils";

const JWT = "jwt";

const clientOptions = hasToken => ({
  uri: "http://localhost:8000/graphql",
  clientState: {
    defaults: {
      auth: {
        __typename: "Auth",
        isLoggedIn: hasToken !== null ? true : false
      }
    },
    resolvers: {
      Mutation: {
        logUserIn: async (_, { token }, { cache }) => {
          try {
            await AsyncStorage.setItem(JWT, String(token));
            cache.writeData({
              data: {
                auth: {
                  __typename: "Auth",
                  isLoggedIn: true
                }
              }
            });
          } catch (error) {
            console.warn(error);
          } finally {
            return null;
          }
        },
        logUserOut: async (_, __, { cache }) => {
          try {
            await AsyncStorage.removeItem(JWT);
            cache.writeData({
              data: {
                auth: {
                  __typename: "Auth",
                  isLoggedIn: false
                }
              }
            });
          } catch (error) {
            console.log(error);
          } finally {
            return null;
          }
        }
      }
    }
  },
  request: async operation => {
    const token = await getToken();
    operation.setContext({
      headers: {
        Authorization: `JWT ${token || ""}`
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors && graphQLErrors.map) {
      graphQLErrors.forEach(error => console.log(error.message));
    }
    if (networkError) {
      console.log(networkError);
    }
  }
});

export default clientOptions;
