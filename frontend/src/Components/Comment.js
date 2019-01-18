import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Bold from "./Bold";

const Container = styled.div`
  margin-bottom: 7px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SBold = styled(Bold)`
  margin-right: 5px;
`;

const Comment = ({ username, comment }) => (
  <Container>
    <SBold text={username} />
    {comment}
  </Container>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default Comment;
