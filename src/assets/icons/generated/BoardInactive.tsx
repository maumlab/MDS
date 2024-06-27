import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const BoardInactive = React.memo<IconProps>(
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
        <g strokeWidth={1.5}>
          <path
            d="M16 6h1a2 2 0 012 2v12"
            stroke={themes.colors[fillColor]}
            strokeLinecap="round"
          />
          <path
            d="M4 5a1 1 0 011-1h7a4 4 0 014 4v11a1 1 0 01-1 1H8a4 4 0 01-4-4V5z"
            fill={themes.colors[fillColor]}
            stroke={themes.colors[fillColor]}
          />
          <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 14.5H8M12 10.5H8" />
          </g>
        </g>
      </Svg>
    );
  }
);
