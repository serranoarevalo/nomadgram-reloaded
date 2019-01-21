import React from "react";
import { withRouter } from "react-router-dom";
import HeaderPresenter from "./HeaderPresenter";

class HeaderContainer extends React.Component {
  state = {
    search: ""
  };
  render() {
    const { search } = this.props;
    return (
      <HeaderPresenter
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        search={search}
      />
    );
  }
  onChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({
      search: value
    });
  };
  onSubmit = e => {
    const { history } = this.props;
    const { search } = this.state;
    e.preventDefault();
    history.push({
      pathname: "/search",
      search: `?term=${search}`
    });
  };
}

export default withRouter(HeaderContainer);
