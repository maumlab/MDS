import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const SnsKakao = React.memo<IconProps>(
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
          d="M12.497 3C6.976 3 2.5 6.53 2.5 10.888c0 2.838 1.896 5.319 4.745 6.71-.207.78-.756 2.821-.865 3.26-.135.543.202.538.42.388.17-.113 2.74-1.855 3.848-2.61.601.088 1.223.134 1.855.134 5.521 0 9.997-3.53 9.997-7.887C22.5 6.53 18.02 3 12.497 3z"
          fill="#391B1B"
        />
      </Svg>
    );
  }
);
