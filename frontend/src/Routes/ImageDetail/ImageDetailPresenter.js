import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Photo from "../../Components/Photo";
import Wrapper from "../../Components/Wrapper";

const ImageDetailPresenter = ({ data, loading }) => {
  if (loading) {
    return <Loader />;
  } else if (!loading && data) {
    const {
      imageDetail: { image }
    } = data;
    return (
      <Wrapper>
        <Photo
          id={image.id}
          inline={false}
          creatorAvatar={image.creator.profile.avatar}
          creatorUsername={image.creator.username}
          location={image.location}
          files={image.files}
          likeCount={image.likeCount}
          commentCount={image.commentCount}
          caption={image.caption}
          comments={image.comments}
          createdAt={image.createdAt}
          isLiked={image.isLiked}
        />
      </Wrapper>
    );
  }
  return null;
};

ImageDetailPresenter.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

export default ImageDetailPresenter;
