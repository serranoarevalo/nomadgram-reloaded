import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Colors } from "../constants";

const Input = styled.TextInput`
  background-color: ${Colors.greyColor};
  border-radius: 3px;
  border: 1px solid ${Colors.lightGreyColor};
  padding: 10px 15px;
`;

const LoginInput = ({ value, onChange, placeholder, inputType }) => (
  <Input
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
    secureTextEntry={inputType === "password" ? true : false}
    autoCapitalize={"none"}
    keyboardType={inputType === "email" ? "email-address" : "default"}
    placeholderTextColor={Colors.darkGreyColor}
  />
);

LoginInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string
};

export default LoginInput;
