import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";

const getSize = size => {
  if (size === "md") {
    return 50;
  } else if (size === "sm") {
    return 30;
  } else if (size === "lg") {
    return 70;
  } else {
    return 30;
  }
};

const Container = styled.View`
  height: ${props => `${getSize(props.size)}px`};
  width: ${props => `${getSize(props.size)}px`};
  border-radius: 50;
  overflow: hidden;
`;

const Avatar = ({ url, size = "md" }) => (
  <Container size={size}>
    <Image
      source={{ uri: url }}
      style={{ height: getSize(size), width: getSize(size) }}
    />
  </Container>
);

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired
};

export default Avatar;
