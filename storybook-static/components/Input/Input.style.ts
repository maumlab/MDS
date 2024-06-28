import styled from "@emotion/styled";
import { themes } from "../../styles";

export const BaseContainer = styled.div`
  /* height: 72px; */
  display: flex;
  flex-direction: column;
  gap: ${themes.spacing.xxs}px;
  position: relative;
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
`;

export const Absolute = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
`;
