import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const BindActive = React.memo<IconProps>(
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
        <g fillRule="evenodd" clipRule="evenodd">
          <path
            d="M14.8 2.25a.75.75 0 01.561.252l4.2 4.737a.75.75 0 01.189.498v9.42a1.75 1.75 0 01-1.75 1.75H8.8a1.75 1.75 0 01-1.75-1.75V5A2.75 2.75 0 019.8 2.25h5zM5 5.092a.75.75 0 00-.75.75V17A4.75 4.75 0 009 21.75h7.2a.75.75 0 000-1.5H9A3.25 3.25 0 015.75 17V5.842a.75.75 0 00-.75-.75z"
            fill={themes.colors[fillColor]}
          />
          <path
            d="M14.448 2.25a.75.75 0 01.75.75v3.797h3.45a.75.75 0 110 1.5h-4.2a.75.75 0 01-.75-.75V3a.75.75 0 01.75-.75z"
            fill="#fff"
          />
        </g>
      </Svg>
    );
  }
);
