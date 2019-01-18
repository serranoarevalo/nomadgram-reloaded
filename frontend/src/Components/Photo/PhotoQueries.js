import gql from "graphql-tag";

export const TOGGLE_LIKE_IMAGE = gql`
  mutation likeImage($imageId: Int!) {
    likeImage(imageId: $imageId) {
      ok
    }
  }
`;
