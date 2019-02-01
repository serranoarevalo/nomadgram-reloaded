import gql from "graphql-tag";

export const EXPLORE_QUERY = gql`
  {
    latestImages {
      images {
        id
        likeCount
        commentCount
        files {
          id
          url
        }
      }
    }
    latestUsers {
      users {
        id
        username
        profile {
          isFollowing
          avatar
        }
      }
    }
  }
`;
