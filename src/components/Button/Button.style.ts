import styled from "@emotion/styled";
import { css, themes } from "../../styles";
import { ButtonSize, ButtonVariant } from "./Button.type";

export const BaseButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
}>`
  width: 100%;
  ${themes.radius.md};
  ${themes.typos.h6};

  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return css`
          background-color: ${themes.colors.blue};
          color: ${themes.colors.white};
        `;
      case "secondary":
        return css`
          background-color: ${themes.colors.blueLight3};
          border: 1px solid ${themes.colors.blue};
          color: ${themes.colors.blue};
        `;
      case "black":
        return css`
          background-color: ${themes.colors.gray1};
          color: ${themes.colors.white};
        `;
      case "gray":
        return css`
          background-color: ${themes.colors.gray6};
          color: ${themes.colors.gray1};
        `;
      case "emr":
        return css`
          background-color: ${themes.colors.emrBlue1};
          color: ${themes.colors.white};
        `;
    }
  }}

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          height: 44px;
        `;
      case "md":
        return css`
          height: 50px;
        `;
      case "lg":
        return css`
          height: 54px;
        `;
      case "xl":
        return css`
          height: 60px;
        `;
    }
  }}

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
