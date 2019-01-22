import gql from "graphql-tag";
import { DETAIL_IMAGE_FRAGMENT } from "../../sharedQueries";

export const GET_IMAGE = gql`
  query imageDetail($id: Int!) {
    imageDetail(imageId: $id) {
      image {
        ...DetailParts
      }
    }
  }
  ${DETAIL_IMAGE_FRAGMENT}
`;
