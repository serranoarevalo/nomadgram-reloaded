import React from "react";
import Axios from "axios";
import { Facebook } from "expo";
import LoginPresenter from "./AuthPresenter";

export default class extends React.Component {
  state = {
    username: "",
    password: "",
    login: false,
    firstName: "",
    lastName: "",
    email: "",
    avatar: ""
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
        onFacebookTap={this.onFacebookTap}
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
  onFacebookTap = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        "324490305083660",
        {
          permissions: ["public_profile", "email"]
        }
      );
      if (type === "success") {
        const {
          data: { email, first_name, id, last_name }
        } = await Axios("https://graph.facebook.com/me", {
          params: {
            access_token: token,
            fields: "first_name,last_name,email"
          }
        });
        this.setState({
          email,
          firstName: first_name,
          lastName: last_name,
          avatar: `http://graph.facebook.com/${id}/picture?type=large`
        });
      }
    } catch (error) {
      console.log(error);
      alert("Can't Reach Facebook");
    }
  };
}
