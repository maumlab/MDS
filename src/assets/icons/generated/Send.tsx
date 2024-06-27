import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const Send = React.memo<IconProps>(
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
          d="M19.967 13.937c1.812-.873 1.812-3.453 0-4.325L5.847 2.814c-1.958-.943-4.06.995-3.28 3.024l2.283 5.936-2.283 5.937c-.78 2.029 1.322 3.967 3.28 3.024l14.12-6.798zm-15.16-8.96l14.119 6.797-14.12 6.798 2.154-5.597h3.633a1.2 1.2 0 000-2.4H6.96L4.807 4.976z"
          fill={themes.colors[fillColor]}
        />
      </Svg>
    );
  }
);
