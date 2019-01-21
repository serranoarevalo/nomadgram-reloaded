import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import FollowBtn from "./FollowBtn";
import Bold from "./Bold";

const Container = styled.div`
  background-color: white;
  border-radius: 3px;
  border: ${props => props.theme.boxBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px;
`;

const SAvatar = styled(Avatar)`
  margin-bottom: 15px;
`;

const SBold = styled(Bold)`
  margin-bottom: 10px;
  display: block;
`;

const UserCard = ({ id, avatar, username, isFollowing }) => (
  <Container>
    <Link to={`/${username}`}>
      <SAvatar url={avatar} size="md" />
    </Link>
    <Link to={`/${username}`}>
      <SBold text={username} />
    </Link>
    <FollowBtn isFollowing={isFollowing} userId={id} />
  </Container>
);

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired
};

export default UserCard;
