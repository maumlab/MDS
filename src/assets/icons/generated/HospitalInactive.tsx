import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const HospitalInactive = React.memo<IconProps>(
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
          d="M9 15H3.75a.75.75 0 01-.75-.75v-4.5A.75.75 0 013.75 9H9V3.75A.75.75 0 019.75 3h4.5a.75.75 0 01.75.75V9h5.25a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H15v5.25a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75V15z"
          stroke={themes.colors[fillColor]}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
);
