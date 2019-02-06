import React from "react";
import styled from "styled-components";
import { Layout } from "../../constants";
import LoginInput from "../../components/LoginInput";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Logo = styled.Image`
  margin-bottom: 80px;
`;

const Form = styled.View`
  width: ${Layout.width - Layout.padding}px;
`;

const LoginPresenter = ({ email, password, onChangeText }) => (
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
    </Form>
  </Container>
);

export default LoginPresenter;
