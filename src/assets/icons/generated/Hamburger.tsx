import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const Hamburger = React.memo<IconProps>(
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
        <g fill={themes.colors[fillColor]}>
          <rect x={2} y={6} width={20} height={2} rx={1} />
          <rect x={2} y={11.5} width={20} height={2} rx={1} />
          <rect x={2} y={17} width={12} height={2} rx={1} />
        </g>
      </Svg>
    );
  }
);
