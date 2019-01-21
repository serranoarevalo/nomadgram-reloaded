import gql from "graphql-tag";

export const LOG_USER_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export const USER_FRAGMENT = gql`
  fragment UserParts on UserType {
    id
    username
    profile {
      isFollowing
      avatar
    }
  }
`;

export const IMAGE_FRAGMENT = gql`
  fragment ImageParts on ImageType {
    id
    likeCount
    commentCount
    file
  }
`;
