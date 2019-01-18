import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.span`
  font-weight: 600;
`;

const Username = ({ text, className }) => (
  <Container className={className}>{text}</Container>
);

Username.propTypes = {
  text: PropTypes.string.isRequired
};

export default Username;
