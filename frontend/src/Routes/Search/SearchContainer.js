import React from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { SEARCH } from "./SearchQueries";

class SearchQuery extends Query {}

class SearchContainer extends React.Component {
  render() {
    const {
      location: { search }
    } = this.props;
    let cleanSearch;
    if (search) {
      const urlParams = new URLSearchParams(search);
      cleanSearch = urlParams.get("term");
    } else {
      cleanSearch = null;
    }
    return (
      <SearchQuery
        query={SEARCH}
        variables={{ term: cleanSearch }}
        skip={!cleanSearch}
      >
        {({ data, loading }) => (
          <SearchPresenter loading={loading} data={data} empty={!cleanSearch} />
        )}
      </SearchQuery>
    );
  }
}

export default withRouter(SearchContainer);
