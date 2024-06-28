import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const ListInactive = React.memo<IconProps>(
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
          d="M19 9.266h-4.667M19 5H5m14 8.734h-4.667M19 18H5m1.244-3.25h3.734c.435 0 .653 0 .82-.089a.796.796 0 00.34-.355c.084-.173.084-.401.084-.856v-3.9c0-.455 0-.683-.085-.856a.795.795 0 00-.34-.355c-.166-.089-.384-.089-.82-.089H6.245c-.435 0-.653 0-.82.089a.796.796 0 00-.34.355C5 8.867 5 9.095 5 9.55v3.9c0 .455 0 .683.085.856a.796.796 0 00.34.355c.166.089.384.089.82.089z"
          stroke={themes.colors[fillColor]}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
);
