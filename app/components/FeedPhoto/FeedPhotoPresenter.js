import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "../Avatar";

const Header = styled.View`
  flex-direction: row;
`;

const FeedPhotoPresenter = ({ creatorAvatar }) => (
  <>
    <Header>
      <Avatar url={creatorAvatar} size="sm" />
    </Header>
  </>
);

FeedPhotoPresenter.propTypes = {
  creatorAvatar: PropTypes.string.isRequired,
  creatorUsername: PropTypes.string.isRequired,
  location: PropTypes.string,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onLikeTap: PropTypes.func.isRequired
};

export default FeedPhotoPresenter;
