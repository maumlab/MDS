import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const Clock = React.memo<IconProps>(
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
        <g stroke={themes.colors[fillColor]} strokeWidth={2}>
          <path
            d="M12 6.5V12l3 3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={12} cy={12} r={10} />
        </g>
      </Svg>
    );
  }
);
