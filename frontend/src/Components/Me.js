import React from "react";
import { Query } from "react-apollo";
import { ME } from "../sharedQueries";

const Me = ({ children }) => (
  <Query query={ME}>
    {({ data, loading, error }) => {
      if (!loading && data.me) {
        return children(data.me);
      } else {
        return children(null);
      }
    }}
  </Query>
);

export default Me;
