import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const CoinActive = React.memo<IconProps>(
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
          d="M12.5 2a9.5 9.5 0 100 19 9.5 9.5 0 000-19z"
          fill={themes.colors[fillColor]}
        />
        <path
          d="M15.09 8.925h-3.454a.864.864 0 000 1.728h1.728a2.59 2.59 0 010 5.181v.864a.864.864 0 01-1.728 0v-.864H9.91a.864.864 0 010-1.727h3.455a.864.864 0 000-1.727h-1.728a2.591 2.591 0 010-5.182v-.863c0-.23.091-.45.253-.611.489-.489 1.018-.204 1.222 0a.864.864 0 01.253.61v.864h1.727a.863.863 0 110 1.727z"
          fill="#fff"
        />
      </Svg>
    );
  }
);
