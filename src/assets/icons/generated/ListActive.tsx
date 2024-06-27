import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const ListActive = React.memo<IconProps>(
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
          d="M5 9.55c0-.455 0-.683.085-.856a.796.796 0 01.34-.355c.166-.089.384-.089.82-.089h3.733c.435 0 .653 0 .82.089a.795.795 0 01.34.355c.084.173.084.401.084.856v3.9c0 .455 0 .683-.085.856a.796.796 0 01-.34.355c-.166.089-.384.089-.82.089H6.245c-.435 0-.653 0-.82-.089a.796.796 0 01-.34-.355C5 14.133 5 13.905 5 13.45v-3.9z"
          fill={themes.colors[fillColor]}
        />
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
