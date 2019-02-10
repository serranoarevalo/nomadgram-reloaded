import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Colors } from "../constants";

const Container = styled.Text`
  color: ${Colors.blackColor};
  font-size: ${props => (props.small ? "10px" : "12px")};
`;

const Text = ({ text, small = false }) => (
  <Container small={small}>{text}</Container>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
  small: PropTypes.bool
};

export default Text;
