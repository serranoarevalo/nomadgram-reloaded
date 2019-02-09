import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "../../components/Loading";
import FeedPhoto from "../../components/FeedPhoto";

const ScrollView = styled.ScrollView``;

const FeedPresenter = ({ loading, data, error }) => {
  if (loading || error) {
    return <Loading />;
  } else {
    const { feed: { images = null } = {} } = data;
    if (images) {
      return (
        <ScrollView>
          {images.map(image => (
            <FeedPhoto
              key={image.id}
              id={image.id}
              isLiked={image.isLiked}
              createdAt={image.createdAt}
              caption={image.caption}
              commentCount={image.commentCount}
              likeCount={image.likeCount}
              files={image.files}
              creatorUsername={image.creator.username}
              creatorAvatar={image.creator.profile.avatar}
            />
          ))}
        </ScrollView>
      );
    }
  }
};

FeedPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  data: PropTypes.object
};

export default FeedPresenter;
