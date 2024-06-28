import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const MessageInactive = React.memo<IconProps>(
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
          <path d="M9.168 8.803a1.25 1.25 0 011.234-1.053h11.254a1.25 1.25 0 011.234 1.447l-1.275 8a1.25 1.25 0 01-1.234 1.053H9.127a1.25 1.25 0 01-1.235-1.447l1.276-8z" />
          <path
            d="M9.5 8.5l4.268 3.942a2 2 0 002.45.205L22.566 8.5M2 7.501h3.826M2 10.499h1.913"
            strokeLinecap="round"
          />
        </g>
      </Svg>
    );
  }
);
