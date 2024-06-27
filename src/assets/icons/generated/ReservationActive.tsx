import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import { themes } from "../../../styles";
import Svg from "../../svg";
export const ReservationActive = React.memo<IconProps>(
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
          opacity={0.8}
          d="M7.604 19.429h8.792a1 1 0 00.928-.626l.467-1.16a1 1 0 00-.124-.97l-3.323-4.486a1 1 0 01-.129-.957l.614-1.582a1 1 0 00-.932-1.362h-3.794a1 1 0 00-.932 1.362l.614 1.582a1 1 0 01-.13.957l-3.322 4.487a1 1 0 00-.124.969l.467 1.16a1 1 0 00.928.626z"
          fill={themes.colors[fillColor]}
        />
        <path
          d="M6.74 4.603A1 1 0 017.656 4h8.686a1 1 0 01.918.603l.501 1.162a1 1 0 01-.135 1.018l-3.423 4.31a1 1 0 000 1.243l3.423 4.31a1 1 0 01.135 1.018l-.501 1.161a1 1 0 01-.918.604H7.657a1 1 0 01-.918-.604l-.501-1.16a1 1 0 01.135-1.02l3.423-4.309a1 1 0 000-1.244L6.373 6.783a1 1 0 01-.135-1.019l.501-1.16z"
          stroke={themes.colors[fillColor]}
          strokeWidth={1.5}
        />
      </Svg>
    );
  }
);
