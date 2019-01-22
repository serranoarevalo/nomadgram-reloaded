import React from "react";
import { withRouter } from "react-router-dom";
import ImageDetailPresenter from "./ImageDetailPresenter";
import { Query } from "react-apollo";
import { GET_IMAGE } from "./ImageQueries";

class DetailQuery extends Query {}

class ImageDetailContainer extends React.Component {
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <DetailQuery query={GET_IMAGE} variables={{ id }}>
        {({ data, loading }) => (
          <ImageDetailPresenter loading={loading} data={data} />
        )}
      </DetailQuery>
    );
  }
}

export default withRouter(ImageDetailContainer);
