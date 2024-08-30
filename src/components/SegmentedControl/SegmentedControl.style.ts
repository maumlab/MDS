import styled from "@emotion/styled";
import { css, themes } from "../../styles";
import { SegmentedControlVariant } from "./SegmentedControl.type";

export const BaseContainer = styled.div<{ $variant: SegmentedControlVariant }>`
  width: 100%;
  height: 50px;
  display: flex;

  ${({ $variant }) => {
    switch ($variant) {
      case "basic":
        return css`
          padding: 2px 1px;
          background-color: ${themes.colors.gray6};
        `;
      case "outlined":
        return css`
          background-color: ${themes.colors.white};
        `;
    }
  }}
`;

export const ItemContainer = styled.button<{
  $variant: SegmentedControlVariant;
}>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  transition: background-color 0.2s;

  ${({ $variant }) => {
    switch ($variant) {
      case "basic":
        return css`
          &[data-active="true"] {
            background-color: ${themes.colors.white};
            border: 1px solid ${themes.colors.blue};
            ${themes.radius.md};
          }
        `;
      case "outlined":
        return css`
          border: 1px solid ${themes.colors.gray5};

          &:first-of-type {
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
          }

          &:last-of-type {
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
          }

          &:not(:first-of-type) {
            margin-left: -1px;
          }

          &[data-active="true"] {
            border-color: ${themes.colors.blue};
            background-color: ${themes.colors.blueLight3};

            & + button {
              margin-left: 0;
              border-left: 0;
            }
          }
        `;
    }
  }}
`;
