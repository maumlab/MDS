import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const BindInactive = React.memo<IconProps>(
  ({
    size = IconSize.S,
    fillColor = "gray2",
    viewBox = "0 0 24 24",
    suffixForId,
    ...props
  }) => {
    const uniqueId =
      suffixForId ?? String(Math.random().toString(36).slice(2, 11));
    return (
      <Svg
        {...props}
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        <path
          d="M15.267 21H8a3 3 0 01-3-3V7.228a2.333 2.333 0 012.333-2.333v0"
          stroke={themes.colors[fillColor]}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path
          d="M14.448 3v4.547h4.2"
          stroke={themes.colors[fillColor]}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.8 17.158V5a2 2 0 012-2h5L19 7.737v9.42a1 1 0 01-1 1H8.8a1 1 0 01-1-1z"
          stroke={themes.colors[fillColor]}
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
);
