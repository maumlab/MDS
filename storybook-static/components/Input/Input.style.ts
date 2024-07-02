import styled from "@emotion/styled";
import { css, themes } from "../../styles";

export const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${themes.spacing.xxs}px;
  position: relative;
`;

// type이 number일 때 화살표 숨기기
const hideArrowByNumeric = css`
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[input-mode="numeric"] {
    -moz-appearance: textfield;
  }
`;

export const BaseInput = styled.input`
  appearance: none;
  outline: none;

  caret-color: ${themes.colors.blue};

  transition: border-color 0.2s;

  border: 1px solid ${themes.colors.gray4};
  ${themes.radius.md}
  ${themes.typos.b4};
  line-height: 22px;
  color: ${themes.colors.gray1};
  width: 100%;
  height: 50px;
  padding-left: 15px;

  &:focus {
    border-color: ${themes.colors.blue};
  }

  &::placeholder {
    color: ${themes.colors.gray4};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${themes.colors.gray5};
  }

  &[data-error="true"] {
    border-color: ${themes.colors.redDark1};
  }

  &[data-success="true"] {
    border-color: ${themes.colors.green};
  }

  ${hideArrowByNumeric};
`;

export const Absolute = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
`;
