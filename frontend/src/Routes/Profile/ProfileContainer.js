import React from "react";
import { withRouter } from "react-router-dom";
import ProfilePresenter from "./ProfilePresenter";
import { Query, Mutation } from "react-apollo";
import { GET_USER } from "./ProfileQueries";
import { LOG_USER_OUT } from "../../sharedQueries";

class ProfileQuery extends Query {}
class LogOutMutation extends Mutation {}

class ProfileContainer extends React.Component {
  state = {
    modalOpen: false
  };
  render() {
    const {
      match: {
        params: { username }
      }
    } = this.props;
    const { modalOpen } = this.state;
    return (
      <LogOutMutation mutation={LOG_USER_OUT}>
        {logUserOut => (
          <ProfileQuery query={GET_USER} variables={{ username }}>
            {({ data, loading }) => (
              <ProfilePresenter
                logUserOut={logUserOut}
                toggleModal={this.toggleModal}
                loading={loading}
                data={data}
                modalOpen={modalOpen}
              />
            )}
          </ProfileQuery>
        )}
      </LogOutMutation>
    );
  }
  toggleModal = () => {
    this.setState(state => {
      return {
        modalOpen: !state.modalOpen
      };
    });
  };
}

export default withRouter(ProfileContainer);
