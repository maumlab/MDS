import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const Download = React.memo<IconProps>(
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
          d="M21 14a1 1 0 011 1v4a3 3 0 01-3 3H5a3 3 0 01-3-3v-4a1 1 0 112 0v4a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 011-1zm-3.293-4.707a1 1 0 010 1.414l-5 5-.007.007a.997.997 0 01-.697.286h-.006a.996.996 0 01-.697-.286l-.008-.008-5-4.999a1 1 0 011.415-1.414L11 12.586V3a1 1 0 112 0v9.586l3.293-3.293a1 1 0 011.414 0z"
          fill="#656565"
        />
      </Svg>
    );
  }
);
