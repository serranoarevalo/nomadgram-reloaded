import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  height: ${props => {
    if (props.size === "md") {
      return "50px";
    } else if (props.size === "sm") {
      return "30px";
    } else if (props.size === "lg") {
      return "150px";
    } else {
      return "30px";
    }
  }};
  width: ${props => {
    if (props.size === "md") {
      return "50px";
    } else if (props.size === "sm") {
      return "30px";
    } else if (props.size === "lg") {
      return "150px";
    } else {
      return "30px";
    }
  }};
  background-image: url(${props => props.bg});
  background-position: center center;
  background-size: 100%;
  border-radius: 50%;
`;

const Avatar = ({ url, size = "md" }) => <Container bg={url} size={size} />;

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired
};

export default Avatar;
