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
  &:nth-child(2) {
    margin-bottom: 15px;
  }
`;

const LogInPresenter = ({ username, password, onChangeHandler, logIn }) => (
  <Container>
    <Helmet>
      <title>Log in • Instaclone</title>
    </Helmet>
    <Form onSubmit={username !== "" && password !== "" ? logIn : null}>
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
      <Button text={"Log in"} active={username !== "" && password !== ""} />
    </Form>
  </Container>
);

LogInPresenter.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired
};

export default LogInPresenter;
