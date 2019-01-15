import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    body{
        background-color: ${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
    }
`;

export default GlobalStyles;
