import React from "react";
import { withNavigation } from "react-navigation";
import LoginPresenter from "./LoginPresenter";
import { isEmail } from "../../utils";

class LoginContainer extends React.Component {
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
        onSignUpTap={this.onSignUpTap}
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
  onSignUpTap = () => {
    const { navigation } = this.props;
    navigation.navigate("SignUp");
  };
}

export default withNavigation(LoginContainer);
