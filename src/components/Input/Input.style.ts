import styled from "@emotion/styled";
import { themes } from "../../styles";
import { InputVariant } from "./Input.type";

export const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${themes.spacing.xxs}px;
  position: relative;
`;

export const BaseInput = styled.input<{ $variant: InputVariant }>`
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
    border-color: ${({ $variant }) =>
      $variant === "metri" ? themes.colors.blue : themes.colors.emrBlue1};
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

export const LineBaseInput = styled.input`
  width: 100%;
  height: 44px;
  border: none;
  border-bottom: 2px solid ${themes.colors.gray6};
  padding: 11px 12px;
  outline: none;

  caret-color: ${themes.colors.blue};

  transition: border-color 0.2s;

  ${themes.typos.b4};
  line-height: 22px;
  color: ${themes.colors.gray1};

  &::placeholder {
    color: ${themes.colors.gray4};
  }

  &:focus,
  &:focus-visible,
  &:focus-within {
    border-bottom-color: ${themes.colors.blue};
  }

  &[data-error="true"] {
    border-color: ${themes.colors.redDark1};
  }

  &[data-success="true"] {
    border-color: ${themes.colors.green};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${themes.colors.gray7};
  }
`;
