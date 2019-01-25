import React from "react";
import { AppLoading, Font, Asset } from "expo";
import { Ionicons } from "@expo/vector-icons";
import AppNavigator from "./navigation/AppNavigator";

export default class App extends React.Component {
  state = {
    isLoaded: false
  };

  loadAssetsAsync = async () =>
    Promise.all([
      Asset.loadAsync([
        require("./assets/logo-white.png"),
        require("./assets/logo.png")
      ]),
      Font.loadAsync({
        ...Ionicons.font
      })
    ]);

  handleLoadingError = error => {
    console.warn(error);
  };

  handleLoadingFinish = () => {
    this.setState({
      isLoaded: true
    });
  };

  render() {
    const { isLoaded } = this.state;
    if (isLoaded) {
      return (
        <AppLoading
          onError={this.handleLoadingError}
          onFinish={this.handleLoadingFinish}
          startAsync={this.loadAssetsAsync}
        />
      );
    } else {
      return <AppNavigator />;
    }
  }
}
