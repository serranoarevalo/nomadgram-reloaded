import React from "react";
import AuthPresenter from "./AuthPresenter";

export default class extends React.Component {
  state = {
    logIn: false
  };
  render() {
    const { logIn } = this.state;
    return <AuthPresenter logIn={logIn} />;
  }
}
