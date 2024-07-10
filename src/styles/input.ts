import { css } from "@emotion/react";

// type이 number, input-mode가 numeric 일 때 화살표 숨기기
const hideArrowByNumeric = css`
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"],
  input[input-mode="numeric"] {
    -moz-appearance: textfield;
  }
`;

export { hideArrowByNumeric };
