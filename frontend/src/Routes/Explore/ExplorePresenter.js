import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Wrapper from "../../Components/Wrapper";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import PhotoGrid from "../../Components/PhotoGrid";

const UsersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 200px));
  grid-gap: 25px;
  margin-bottom: 85px;
`;

const ExplorePresenter = ({ data, loading }) => {
  if (loading) {
    return <Loader />;
  } else if (data.latestImages && data.latestUsers) {
    const {
      latestImages: { images = [] } = {},
      latestUsers: { users = [] } = {}
    } = data;
    return (
      <Wrapper>
        {users && (
          <UsersWrapper>
            {users.map(user => (
              <UserCard
                key={user.id}
                id={user.id}
                avatar={user.profile.avatar}
                username={user.username}
                isFollowing={user.profile.isFollowing}
              />
            ))}
          </UsersWrapper>
        )}
        {images && <PhotoGrid images={images} />}
      </Wrapper>
    );
  } else {
    return null;
  }
};

ExplorePresenter.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

export default ExplorePresenter;
