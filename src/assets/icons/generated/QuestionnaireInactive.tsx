import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const QuestionnaireInactive = React.memo<IconProps>(
  ({
    size = IconSize.S,
    fillColor = "gray2",
    viewBox = "0 0 24 24",
    suffixForId,
    ...props
  }) => {
    return (
      <Svg
        {...props}
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        <g
          stroke={themes.colors[fillColor]}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14.476v4.746A1.778 1.778 0 0117.222 21H4.778A1.778 1.778 0 013 19.222V6.778A1.778 1.778 0 014.778 5h4.746" />
          <path d="M17.286 3L21 6.714 11.714 16H8v-3.714L17.286 3z" />
        </g>
      </Svg>
    );
  }
);
