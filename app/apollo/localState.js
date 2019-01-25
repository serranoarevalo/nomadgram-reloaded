import { AsyncStorage } from "react-native";

const JWT = "jwt";

export const getDefaults = token => {
  return {
    auth: {
      __typename: "Auth",
      isLoggedIn: token !== null ? true : false
    }
  };
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      try {
        await AsyncStorage.setItem(JWT, token);
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
    logUserOut: (_, __, { cache }) => {
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
};
