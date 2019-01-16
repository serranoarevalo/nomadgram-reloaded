import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Input from "../Input";
import Button from "../Button";
import Form from "../Form";

const Container = styled.div``;

const SInput = styled(Input)`
  margin-bottom: 10px;
  &:nth-child(5) {
    margin-bottom: 15px;
  }
`;

const SignUpPresenter = ({
  email,
  firstName,
  lastName,
  username,
  password,
  onChangeHandler,
  canSubmit,
  signUp
}) => (
  <Container>
    <Helmet>
      <title>Sign up • Nomadgram</title>
    </Helmet>
    <Form onSubmit={canSubmit ? signUp : null}>
      <SInput
        placeholder="Email"
        value={email}
        name="email"
        type={"email"}
        onChange={onChangeHandler}
      />
      <SInput
        placeholder="First Name"
        value={firstName}
        name="firstName"
        onChange={onChangeHandler}
      />
      <SInput
        placeholder="Last Name"
        value={lastName}
        name="lastName"
        onChange={onChangeHandler}
      />
      <SInput
        placeholder="Username"
        value={username}
        name="username"
        onChange={onChangeHandler}
      />
      <SInput
        placeholder="Password"
        value={password}
        name="password"
        type="password"
        onChange={onChangeHandler}
      />
      <Button text={"Sign up"} active={canSubmit} />
    </Form>
  </Container>
);

SignUpPresenter.propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  canSubmit: PropTypes.bool.isRequired
};

export default SignUpPresenter;
