import reset from "styled-reset";

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;

    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  #root{
    height: 100vh;

  }
  html,
  body {
    box-sizing: border-box; /* default */
    margin: 0 auto;

  }

  input {
    outline: none;
  }


  button {
    font: inherit;
    cursor: pointer;

  }

  select {
    cursor: pointer;
  }

  textarea {
    outline: none;

    resize: none;
  }
`;

export default GlobalStyle;
