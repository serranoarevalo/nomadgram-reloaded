import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Photo from "../../Components/Photo";
import Wrapper from "../../Components/Wrapper";

const SWrapper = styled(Wrapper)`
  max-width: 650px;
`;

const FeedPresenter = ({ data, loading, error }) => {
  if (loading) {
    return <Loader />;
  } else if (data) {
    const { feed: { images = [] } = {} } = data;
    return (
      <SWrapper>
        {images &&
          images.map(image => (
            <Photo
              key={image.id}
              id={image.id}
              inline={true}
              creatorAvatar={image.creator.profile.avatar}
              creatorUsername={image.creator.username}
              location={image.location}
              photoUrl={image.file}
              likeCount={image.likeCount}
              commentCount={image.commentCount}
              caption={image.caption}
              comments={image.comments}
              createdAt={image.createdAt}
              isLiked={image.isLiked}
            />
          ))}
      </SWrapper>
    );
  }
};

FeedPresenter.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default FeedPresenter;
