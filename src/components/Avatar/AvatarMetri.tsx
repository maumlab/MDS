import React from "react";
import Svg from "../../assets/svg";
import { AvatarIconProps, AvatarSize } from "./Avatar.type";

export const AvatarMetri = React.memo<AvatarIconProps>(
  ({ size = AvatarSize.md, suffixForId, ...props }) => {
    const uniqueId =
      suffixForId ?? String(Math.random().toString(36).slice(2, 11));
    return (
      <Svg
        {...props}
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${size} ${size}`}
      >
        <g clipPath="url(#avatar_metri_svg__clip0_1318_15994)">
          <circle cx={50} cy={50} r={50} fill="#BDBDBD" />
          <path
            d="M62.383 36c3.555 0 6.372 1.026 8.449 3.077C72.944 41.094 74 44.137 74 48.205V64h-8.238V49.436c0-2.188-.475-3.812-1.425-4.872-.916-1.094-2.236-1.64-3.96-1.64-1.937 0-3.468.614-4.595 1.845-1.126 1.197-1.69 2.992-1.69 5.385V64h-8.237V49.436c0-4.342-1.796-6.513-5.386-6.513-1.901 0-3.415.615-4.542 1.846-1.126 1.197-1.69 2.992-1.69 5.385V64H26V39.077l7.868-2.667v3.18c1.056-1.163 2.341-2.052 3.855-2.667 1.549-.615 3.239-.923 5.07-.923 2.006 0 3.819.393 5.438 1.18a9.363 9.363 0 013.908 3.333c1.161-1.436 2.622-2.547 4.383-3.334C58.317 36.393 60.27 36 62.382 36z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id={`avatar_metri_svg__clip0_1318_15994__${uniqueId}`}>
            <path fill="#fff" d="M0 0h100v100H0z" />
          </clipPath>
        </defs>
      </Svg>
    );
  }
);
