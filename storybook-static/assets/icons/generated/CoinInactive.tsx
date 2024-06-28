import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const CoinInactive = React.memo<IconProps>(
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
          d="M11.636 8.91h3.455a.864.864 0 100-1.728h-1.727v-.864a.864.864 0 00-1.728 0v.864a2.59 2.59 0 100 5.182h1.728a.863.863 0 110 1.727H9.909a.864.864 0 100 1.727h1.727v.864a.864.864 0 001.728 0v-.864a2.591 2.591 0 000-5.182h-1.728a.863.863 0 110-1.727zM12.5 2a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm0 17.273a7.772 7.772 0 110-15.545 7.772 7.772 0 010 15.545z"
          fill={themes.colors[fillColor]}
        />
      </Svg>
    );
  }
);
