import gql from "graphql-tag";

export const FOLLOW_USER = gql`
  mutation followUser($userId: Int!) {
    followUser(userId: $userId) {
      ok
    }
  }
`;
