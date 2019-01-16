import React from "react";
import LogInPresenter from "./LogInPresenter";

export default class extends React.Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    const { username, password } = this.state;
    return (
      <LogInPresenter
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
