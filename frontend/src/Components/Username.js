import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.span`
  font-weight: 600;
`;

const Username = ({ username, className }) => (
  <Container className>{username}</Container>
);

Username.propTypes = {
  username: PropTypes.string.isRequired
};

export default Username;
