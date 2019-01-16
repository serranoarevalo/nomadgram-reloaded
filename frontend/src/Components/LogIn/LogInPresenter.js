import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";

const Container = styled.div``;

const SInput = styled(Input)`
  margin-bottom: 10px;
  &:nth-child(2) {
    margin-bottom: 15px;
  }
`;

const LogInPresenter = ({ username, password, onChangeHandler }) => (
  <Container>
    <form>
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
    </form>
  </Container>
);

LogInPresenter.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default LogInPresenter;
