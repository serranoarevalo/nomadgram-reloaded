import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";

const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Loading>
    <ActivityIndicator />
  </Loading>
);
