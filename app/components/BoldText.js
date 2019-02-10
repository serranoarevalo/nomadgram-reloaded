import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Colors } from "../constants";

const Container = styled.Text`
  font-weight: 600;
  color: ${Colors.blackColor};
`;

const BoldText = ({ text }) => <Container>{text}</Container>;

BoldText.propTypes = {
  text: PropTypes.string.isRequired
};

export default BoldText;
