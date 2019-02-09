import { gql } from "apollo-boost";

export const TOGGLE_LIKE_IMAGE = gql`
  mutation likeImage($imageId: Int!) {
    likeImage(imageId: $imageId) {
      ok
    }
  }
`;
