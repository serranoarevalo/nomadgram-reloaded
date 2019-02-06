import React from "react";
import LoginPresenter from "./AuthPresenter";
import { isEmail } from "../../utils";

export default class extends React.Component {
  state = {
    username: "",
    password: "",
    login: true,
    firstName: "",
    lastName: "",
    email: ""
  };
  render() {
    const {
      username,
      email,
      password,
      login,
      firstName,
      lastName
    } = this.state;
    return (
      <LoginPresenter
        email={email}
        password={password}
        login={login}
        onChangeText={this.onChangeText}
        onLoginTap={this.onLoginTap}
        switchState={this.switchState}
        username={username}
        firstName={firstName}
        lastName={lastName}
      />
    );
  }
  onChangeText = (text, target) => {
    this.setState({
      [target]: text
    });
  };
  onLoginTap = () => {
    const { email, password } = this.state;
    if ([email, password].includes("")) {
      return;
    }
  };
  onSignupTap = () => {
    const { firstName, lastName, email, username, password } = this.state;
    if ([firstName, lastName, email, username, password].includes("")) {
      return;
    }
  };
  switchState = () => {
    this.setState(state => {
      return {
        login: !state.login,
        username: "",
        password: ""
      };
    });
  };
}
