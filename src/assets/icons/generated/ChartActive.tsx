import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const ChartActive = React.memo<IconProps>(
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
          d="M4.614 8.357a.75.75 0 10.772 1.286l-.772-1.286zM10 6l.45-.6a.75.75 0 00-.836-.043L10 6zm4 3l-.45.6a.75.75 0 00.918-.014L14 9zm5.468-3.414a.75.75 0 10-.936-1.172l.936 1.172zM17.25 19a.75.75 0 001.5 0h-1.5zm1.5-8a.75.75 0 00-1.5 0h1.5zm-9.5 8a.75.75 0 001.5 0h-1.5zm1.5-8a.75.75 0 00-1.5 0h1.5zm2.5 8a.75.75 0 001.5 0h-1.5zm1.5-5a.75.75 0 00-1.5 0h1.5zm-9.5 5a.75.75 0 001.5 0h-1.5zm1.5-5a.75.75 0 00-1.5 0h1.5zM5.386 9.643l5-3-.772-1.286-5 3 .772 1.286zM9.55 6.6l4 3 .9-1.2-4-3-.9 1.2zm4.918 2.986l5-4-.936-1.172-5 4 .937 1.172zM18.75 19v-8h-1.5v8h1.5zm-8 0v-8h-1.5v8h1.5zm4 0v-5h-1.5v5h1.5zm-8 0v-5h-1.5v5h1.5z"
          fill={themes.colors[fillColor]}
        />
      </Svg>
    );
  }
);
