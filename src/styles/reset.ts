import { css } from "@emotion/react";
import { hideArrowByNumeric } from "./input";

const reset = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@1,600&display=swap");

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  // em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  // strong,
  // sub,
  // sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    &:hover {
      opacity: 0.7;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  }

  /* Safari 브라우저의 자동완성 버튼 숨기기 */
  input::-webkit-contacts-auto-fill-button,
  input::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    display: none !important;
  }

  body {
    font-family: "Noto Sans KR", "Montserrat", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  ${hideArrowByNumeric}
`;

export default reset;
