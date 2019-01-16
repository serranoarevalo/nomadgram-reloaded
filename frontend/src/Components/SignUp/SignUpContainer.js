import React from "react";
import { Mutation } from "react-apollo";
import SignUpPresenter from "./SignUpPresenter";
import { SIGN_UP } from "./SignUpQueries";
import { LOG_USER_IN } from "../../sharedQueries";

class LogUserInMutation extends Mutation {}
class SignUpMutation extends Mutation {}

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
      <LogUserInMutation mutation={LOG_USER_IN}>
        {logUserIn => (
          <SignUpMutation
            mutation={SIGN_UP}
            variables={{ email, firstName, password, username, lastName }}
            onCompleted={({ createAccount: { token } }) =>
              logUserIn({ variables: { token } })
            }
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
          </SignUpMutation>
        )}
      </LogUserInMutation>
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
