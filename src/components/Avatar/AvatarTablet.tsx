import React from "react";
import Svg from "../../assets/svg";
import { AvatarIconProps, AvatarSize } from "./Avatar.type";

export const AvatarTablet = React.memo<AvatarIconProps>(
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
        <g clipPath="url(#avatar_tablet_svg__clip0_1318_16008)">
          <path
            d="M100 50c0 27.614-22.386 50-50 50S0 77.614 0 50 22.386 0 50 0s50 22.386 50 50z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 94c24.3 0 44-19.7 44-44S74.3 6 50 6 6 25.7 6 50s19.7 44 44 44zm0 6c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50z"
            fill="#BDBDBD"
          />
          <path
            d="M54.911 71.429c-3.962 0-7.049-.997-9.26-2.99-2.21-2.036-3.316-5.047-3.316-9.034V30h9.76v29.28c0 1.413.376 2.513 1.127 3.302.75.748 1.772 1.121 3.066 1.121 1.543 0 2.857-.415 3.941-1.245l2.628 6.853c-1.001.705-2.21 1.245-3.629 1.62a18.336 18.336 0 01-4.317.498zM37.143 45.637V38.16h23.336v7.476H37.143z"
            fill="#BDBDBD"
          />
        </g>
        <defs>
          <clipPath id={`avatar_tablet_svg__clip0_1318_16008__${uniqueId}`}>
            <path fill="#fff" d="M0 0h100v100H0z" />
          </clipPath>
        </defs>
      </Svg>
    );
  }
);
