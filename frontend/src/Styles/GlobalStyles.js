import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    body{
        background-color: ${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
    }
    svg{
        fill:#262626;
    }
    input, textarea, button{
        &:active,
        &:focus{
            outline:none;
        }
    }
    a{
        text-decoration:none;
        color:inherit;
    }
`;

export default GlobalStyles;
