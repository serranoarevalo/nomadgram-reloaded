import React from "react";
import AuthPresenter from "./AuthPresenter";

export default class extends React.Component {
  state = {
    logIn: true
  };
  render() {
    const { logIn } = this.state;
    return <AuthPresenter logIn={logIn} changeMode={this.changeMode} />;
  }
  changeMode = () => {
    this.setState(state => {
      return {
        logIn: !state.logIn
      };
    });
  };
}
