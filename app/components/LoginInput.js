import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Colors, Layout } from "../constants";

const Input = styled.TextInput`
  background-color: ${Colors.greyColor};
  border-radius: ${Layout.borderRadius};
  border: 1px solid ${Colors.lightGreyColor};
  padding: 10px 15px;
  margin-bottom: 15px;
`;

const LoginInput = ({ value, onChange, placeholder, inputType, className }) => (
  <Input
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
    secureTextEntry={inputType === "password" ? true : false}
    autoCapitalize={"none"}
    className={className}
    keyboardType={inputType === "email" ? "email-address" : "default"}
    placeholderTextColor={Colors.darkGreyColor}
    autoCorrect={false}
  />
);

LoginInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string
};

export default LoginInput;
