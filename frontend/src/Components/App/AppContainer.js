import React from "react";
import { Query } from "react-apollo";
import { ThemeProvider } from "styled-components";
import Router from "../Router";
import GlobalStyles from "../../Styles/GlobalStyles";
import theme from "../../Styles/theme";
import { APP_QUERIES } from "./AppQueries";

export default () => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
);
