import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const Reservation = React.memo<IconProps>(
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
          <path d="M3 11h18" />
          <path d="M16 3v3M8 3v3" strokeLinecap="round" />
          <rect x={2.75} y={4.75} width={18.5} height={16.5} rx={2.25} />
        </g>
      </Svg>
    );
  }
);
