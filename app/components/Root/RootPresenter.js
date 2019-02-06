import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
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
