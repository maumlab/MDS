import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const OutlinedCheck = React.memo<IconProps>(
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
        <g
          fillRule="evenodd"
          clipRule="evenodd"
          fill={themes.colors[fillColor]}
        >
          <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18.182 0a8.182 8.182 0 11-16.364 0 8.182 8.182 0 0116.364 0z" />
          <path d="M10.5 13.232l4.586-4.586a1 1 0 111.414 1.415l-6 6-3-3a1 1 0 011.414-1.415l1.586 1.586z" />
        </g>
      </Svg>
    );
  }
);
