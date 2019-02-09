import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "../../components/Loading";

const FeedPresenter = ({ loading, data }) => (loading ? <Loading /> : null);

FeedPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object
};

export default FeedPresenter;
