import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Wrapper from "../../Components/Wrapper";

const FeedPresenter = ({ logIn }) => <Wrapper>Auth</Wrapper>;

FeedPresenter.propTypes = {
  logIn: PropTypes.bool.isRequired
};

export default FeedPresenter;
