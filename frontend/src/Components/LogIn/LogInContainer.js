import React from "react";
import { Mutation } from "react-apollo";
import { toast } from "react-toastify";
import LogInPresenter from "./LogInPresenter";
import { LOGIN_MUTATION } from "./LoginQueries";

export default class extends React.Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    const { username, password } = this.state;
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{ username, password }}
        onError={() => toast.error("Wrong Username or Password")}
      >
        {logIn => (
          <LogInPresenter
            logIn={logIn}
            username={username}
            password={password}
            onChangeHandler={this.onChangeHandler}
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
