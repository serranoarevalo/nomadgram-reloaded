import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  border: none;
  border: ${props => props.theme.boxBorder};
  background-color: ${props => props.theme.bgColor};
  border-radius: 3px;
  padding: 12.5px 10px;
  width: 100%;
  font-size: 12px;
  &:focus {
    outline: none;
    border-color: #b2b2b2;
  }
  &::placeholder {
    color: ${props => props.theme.greyColor};
  }
`;

const Input = ({
  value,
  placeholder,
  type = "text",
  name,
  onChange,
  className
}) => (
  <Container
    value={value}
    placeholder={placeholder}
    type={type}
    onChange={onChange}
    name={name}
    className={className}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
