import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const PeopleActive = React.memo<IconProps>(
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
        <g stroke={themes.colors[fillColor]} strokeWidth={1.5}>
          <circle cx={8.5} cy={8.5} r={2.5} fill={themes.colors[fillColor]} />
          <circle cx={16} cy={9.625} r={2} fill="#fff" />
          <path
            d="M8.893 13C5.096 13 3 15.134 3 19h8c-.167-.785 0-2.825 2-4.698C12.013 13.447 10.631 13 8.893 13z"
            fill={themes.colors[fillColor]}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 14c-3.222 0-5 1.778-5 5h10c0-3.222-1.778-5-5-5z"
            fill="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </Svg>
    );
  }
);
