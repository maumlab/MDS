import styled from "@emotion/styled";
import { TooltipStyleProps } from "./Tooltip.type";
import { AddDollarSign, hexToRgba } from "../../lib";
import { css } from "@emotion/react";
import { themes } from "../../styles";

export const Wrapper = styled.div`
  position: relative;
`;

export const TooltipWrapper = styled.div<AddDollarSign<TooltipStyleProps>>`
  position: absolute;
  width: max-content;
  white-space: pre-wrap;

  padding: 16px;
  ${themes.radius.sm}
  ${themes.typos.caption14Medium}
  ${themes.shadow.md}

  &::before {
    content: "";
    position: absolute;
    border: 6px solid transparent;
    border-top: none;
  }

  ${({ $color }) => {
    switch ($color) {
      case "black":
        const blackColor = "rgba(51, 51, 51, 0.9)";
        return css`
          color: ${themes.colors.white};
          background-color: ${blackColor};
          &::before {
            border-bottom-color: ${blackColor};
          }
        `;
      case "white":
        const whiteColor = hexToRgba(themes.colors.white, 0.9);
        return css`
          color: ${themes.colors.gray1};
          background-color: ${whiteColor};
          &::before {
            border-bottom-color: ${whiteColor};
          }
        `;
    }
  }}

  ${({ $triPosition }) => {
    switch ($triPosition) {
      case "left":
        return css`
          &::before {
            left: 16px;
          }
        `;
      case "right":
        return css`
          &::before {
            right: 16px;
          }
        `;
      case "center":
        return css`
          &::before {
            left: 50%;
            translate: -50% 0;
          }
        `;
    }
  }}

  ${({ $position }) => {
    switch ($position) {
      case "top":
        return css`
          margin-top: 6px;
          &::before {
            bottom: 100%;
          }
        `;
      case "bottom":
        return css`
          margin-bottom: 6px;
          &::before {
            top: 100%;
            rotate: 180deg;
          }
        `;
      case "left":
        return css`
          margin-left: 6px;
          &::before {
            top: 50%;
            left: unset;
            right: 100%;
            translate: 25% -50%;
            rotate: 270deg;
          }
        `;
      case "right":
        return css`
          margin-right: 6px;
          &::before {
            top: 50%;
            left: 100%;
            translate: -25% -50%;
            rotate: 90deg;
          }
        `;
    }
  }}
`;
