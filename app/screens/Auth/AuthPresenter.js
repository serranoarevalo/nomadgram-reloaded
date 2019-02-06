import React from "react";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Layout, Colors } from "../../constants";
import LoginInput from "../../components/LoginInput";
import LoginButton from "../../components/LoginButton";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Logo = styled.Image`
  margin-bottom: 25px;
`;

const Form = styled.View`
  width: ${Layout.width - Layout.padding}px;
  margin-bottom: 25px;
`;

const Link = styled.Text`
  font-weight: 600;
  color: ${Colors.darkBlueColor};
  padding: 10px 0px;
`;

const LoginPresenter = ({
  email,
  password,
  onChangeText,
  onLoginTap,
  switchState,
  login,
  username,
  firstName,
  lastName
}) => (
  <KeyboardAvoidingView style={{ flex: 1 }}>
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      {login ? (
        <Form>
          <LoginInput
            onChange={text => onChangeText(text, "username")}
            value={username}
            placeholder="Username"
          />
          <LoginInput
            onChange={text => onChangeText(text, "password")}
            inputType={"password"}
            value={password}
            placeholder={"Password"}
          />
          <LoginButton
            text={"Log In"}
            disabled={[username, password].includes("")}
            onTap={[username, password].includes("") ? null : onLoginTap}
          />
        </Form>
      ) : (
        <Form>
          <LoginInput
            onChange={text => onChangeText(text, "firstName")}
            value={firstName}
            placeholder="First Name"
          />
          <LoginInput
            onChange={text => onChangeText(text, "lastName")}
            value={lastName}
            placeholder="Last Name"
          />
          <LoginInput
            onChange={text => onChangeText(text, "email")}
            value={email}
            inputType="email"
            placeholder="Email"
          />
          <LoginInput
            onChange={text => onChangeText(text, "password")}
            value={password}
            inputType="password"
            placeholder="Password"
          />
          <LoginButton
            text={"Sign Up"}
            disabled={[firstName, lastName, email, password].includes("")}
            onTap={
              [firstName, lastName, email, password].includes("")
                ? null
                : onLoginTap
            }
          />
        </Form>
      )}
      <TouchableOpacity onPress={switchState}>
        <Link>{login ? "Create an Account" : "Log in"}</Link>
      </TouchableOpacity>
    </Container>
  </KeyboardAvoidingView>
);

LoginPresenter.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onLoginTap: PropTypes.func.isRequired,
  switchState: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default LoginPresenter;
