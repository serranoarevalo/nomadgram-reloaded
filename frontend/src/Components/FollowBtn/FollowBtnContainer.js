import React from "react";
import PropTypes from "prop-types";
import FollowBtnPresenter from "./FollowBtnPresenter";

export default class extends React.Component {
  static propTypes = {
    isFollowing: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: props.isFollowing
    };
  }
  render() {
    const { isFollowing } = this.state;
    return (
      <FollowBtnPresenter
        isFollowing={isFollowing}
        toggleBtn={this.toggleBtn}
      />
    );
  }
  toggleBtn = () => {
    this.setState(state => {
      return {
        isFollowing: !state.isFollowing
      };
    });
  };
}
