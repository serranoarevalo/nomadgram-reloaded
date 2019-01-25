import React from "react";
import { AsyncStorage } from "react-native";
import { AppLoading, Font, Asset } from "expo";
import { ApolloProvider } from "react-apollo";
import { Ionicons } from "@expo/vector-icons";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import ApolloClient from "apollo-boost";
import AppNavigator from "./navigation/AppNavigator";
import clientOptions from "./apollo";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    client: null
  };

  loadAssetsAsync = async () => {
    const cache = new InMemoryCache();
    try {
      await Asset.loadAsync([
        require("./assets/logo-white.png"),
        require("./assets/logo.png")
      ]),
        await Font.loadAsync({
          ...Ionicons.font
        });
      await persistCache({
        cache,
        storage: AsyncStorage
      });
    } catch (err) {
      console.log(err);
    } finally {
      const client = new ApolloClient({ ...clientOptions, cache });
      this.setState({
        client
      });
    }
  };

  handleLoadingError = error => {
    console.warn(error);
  };

  handleLoadingFinish = () => {
    this.setState({
      isLoaded: true
    });
  };

  render() {
    const { isLoaded, client } = this.state;
    if (isLoaded && client) {
      return (
        <ApolloProvider client={client}>
          <AppNavigator />
        </ApolloProvider>
      );
    } else {
      return (
        <AppLoading
          onError={this.handleLoadingError}
          onFinish={this.handleLoadingFinish}
          startAsync={this.loadAssetsAsync}
        />
      );
    }
  }
}
