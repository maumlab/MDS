import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const PeopleInactive = React.memo<IconProps>(
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
          <circle cx={8.5} cy={8.5} r={2.5} />
          <circle cx={16} cy={9.625} r={2} />
          <path
            d="M3 19c0-3.866 2.096-6 5.893-6 1.738 0 3.12.447 4.107 1.302M21 19c0-3.222-1.778-5-5-5s-5 1.778-5 5"
            strokeLinecap="round"
          />
        </g>
      </Svg>
    );
  }
);
