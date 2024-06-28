import styled from "@emotion/styled";
import { themes } from "../../styles";

export const BaseRadio = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${themes.spacing.md}px;
  ${themes.typos.b4}
  color: ${themes.colors.gray3};

  cursor: pointer;

  &:has(input[type="radio"]:disabled) {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    &:has(input[type="radio"]:not(:disabled):hover) {
      opacity: 0.7;
    }
  }
`;

export const BaseRadioInput = styled.input`
  appearance: none;

  width: 20px;
  height: 20px;
  border: 2px solid ${themes.colors.gray3};
  ${themes.radius.circle}

  transition: border-width 0.1s;

  cursor: pointer;

  &:checked {
    border: 5px solid ${themes.colors.blue};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:not(:checked):disabled {
    background-color: ${themes.colors.gray3};
  }

  &:focus-visible {
    ${themes.focusVisible};
  }

  @media (hover: hover) {
    &:not(:disabled):hover {
      opacity: 0.7;
    }
  }
`;
