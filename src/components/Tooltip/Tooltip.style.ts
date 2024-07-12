import styled from "@emotion/styled";
import { TooltipStyleProps } from "./Tooltip.type";
import { AddDollarSign } from "../../types";
import { hexToRgba } from "../../lib";
import { css, keyframes } from "@emotion/react";
import { themes } from "../../styles";

export const Wrapper = styled.div`
  position: relative;
`;

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const FadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
export const TooltipWrapper = styled.div<AddDollarSign<TooltipStyleProps>>`
  &[data-visible="true"] {
    animation: ${FadeIn} 0.4s ease-out;
  }
  &[data-visible="false"] {
    animation: ${FadeOut} 0.4s ease-out;
  }
  position: absolute;
  width: max-content;
  white-space: pre-wrap;

  padding: 16px;
  ${themes.radius.sm}
  ${themes.typos.caption14Medium}
  ${themes.shadow.md}

  ${({ $color }) => {
    switch ($color) {
      case "black":
        const blackColor = "rgba(51, 51, 51, 0.9)";
        return css`
          color: ${themes.colors.white};
          background-color: ${blackColor};
          & > div.tri::before {
            background-color: ${blackColor};
          }
        `;
      case "white":
        const whiteColor = hexToRgba(themes.colors.white, 0.9);
        return css`
          color: ${themes.colors.gray1};
          background-color: ${whiteColor};
          & > div.tri::before {
            background-color: ${whiteColor};
          }
        `;
    }
  }}

  ${({ $triPosition }) => {
    switch ($triPosition) {
      case "left":
        return css`
          & > div.tri {
            left: 7px;
          }
        `;
      case "right":
        return css`
          & > div.tri {
            right: 7px;
          }
        `;
      case "center":
        return css`
          & > div.tri {
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
          & > div.tri {
            bottom: 100%;
            &::before {
              box-shadow: 2.8px 2.8px 8px 0px rgba(0, 0, 0, 0.2);
            }
          }
        `;
      case "bottom":
        return css`
          margin-bottom: 6px;
          & > div.tri {
            top: 100%;
            rotate: 180deg;
            &::before {
              box-shadow: -2.8px -2.8px 8px 0px rgba(0, 0, 0, 0.2);
            }
          }
        `;
      case "left":
        return css`
          margin-left: 6px;
          & > div.tri {
            top: 50%;
            left: unset;
            right: 100%;
            translate: 8px -50%;
            rotate: -90deg;
            &::before {
              box-shadow: -2.8px 2.8px 8px 0px rgba(0, 0, 0, 0.2);
            }
          }
        `;
      case "right":
        return css`
          margin-right: 6px;
          & > div.tri {
            top: 50%;
            left: 100%;
            translate: -8px -50%;
            rotate: 90deg;
            &::before {
              box-shadow: 2.8px -2.8px 8px 0px rgba(0, 0, 0, 0.2);
            }
          }
        `;
    }
  }}
`;

export const Tri = styled.div`
  position: absolute;
  width: 30px;
  height: 14px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 8.49px;
    height: 8.49px;
    rotate: 45deg;

    top: 8px;
    left: 50%;
    translate: -50% 25%;
  }
`;
