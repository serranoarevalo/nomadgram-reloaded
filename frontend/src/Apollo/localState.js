export const defaults = {
  auth: {
    __typename: "Auth",
    isLoggedIn: Boolean(localStorage.getItem("jwt")) || false
  }
};

export const resolvers = {
  Mutation: {
    logIn: () => null,
    logOut: () => null
  }
};
