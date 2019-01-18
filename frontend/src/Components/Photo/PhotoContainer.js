import React from "react";
import PropTypes from "prop-types";
import PhotoPresenter from "./PhotoPresenter";
import Me from "../Me";

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
    createdAt: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      newComment: "",
      isLiked: props.isLiked,
      likeCount: props.likeCount,
      selfComments: []
    };
  }

  render() {
    const {
      inline,
      creatorAvatar,
      creatorUsername,
      location,
      photoUrl,
      commentCount,
      caption,
      createdAt,
      comments
    } = this.props;
    const { newComment, isLiked, likeCount } = this.state;
    return (
      <Me>
        {me => {
          this.currentUser = me.user.username;
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
              isLiked={isLiked}
              onLikeClick={this.onLikeClick}
            />
          );
        }}
      </Me>
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

  onLikeClick = () => {
    const { likeCount, isLiked } = this.props;
    this.setState(state => {
      let likeNumber;
      if (!isLiked) {
        if (likeCount === state.likeCount) {
          likeNumber = likeCount + 1;
        } else {
          likeNumber = likeCount;
        }
      } else {
        if (likeCount === state.likeCount) {
          likeNumber = likeCount - 1;
        } else {
          likeNumber = likeCount;
        }
      }
      return {
        isLiked: !state.isLiked,
        likeCount: likeNumber
      };
    });
  };

  onCommentSubmit = () => {
    const { newComment } = this.state;
  };
}
