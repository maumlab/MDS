import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const AdminActive = React.memo<IconProps>(
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.602 12.809a.75.75 0 010-1.061l3.535-3.536 2.122-2.12 1.414-1.415a.75.75 0 111.06 1.06l-.884.884 1.238 1.238a.75.75 0 11-1.06 1.06l-1.238-1.237-1.06 1.06 1.237 1.238a.75.75 0 11-1.061 1.06l-1.237-1.237-3.006 3.006a.75.75 0 01-1.06 0z"
          />
          <circle
            cx={8.303}
            cy={15.106}
            r={4}
            transform="rotate(-45 8.303 15.106)"
            stroke={themes.colors[fillColor]}
            strokeWidth={1.5}
          />
        </g>
      </Svg>
    );
  }
);
