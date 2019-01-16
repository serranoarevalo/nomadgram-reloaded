import React from "react";
import { Mutation } from "react-apollo";
import { toast } from "react-toastify";
import LogInPresenter from "./LogInPresenter";
import { LOGIN_MUTATION } from "./LoginQueries";
import { LOG_USER_IN } from "../../sharedQueries";

class LogUserInMutation extends Mutation {}
class LogInMutation extends Mutation {}

export default class extends React.Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    const { username, password } = this.state;
    return (
      <LogUserInMutation mutation={LOG_USER_IN}>
        {logUserIn => (
          <LogInMutation
            mutation={LOGIN_MUTATION}
            variables={{ username, password }}
            onError={() => toast.error("Wrong Username or Password")}
            onCompleted={({ logIn: { token } }) =>
              logUserIn({ variables: { token } })
            }
          >
            {logIn => (
              <LogInPresenter
                logIn={logIn}
                username={username}
                password={password}
                onChangeHandler={this.onChangeHandler}
              />
            )}
          </LogInMutation>
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
