import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";

export default () => (
  <>
    <GlobalStyles />
    <Router loggedIn={false} />
  </>
);
