import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        user-select: none;
        background: #131415;
        color: white;
        font-family: 'Montserrat', sans-serif;
    }
    :root {
        --primary: #4747ff;
    }
`;

export default GlobalStyles;
