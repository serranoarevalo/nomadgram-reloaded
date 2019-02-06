import React from "react";
import Axios from "axios";
import { Facebook } from "expo";
import DropdownAlert from "react-native-dropdownalert";
import LoginPresenter from "./AuthPresenter";
import { Mutation } from "react-apollo";
import { LOG_IN, SIGN_UP, LOCAL_LOG_IN } from "./AuthQueries";

class LoginMutation extends Mutation {}
class SignUpMutation extends Mutation {}
class LocalLogIn extends Mutation {}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "nico",
      password: "las",
      login: false,
      firstName: "as",
      lastName: "as",
      email: "nan@lala.com",
      avatar: ""
    };
    this.notification = React.createRef();
  }
  render() {
    const {
      username,
      email,
      password,
      login,
      firstName,
      lastName,
      avatar
    } = this.state;
    return (
      <>
        <LocalLogIn mutation={LOCAL_LOG_IN}>
          {localLogIn => {
            this.localLogIn = localLogIn;
            return (
              <LoginMutation
                mutation={LOG_IN}
                variables={{ username, password }}
                onCompleted={this.handleCompleted}
                onError={this.handleError}
              >
                {logIn => {
                  this.logIn = logIn;
                  return (
                    <SignUpMutation
                      mutation={SIGN_UP}
                      variables={{
                        username,
                        password,
                        firstName,
                        lastName,
                        email,
                        avatar
                      }}
                      onCompleted={this.handleCompleted}
                      onError={this.handleError}
                    >
                      {signUp => {
                        this.signUp = signUp;
                        return (
                          <LoginPresenter
                            email={email}
                            password={password}
                            login={login}
                            onChangeText={this.onChangeText}
                            onLoginTap={this.onLoginTap}
                            onSignUpTap={this.onSignupTap}
                            switchState={this.switchState}
                            username={username}
                            firstName={firstName}
                            lastName={lastName}
                            onFacebookTap={this.onFacebookTap}
                          />
                        );
                      }}
                    </SignUpMutation>
                  );
                }}
              </LoginMutation>
            );
          }}
        </LocalLogIn>
        <DropdownAlert ref={this.notification} messageStyle={{ height: 500 }} />
      </>
    );
  }
  onChangeText = (text, target) => {
    this.setState({
      [target]: text
    });
  };
  onLoginTap = () => {
    const { username, password } = this.state;
    if ([username, password].includes("")) {
      return;
    }
    this.logIn();
  };
  onSignupTap = () => {
    const { firstName, lastName, email, username, password } = this.state;
    if ([firstName, lastName, email, username, password].includes("")) {
      return;
    }
    this.signUp().catch(e => {
      console.log(e);
    });
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
      this.notification.alertWithType("error", "Error", "Can't Reach Facebook");
    }
  };
  handleCompleted = data => {
    const { logIn, createAccount } = data;
    if (logIn && logIn.token) {
      this.localLogIn({
        variables: { token: logIn.token }
      });
    } else if (createAccount && createAccount.token) {
      this.localLogIn({ variables: { token: createAccount.token } });
    }
  };
}
