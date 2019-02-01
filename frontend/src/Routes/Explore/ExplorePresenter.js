import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../../Components/Wrapper";
import Loader from "../../Components/Loader";
import PhotoGrid from "../../Components/PhotoGrid";
import UserGrid from "../../Components/UserGrid";

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
        {users && users.length > 0 && <UserGrid users={users} />}
        {images && images.length > 0 && <PhotoGrid images={images} />}
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
