import React from "react";
import { IconProps } from "../../../assets/icons/index";
import { IconSize } from "../../../assets/icons/icon.type";
import { themes } from "../../../styles";
import Svg from "../../../assets/svg";
export const SnsKakao = React.memo<IconProps>(
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
          d="M11.997 3.5C6.476 3.5 2 7.03 2 11.388c0 2.838 1.896 5.319 4.745 6.71-.207.78-.756 2.821-.865 3.26-.135.543.202.538.42.388.17-.113 2.74-1.855 3.848-2.61.601.088 1.223.134 1.855.134 5.521 0 9.997-3.53 9.997-7.887C22 7.03 17.52 3.5 11.997 3.5z"
          fill="#391B1B"
        />
      </Svg>
    );
  }
);
