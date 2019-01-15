import React from "react";
import { Query } from "react-apollo";
import Router from "../Router";
import GlobalStyles from "../GlobalStyles";
import { APP_QUERIES } from "./AppQueries";

export default () => (
  <>
    <GlobalStyles />
    <Query query={APP_QUERIES}>
      {({
        data: {
          auth: { isLoggedIn }
        }
      }) => <Router isLoggedIn={isLoggedIn} />}
    </Query>
  </>
);
