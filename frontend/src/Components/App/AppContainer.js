import React from "react";
import { Query } from "react-apollo";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import Router from "../Router";
import GlobalStyles from "../../Styles/GlobalStyles";
import theme from "../../Styles/theme";
import { APP_QUERIES } from "./AppQueries";
import Footer from "../Footer";
import "react-toastify/dist/ReactToastify.css";

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
      <Footer />
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </>
  </ThemeProvider>
);
