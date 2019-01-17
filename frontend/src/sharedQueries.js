import gql from "graphql-tag";

export const LOG_USER_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export const ME = gql`
  {
    me {
      user {
        username
      }
    }
  }
`;
