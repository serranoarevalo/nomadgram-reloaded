import React from "react";
import { Query, Mutation } from "react-apollo";
import RootPresenter from "./RootPresenter";
import { IS_LOGGED_IN, LOG_IN } from "./RootQueries";

export default class extends React.Component {
  render() {
    return (
      <Mutation mutation={LOG_IN} variables={{ token: 123 }}>
        {logIn => (
          <Query query={IS_LOGGED_IN}>
            {({ data }) => <RootPresenter data={data} logIn={logIn} />}
          </Query>
        )}
      </Mutation>
    );
  }
}
