import React from "react";
import { Query } from "react-apollo";
import RootPresenter from "./RootPresenter";
import { IS_LOGGED_IN } from "./RootQueries";

export default class extends React.Component {
  render() {
    return (
      <Query query={IS_LOGGED_IN}>
        {({ data }) => <RootPresenter data={data} />}
      </Query>
    );
  }
}
