import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HeartFilled, HeartEmpty, Bubble } from "../Icons";

const Buttons = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.span`
  cursor: pointer;
  &:first-child {
    margin-right: 20px;
  }
  transition: all 0.5s ease-in-out;
  svg {
    transition: all 0.5s ease-in-out;
    fill: ${props => (props.isLiked ? "#EC4956" : props.theme.blackColor)};
  }
`;

const PhotoButtons = ({ isLiked, onClick }) => (
  <Buttons>
    <Button isLiked={isLiked} onClick={onClick}>
      {isLiked ? <HeartFilled /> : <HeartEmpty />}
    </Button>
    <Button>
      <Bubble />
    </Button>
  </Buttons>
);

PhotoButtons.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PhotoButtons;
