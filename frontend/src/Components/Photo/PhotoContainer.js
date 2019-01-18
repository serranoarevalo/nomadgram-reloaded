import React from "react";
import PropTypes from "prop-types";
import PhotoPresenter from "./PhotoPresenter";

export default class PhotoContainer extends React.Component {
  static propTypes = {
    inline: PropTypes.bool.isRequired,
    creatorAvatar: PropTypes.string.isRequired,
    creatorUsername: PropTypes.string.isRequired,
    location: PropTypes.string,
    photoUrl: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  };
  render() {
    const { inline } = this.props;
    return <PhotoPresenter inline={inline} />;
  }
}
