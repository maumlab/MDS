import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const TimeInactive = React.memo<IconProps>(
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 12.25a7.75 7.75 0 1115.5 0 7.75 7.75 0 01-15.5 0zM12.25 3a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zm.488 5.457a.75.75 0 00-1.5 0v4.583c0 .2.079.39.22.53l2.5 2.5a.75.75 0 101.06-1.06l-2.28-2.28V8.457z"
          fill={themes.colors[fillColor]}
        />
      </Svg>
    );
  }
);
