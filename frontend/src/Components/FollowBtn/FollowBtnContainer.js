import React from "react";
import PropTypes from "prop-types";
import FollowBtnPresenter from "./FollowBtnPresenter";
import { Mutation } from "react-apollo";
import { FOLLOW_USER } from "./FollowButtonQueries";

class FollowMutation extends Mutation {}

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
    const { userId } = this.props;
    return (
      <FollowMutation
        mutation={FOLLOW_USER}
        variables={{ userId: parseInt(userId, 10) }}
        onCompleted={this.toggleBtn}
      >
        {followUser => (
          <FollowBtnPresenter
            isFollowing={isFollowing}
            toggleBtn={followUser}
          />
        )}
      </FollowMutation>
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
