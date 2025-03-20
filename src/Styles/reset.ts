import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    line-height: 1.5;
    font-size: 100%;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  :focus {
    outline: 2px solid blue;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  button, input, textarea, select {
    font: inherit;
    outline: none;
  }
`;
