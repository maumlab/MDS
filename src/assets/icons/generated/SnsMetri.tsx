import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const SnsMetri = React.memo<IconProps>(
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
          d="M17.918 5c1.555 0 2.787.476 3.696 1.429.924.936 1.386 2.349 1.386 4.238V18h-3.604v-6.762c0-1.016-.208-1.77-.624-2.262-.4-.508-.978-.762-1.732-.762-.848 0-1.517.286-2.01.857-.493.556-.74 1.39-.74 2.5V18h-3.603v-6.762c0-2.016-.786-3.024-2.357-3.024-.832 0-1.494.286-1.987.857-.493.556-.739 1.39-.739 2.5V18H2V6.429L5.442 5.19v1.477A4.575 4.575 0 017.13 5.429 5.651 5.651 0 019.347 5c.877 0 1.67.183 2.38.548.707.349 1.277.865 1.709 1.547a5.147 5.147 0 011.917-1.547A6.009 6.009 0 0117.918 5z"
          fill="#62B4DA"
        />
      </Svg>
    );
  }
);
