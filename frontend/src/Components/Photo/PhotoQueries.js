import gql from "graphql-tag";

export const TOGGLE_LIKE_IMAGE = gql`
  mutation likeImage($imageId: Int!) {
    likeImage(imageId: $imageId) {
      ok
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($imageId: Int!, $message: String!) {
    addComment(imageId: $imageId, message: $message) {
      comment {
        id
        creator {
          username
        }
      }
    }
  }
`;
