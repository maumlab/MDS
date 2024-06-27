import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const License = React.memo<IconProps>(
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
          <path d="M16 14.472a6 6 0 10-8 0m8 0A5.978 5.978 0 0112 16a5.978 5.978 0 01-4-1.528m8 0v4.91a1 1 0 01-1.447.894L12 19l-2.553 1.276A1 1 0 018 19.382v-4.91" />
          <circle cx={12} cy={10} r={2.25} />
        </g>
      </Svg>
    );
  }
);
