import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const Scale = React.memo<IconProps>(
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
        <g stroke={themes.colors[fillColor]} strokeWidth={1.5}>
          <rect
            x={3.75}
            y={3.75}
            width={16.5}
            height={16.5}
            rx={2.25}
            strokeLinejoin="round"
          />
          <path d="M8 13v3M12 8v8M16 11v5" strokeLinecap="round" />
        </g>
      </Svg>
    );
  }
);
