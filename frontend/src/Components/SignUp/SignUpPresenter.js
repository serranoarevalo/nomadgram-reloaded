import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Input from "../Input";
import Button from "../Button";

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
  onChangeHandler
}) => (
  <Container>
    <Helmet>
      <title>Sign up • Instaclone</title>
    </Helmet>
    <form>
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
      <Button
        text={"Sign up"}
        active={
          username !== "" &&
          password !== "" &&
          email !== "" &&
          firstName !== "" &&
          lastName !== ""
        }
      />
    </form>
  </Container>
);

SignUpPresenter.propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default SignUpPresenter;
