import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const Reception = React.memo<IconProps>(
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
        <g
          stroke={themes.colors[fillColor]}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.905 21.256h6.916M15.1 4.885c-1.02-.799-2.311-.852-3.11.166L3.248 16.202a1 1 0 00-.208.719l.338 3.302a1 1 0 001.134.889l3.287-.46a1 1 0 00.648-.374l8.74-11.151c.8-1.02.438-2.26-.581-3.06L15.1 4.886zM10.306 7.2l5.2 4.075" />
        </g>
      </Svg>
    );
  }
);
