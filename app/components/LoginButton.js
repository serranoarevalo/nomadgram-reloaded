import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Colors, Layout } from "../constants";

const Button = styled.TouchableOpacity``;

const Container = styled.View`
  text-align: center;
  background-color: ${Colors.blueColor};
  border-radius: ${Layout.borderRadius};
  padding: 10px 15px;
  opacity: ${props => (props.disabled ? "0.6" : "1")};
`;

const Text = styled.Text`
  text-align: center;
  font-weight: 600;
  color: white;
`;

const LoginButton = ({ onTap, disabled, text }) => (
  <Button onPress={onTap}>
    <Container disabled={disabled}>
      <Text>{text}</Text>
    </Container>
  </Button>
);

LoginButton.propTypes = {
  onTap: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default LoginButton;
