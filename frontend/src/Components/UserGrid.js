import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UserCard from "./UserCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 200px));
  grid-template-rows: 175px;
  grid-auto-rows: 175px;
  grid-gap: 25px;
  margin-bottom: 85px;
`;

const UserGrid = ({ users, className }) => (
  <Container className={className}>
    {users.map(user => (
      <UserCard
        key={user.id}
        id={user.id}
        avatar={user.profile.avatar}
        username={user.username}
        isFollowing={user.profile.isFollowing}
      />
    ))}
  </Container>
);

UserGrid.propTypes = {
  users: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default UserGrid;
