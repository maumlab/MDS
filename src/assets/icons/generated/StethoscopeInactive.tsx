import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const StethoscopeInactive = React.memo<IconProps>(
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
          d="M3 4v7.204h1.5V6H6V4H3zm9.638 2v5.204h1.5V4H11v2h1.638zM8.57 14.657c-2.347 0-4.069-1.64-4.069-3.453H3c0 2.575 2.15 4.566 4.78 4.902.58 2.486 2.778 4.347 5.42 4.347 3.088 0 5.57-2.541 5.57-5.65v-1.135a2.295 2.295 0 10-1.5-.02v1.155c0 2.304-1.834 4.15-4.07 4.15-1.792 0-3.325-1.186-3.864-2.844 2.641-.328 4.802-2.323 4.802-4.905h-1.5c0 1.814-1.722 3.453-4.069 3.453zm8.686-3.167a.794.794 0 111.587 0 .794.794 0 01-1.587 0z"
          fill={themes.colors[fillColor]}
        />
        <circle
          cx={18.049}
          cy={11.49}
          r={1.544}
          stroke={themes.colors[fillColor]}
          strokeWidth={1.5}
        />
      </Svg>
    );
  }
);
