import styled from "@emotion/styled";
import { ColorType, css, themes } from "../../styles";
import { CheckboxVariant } from "./Checkbox.type";
import { hexToRgba } from "../../lib";

export const BaseCheckbox = styled.label<{
  $variant: CheckboxVariant;
  $color: ColorType;
}>`
  display: inline-flex;
  align-items: center;
  gap: ${themes.spacing.md}px;
  ${themes.typos.b4}
  color: ${({ $color }) => themes.colors[$color]};

  cursor: pointer;

  ${({ $variant }) =>
    $variant === "region" &&
    css`
      padding: 12px;
      ${themes.radius.md};

      &:has(input[type="checkbox"]:checked) {
        background-color: ${themes.colors.blueLight3};

        color: ${themes.colors.blue};
        ${themes.typos.h6};
      }

      &:has(input[type="checkbox"]:disabled) {
        background-color: ${themes.colors.gray7};
        color: ${hexToRgba(themes.colors.gray3, 30)};
        opacity: 1 !important;
      }
    `}

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

  &:not(:checked):disabled {
    background-color: ${themes.colors.gray3};
  }

  &:checked:disabled {
    border-color: ${themes.colors.gray3};
    background-color: ${themes.colors.gray3};
  }

  @media (hover: hover) {
    &:not(:disabled):hover {
      opacity: 0.7;
    }
  }
`;
