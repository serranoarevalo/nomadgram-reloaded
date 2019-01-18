import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export const ME = gql`
  {
    me {
      user {
        username
      }
    }
  }
`;

const Me = ({ children }) => (
  <Query query={ME}>
    {({ data, loading }) => {
      if (!loading && data.me) {
        return children(data.me);
      } else {
        return children(null);
      }
    }}
  </Query>
);

export default Me;
