import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const CardInactive = React.memo<IconProps>(
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
        <g stroke={themes.colors[fillColor]} strokeWidth={1.5}>
          <path
            d="M3 9.5V17a1 1 0 001 1h16a1 1 0 001-1V9.5m-18 0V7a1 1 0 011-1h16a1 1 0 011 1v2.5m-18 0h18"
            strokeLinejoin="round"
          />
          <path d="M15 15h3" strokeLinecap="round" />
        </g>
      </Svg>
    );
  }
);
