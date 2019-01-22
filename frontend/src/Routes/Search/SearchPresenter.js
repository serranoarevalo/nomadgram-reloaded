import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Wrapper from "../../Components/Wrapper";
import Bold from "../../Components/Bold";
import UserGrid from "../../Components/UserGrid";
import PhotoGrid from "../../Components/PhotoGrid";
import Loader from "../../Components/Loader";

const TallWrapper = styled(Wrapper)`
  height: 50vh;
  text-align: center;
`;

const SearchPresenter = ({ data, empty, loading }) => {
  if (empty) {
    return (
      <TallWrapper>
        <Bold text="Search for something..." />
      </TallWrapper>
    );
  } else if (!loading && data) {
    const {
      searchUsers: { users },
      searchImages: { images }
    } = data;
    return (
      <TallWrapper>
        {users && users.length > 0 && <UserGrid users={users} />}
        {images && images.length > 0 && <PhotoGrid images={images} />}
        {users && users.length === 0 && images && images.length === 0 && (
          <Bold text="Nothing found..." />
        )}
      </TallWrapper>
    );
  } else if (loading) {
    return <Loader />;
  }

  return null;
};

SearchPresenter.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  empty: PropTypes.bool.isRequired
};

export default SearchPresenter;
