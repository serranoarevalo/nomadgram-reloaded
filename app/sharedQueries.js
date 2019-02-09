import { gql } from "apollo-boost";

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
    files {
      id
      url
    }
  }
`;

export const DETAIL_IMAGE_FRAGMENT = gql`
  fragment DetailParts on ImageType {
    id
    files {
      id
      url
    }
    caption
    location
    likeCount
    commentCount
    isLiked
    createdAt
    comments {
      id
      message
      creator {
        username
      }
    }
    creator {
      username
      profile {
        avatar
      }
    }
  }
`;
