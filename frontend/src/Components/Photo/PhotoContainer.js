import React from "react";
import PropTypes from "prop-types";
import PhotoPresenter from "./PhotoPresenter";

export default class PhotoContainer extends React.Component {
  static propTypes = {
    inline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        creator: PropTypes.shape({
          username: PropTypes.string.isRequired
        }).isRequired
      })
    ).isRequired,
    creatorAvatar: PropTypes.string.isRequired,
    creatorUsername: PropTypes.string.isRequired,
    location: PropTypes.string,
    photoUrl: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  };

  state = {
    newComment: ""
  };

  render() {
    const {
      inline,
      creatorAvatar,
      creatorUsername,
      location,
      photoUrl,
      likeCount,
      commentCount,
      caption,
      createdAt,
      comments
    } = this.props;
    const { newComment } = this.state;
    return (
      <PhotoPresenter
        inline={inline}
        creatorAvatar={creatorAvatar}
        creatorUsername={creatorUsername}
        location={location}
        photoUrl={photoUrl}
        likeCount={likeCount}
        commentCount={commentCount}
        caption={caption}
        createdAt={createdAt}
        comments={comments}
        updateNewComment={this.updateNewComment}
        newComment={newComment}
      />
    );
  }

  updateNewComment = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      newComment: value
    });
  };
}