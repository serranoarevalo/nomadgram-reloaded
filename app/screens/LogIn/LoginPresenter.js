import React from "react";
import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components";
import { Layout } from "../../constants";
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
`;

const LoginPresenter = ({ email, password, onChangeText, onTap }) => (
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
    </Container>
  </KeyboardAvoidingView>
);

export default LoginPresenter;
