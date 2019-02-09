import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import FeedPhotoPresenter from "./FeedPhotoPresenter";
import { TOGGLE_LIKE_IMAGE } from "./FeedPhotoQueries";

class ToggleLikeMutation extends Mutation {}

export default class PhotoContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
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
    isLiked: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isLiked: props.isLiked,
      likeCount: props.likeCount
    };
  }

  render() {
    const {
      creatorAvatar,
      creatorUsername,
      location,
      files,
      commentCount,
      caption,
      createdAt,
      id
    } = this.props;
    const { isLiked, likeCount, currentSlide } = this.state;
    return (
      <ToggleLikeMutation
        mutation={TOGGLE_LIKE_IMAGE}
        variables={{ imageId: id }}
      >
        {toggleLike => {
          this.toggleLike = toggleLike;
          return (
            <FeedPhotoPresenter
              creatorAvatar={creatorAvatar}
              creatorUsername={creatorUsername}
              location={location}
              files={files}
              likeCount={likeCount}
              commentCount={commentCount}
              caption={caption}
              createdAt={createdAt}
              updateNewComment={this.updateNewComment}
              isLiked={isLiked}
              onLikeClick={this.onLikeClick}
              onKeyUp={this.onKeyUp}
              currentSlide={currentSlide}
              onNextClick={this.onNextClick}
              onPreviousClick={this.onPreviousClick}
            />
          );
        }}
      </ToggleLikeMutation>
    );
  }

  onLikeClick = () => {
    const { likeCount, isLiked } = this.props;
    this.toggleLike();
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
}
