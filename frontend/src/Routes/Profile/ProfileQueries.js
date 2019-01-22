import gql from "graphql-tag";
import { IMAGE_FRAGMENT } from "../../sharedQueries";

export const GET_USER = gql`
  query userProfile($username: String!) {
    userProfile(username: $username) {
      user {
        id
        username
        firstName
        lastName
        profile {
          bio
          avatar
          website
          postCount
          followersCount
          followingCount
          isFollowing
          isSelf
        }
        images {
          ...ImageParts
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
`;
