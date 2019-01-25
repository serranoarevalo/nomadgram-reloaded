import React from "react";
import { AppLoading, Font } from "expo";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const RedText = styled.Text`
  color: red;
`;

export default class App extends React.Component {
  state = {
    isLoaded: false
  };

  loadAssetsAsync = async () => {
    Font.loadAsync({
      ...Ionicons.font
    });
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
      return (
        <Container>
          <RedText>lalal</RedText>
        </Container>
      );
    }
  }
}
