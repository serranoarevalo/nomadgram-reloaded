import React from "react";
import LoginPresenter from "./LoginPresenter";

export default class extends React.Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    const { email, password } = this.state;
    return (
      <LoginPresenter
        email={email}
        password={password}
        onChangeText={this.onChangeText}
      />
    );
  }
  onChangeText = (text, target) => {
    this.setState({
      [target]: text
    });
  };
}
