import { gql } from "apollo-boost";
import { DETAIL_IMAGE_FRAGMENT } from "../../sharedQueries";

export const GET_FEED = gql`
  query feed($page: Int!) {
    feed(page: $page) {
      images {
        ...DetailParts
      }
    }
  }
  ${DETAIL_IMAGE_FRAGMENT}
`;
