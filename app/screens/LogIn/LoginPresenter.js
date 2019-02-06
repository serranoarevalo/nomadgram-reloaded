import React from "react";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import styled from "styled-components";
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
  margin-bottom: 50px;
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
  onTap,
  onSignUpTap
}) => (
  <KeyboardAvoidingView style={{ flex: 1 }}>
    <Container>
      <Logo source={require("../../assets/logo.png")} />
      <Form>
        <LoginInput
          onChange={text => onChangeText(text, "email")}
          value={email}
          placeholder="Email"
        />
        <LoginInput
          onChange={text => onChangeText(text, "password")}
          inputType={"password"}
          value={password}
          placeholder={"Password"}
        />
        <LoginButton
          text={"Log In"}
          disabled={email === "" || password === ""}
          onTap={onTap}
        />
      </Form>
      <TouchableOpacity onPress={onSignUpTap}>
        <Link>Create an Account</Link>
      </TouchableOpacity>
    </Container>
  </KeyboardAvoidingView>
);

export default LoginPresenter;
