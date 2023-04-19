import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-primary: #4747ff;
        --color-secondary: yellow;
    }

    body {
        background: #131415;
    }
`;
