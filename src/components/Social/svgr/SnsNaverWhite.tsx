import React from "react";
import { IconProps } from "../../../assets/icons/index";
import { IconSize } from "../../../assets/icons/icon.type";
import { themes } from "../../../styles";
import Svg from "../../../assets/svg";
export const SnsNaverWhite = React.memo<IconProps>(
  ({ size = IconSize.S, fillColor = "gray2", suffixForId, ...props }) => {
    const uniqueId =
      suffixForId ?? String(Math.random().toString(36).slice(2, 11));
    return (
      <Svg
        {...props}
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.622 12.63L8.887 3h-5.58v18h5.85v-9.63l6.72 9.63h5.58V3h-5.835v9.63z"
          fill="#fff"
        />
      </Svg>
    );
  }
);
