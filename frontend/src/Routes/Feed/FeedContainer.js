import React from "react";
import { Query } from "react-apollo";
import FeedPresenter from "./FeedPresenter";
import { GET_FEED } from "./FeedQueries";

class FeedQuery extends Query {}

export default class FeedContainer extends React.Component {
  state = {
    page: 0
  };
  render() {
    const { page } = this.state;
    return (
      <FeedQuery query={GET_FEED} variables={{ page }}>
        {({ data, loading, error }) => (
          <FeedPresenter loading={loading} data={data} error={error} />
        )}
      </FeedQuery>
    );
  }
}
