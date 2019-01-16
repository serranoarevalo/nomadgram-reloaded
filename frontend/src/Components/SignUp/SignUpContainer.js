import React from "react";
import SignUpPresenter from "./SignUpPresenter";

export default class extends React.Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  };
  render() {
    const { email, firstName, lastName, username, password } = this.state;
    return (
      <SignUpPresenter
        email={email}
        firstName={firstName}
        lastName={lastName}
        username={username}
        password={password}
        onChangeHandler={this.onChangeHandler}
      />
    );
  }
  onChangeHandler = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  };
}
