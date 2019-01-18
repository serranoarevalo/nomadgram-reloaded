import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../Button";

const SButton = styled(Button)`
  width: 50%;
`;

const FollowButtonPresenter = ({ isFollowing, toggleBtn }) => (
  <SButton
    active
    text={isFollowing ? "Unfollow" : "Follow"}
    onClick={toggleBtn}
  />
);

FollowButtonPresenter.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  toggleBtn: PropTypes.func.isRequired
};

export default FollowButtonPresenter;
