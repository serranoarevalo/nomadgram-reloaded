import gql from "graphql-tag";

export const GET_FEED = gql`
  query feed($page: Int!) {
    feed(page: $page) {
      images {
        id
        file
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
    }
  }
`;
