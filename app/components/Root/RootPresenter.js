import React from "react";

import MainNavigator from "../../navigation/MainNavigator";
import AuthNavigator from "../../navigation/AuthNavigator";

export default ({ data }) => {
  const {
    auth: { isLoggedIn }
  } = data;
  if (isLoggedIn) {
    return <MainNavigator />;
  } else {
    return <AuthNavigator />;
  }
};
