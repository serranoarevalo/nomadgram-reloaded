import { gql } from "apollo-boost";

export const IS_LOGGED_IN = gql`
  {
    auth {
      isLoggedIn @client
    }
  }
`;

export const LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
