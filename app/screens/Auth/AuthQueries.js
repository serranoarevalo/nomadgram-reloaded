import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation logIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGN_UP = gql`
  mutation createAccount(
    $avatar: String
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    $username: String!
  ) {
    createAccount(
      avatar: $avatar
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
      username: $username
    ) {
      token
    }
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation localLogIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
