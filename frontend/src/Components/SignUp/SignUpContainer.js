import React from "react";
import { Mutation } from "react-apollo";
import SignUpPresenter from "./SignUpPresenter";
import { SIGN_UP } from "./SignUpQueries";

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
      <Mutation
        mutation={SIGN_UP}
        variables={{ email, firstName, password, username, lastName }}
      >
        {signUp => (
          <SignUpPresenter
            email={email}
            firstName={firstName}
            lastName={lastName}
            username={username}
            password={password}
            onChangeHandler={this.onChangeHandler}
            canSubmit={
              email !== "" &&
              firstName !== "" &&
              lastName !== "" &&
              username !== "" &&
              password !== ""
            }
            signUp={signUp}
          />
        )}
      </Mutation>
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
