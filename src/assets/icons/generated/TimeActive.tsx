import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const TimeActive = React.memo<IconProps>(
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
        <circle cx={12.5} cy={12.5} r={8.5} fill={themes.colors[fillColor]} />
        <path
          d="M12.238 8.707v4.583l2.5 2.5"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
);
