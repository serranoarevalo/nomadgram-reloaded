export const defaults = {
  auth: {
    __typename: "Auth",
    isLoggedIn: Boolean(localStorage.getItem("jwt")) || false
  }
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("jwt", token);
      cache.writeData({
        data: {
          auth: {
            __typename: "Auth",
            isLoggedIn: true
          }
        }
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("jwt");
      window.location.reload();
      return null;
    }
  }
};
