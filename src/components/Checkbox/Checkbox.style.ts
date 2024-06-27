import styled from "@emotion/styled";
import { themes } from "../../styles";

export const BaseCheckbox = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${themes.spacing.md}px;
  ${themes.typos.b4}
  color: ${themes.colors.gray3};

  cursor: pointer;

  &:has(input[type="checkbox"]:disabled) {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    &:has(input[type="checkbox"]:not(:disabled):hover) {
      opacity: 0.7;
    }
  }
`;

export const BaseCheckboxInput = styled.input`
  appearance: none;
  position: relative;

  width: 18px;
  height: 18px;
  border: 2px solid ${themes.colors.gray3};
  ${themes.radius.sm};

  transition: border-color 0.2s, background-color 0.2s;

  cursor: pointer;

  &:focus-visible {
    ${themes.focusVisible}
  }

  &:checked {
    background-color: ${themes.colors.blue};
    border-color: ${themes.colors.blue};

    &::before,
    &::after {
      content: "";
      position: absolute;
      background-color: ${themes.colors.white};
      border-radius: 3px; /* Adjust this for the roundness of the checkmark ends */
    }

    &::before {
      width: 2px;
      height: 7px;
      top: 5px;
      left: 3px;
      transform: rotate(-45deg);
    }

    &::after {
      width: 2px;
      height: 10px;
      top: 2px;
      left: 8px;
      transform: rotate(45deg);
    }
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    &:not(:disabled):hover {
      opacity: 0.7;
    }
  }
`;
