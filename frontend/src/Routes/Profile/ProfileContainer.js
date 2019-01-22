import React from "react";
import { withRouter } from "react-router-dom";
import ProfilePresenter from "./ProfilePresenter";
import { Query } from "react-apollo";
import { GET_USER } from "./ProfileQueries";

class ProfileQuery extends Query {}

class ProfileContainer extends React.Component {
  render() {
    const {
      match: {
        params: { username }
      }
    } = this.props;

    return (
      <ProfileQuery query={GET_USER} variables={{ username }}>
        {({ data, loading }) => (
          <ProfilePresenter loading={loading} data={data} />
        )}
      </ProfileQuery>
    );
  }
}

export default withRouter(ProfileContainer);
