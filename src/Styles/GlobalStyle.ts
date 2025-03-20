import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-blue: #8490ff;
        --color-black: #101119;
        --color-white: #ffffff;
        --color-lightblue: #f9f9ff;

        font-size: 62.5%;
    }

    body {
        position: relative;
        width: 100%;
        min-height: 100vh;
        overflow-y: auto;
        font-family: "Inter", sans-serif;
        background-color: var(--color-white);
    }
`;
