import gql from "graphql-tag";

export const APP_QUERIES = gql`
  {
    auth @client {
      isLoggedIn
    }
  }
`;
