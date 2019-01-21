import gql from "graphql-tag";
import { USER_FRAGMENT, IMAGE_FRAGMENT } from "../../sharedQueries";

export const SEARCH = gql`
  query search($term: String!) {
    searchUsers(term: $term) {
      users {
        ...UserParts
      }
    }

    searchImages(term: $term) {
      images {
        ...ImageParts
      }
    }
  }
  ${USER_FRAGMENT}
  ${IMAGE_FRAGMENT}
`;
