import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const GraphActive = React.memo<IconProps>(
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
        <path
          d="M19.4 9.5c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C21 8.74 21 8.46 21 7.9V6.1c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C20.24 4.5 19.96 4.5 19.4 4.5H3v5h16.4zM3 2v20V2z"
          fill={themes.colors[fillColor]}
        />
        <path
          d="M17 9.5v3.4c0 .56 0 .84-.109 1.054a1 1 0 01-.437.437c-.214.109-.494.109-1.054.109H3m10 0v3.4c0 .56 0 .84-.109 1.054a1 1 0 01-.437.437c-.214.109-.494.109-1.054.109H3M3 2v20M3 9.5h16.4c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C21 8.74 21 8.46 21 7.9V6.1c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C20.24 4.5 19.96 4.5 19.4 4.5H3v5z"
          stroke={themes.colors[fillColor]}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
);
