import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Photo from "../../Components/Photo";
import Wrapper from "../../Components/Wrapper";

const FeedPresenter = ({ data, loading, error }) => {
  if (loading) {
    return <Loader />;
  } else if (data) {
    const { feed: { images = [] } = {} } = data;
    return (
      <Wrapper>
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
            />
          ))}
      </Wrapper>
    );
  }
};

FeedPresenter.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default FeedPresenter;
