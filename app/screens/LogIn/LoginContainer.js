import React from "react";
import LoginPresenter from "./LoginPresenter";
import { isEmail } from "../../utils";

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
        onTap={this.onTap}
      />
    );
  }
  onChangeText = (text, target) => {
    this.setState({
      [target]: text
    });
  };
  onTap = () => {
    const { email, password } = this.state;
    if (email === "" || password === "") {
      return;
    } else if (!isEmail(email)) {
      alert("Your email is not valid");
    }
  };
}
