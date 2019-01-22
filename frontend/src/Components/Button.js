import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SButton = styled.button`
  border: 0;
  padding: ${props => (props.size === "md" ? "7px" : "5px")};
  color: ${props => (props.inverted ? props.theme.blackColor : "white")};
  background-color: ${props =>
    props.inverted ? "transparent" : props.theme.blueColor};
  opacity: ${props => (props.active ? 1 : 0.8)};
  font-weight: 600;
  width: 100%;
  border-radius: 4px;
  font-size: ${props => (props.size === "md" ? "14px" : "12px")};
  cursor: pointer;
  border: ${props =>
    props.inverted ? `1px solid ${props.theme.greyColor}` : "none"};
`;

const Button = ({
  text,
  active,
  onClick,
  className,
  size = "xs",
  inverted = false
}) => (
  <SButton
    active={active}
    onClick={onClick}
    className={className}
    size={size}
    inverted={inverted}
  >
    {text}
  </SButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["xs", "md"]),
  inverted: PropTypes.bool
};

export default Button;
