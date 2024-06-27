import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const CampaignInactive = React.memo<IconProps>(
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
          d="M9.267 12.986L5.614 8.289c-.228-.293-.342-.439-.422-.601a1.834 1.834 0 01-.156-.458C5 7.051 5 6.864 5 6.49v-.61c0-1.008 0-1.512.19-1.897.169-.339.436-.614.766-.787C6.33 3 6.82 3 7.8 3h8.4c.98 0 1.47 0 1.845.196.329.173.596.448.764.787.191.385.191.889.191 1.897v.61c0 .374 0 .561-.036.74a1.836 1.836 0 01-.156.458c-.08.162-.194.308-.422.6l-3.653 4.698M5.875 3.9L12 12l6.125-8.1m-3.031 9.418c1.708 1.757 1.708 4.607 0 6.364a4.29 4.29 0 01-6.188 0c-1.708-1.757-1.708-4.607 0-6.364a4.29 4.29 0 016.188 0z"
          stroke={themes.colors[fillColor]}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
);
