import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 935px;
`;

const Wrapper = ({ className, children }) => (
  <Div className={className}>{children}</Div>
);

export default Wrapper;
