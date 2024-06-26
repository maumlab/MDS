import React from "react";
import Svg from "../../../assets/svg";
import { AvatarIconProps, AvatarSize } from "../Avatar.type";

export const AvatarClient = React.memo<AvatarIconProps>(
  ({ size = AvatarSize.xl, suffixForId, ...props }) => {
    const uniqueId =
      suffixForId ?? String(Math.random().toString(36).slice(2, 11));
    return (
      <Svg
        {...props}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#avatar_client_svg__clip0_1413_8980)">
          <path
            d="M100 50c0 27.614-22.386 50-50 50S0 77.614 0 50 22.386 0 50 0s50 22.386 50 50z"
            fill="#F2F2F2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 98c26.51 0 48-21.49 48-48S76.51 2 50 2 2 23.49 2 50s21.49 48 48 48zm0 2c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50z"
            fill="#BDBDBD"
          />
          <path
            d="M87.515 83.056C95.285 74.244 100 62.672 100 50c0-27.614-22.386-50-50-50S0 22.386 0 50c0 12.672 4.714 24.244 12.485 33.056C15.398 72.819 31.085 65 50 65s34.602 7.819 37.515 18.056z"
            fill="#F2F2F2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M88.086 79.218A47.783 47.783 0 0098 50C98 23.49 76.51 2 50 2S2 23.49 2 50a47.783 47.783 0 009.914 29.218c2.4-4.421 6.879-8.116 12.453-10.828C31.327 65.005 40.284 63 50 63s18.673 2.005 25.633 5.39c5.574 2.712 10.052 6.407 12.453 10.828zm.94 2.042A49.79 49.79 0 00100 50c0-27.614-22.386-50-50-50S0 22.386 0 50a49.79 49.79 0 0012.485 33.056 13.82 13.82 0 01.804-2.13C17.63 71.754 32.42 65 50 65s32.371 6.754 36.71 15.926c.33.697.6 1.407.805 2.13a50.176 50.176 0 001.51-1.796z"
            fill="#BDBDBD"
          />
          <path
            d="M69 41c0 10.493-8.507 19-19 19s-19-8.507-19-19 8.507-19 19-19 19 8.507 19 19z"
            fill="#F2F2F2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 58c9.389 0 17-7.611 17-17s-7.611-17-17-17-17 7.611-17 17 7.611 17 17 17zm0 2c10.493 0 19-8.507 19-19s-8.507-19-19-19-19 8.507-19 19 8.507 19 19 19z"
            fill="#BDBDBD"
          />
        </g>
        <defs>
          <clipPath id={`avatar_client_svg__clip0_1413_8980__${uniqueId}`}>
            <path fill="#fff" d="M0 0h100v100H0z" />
          </clipPath>
        </defs>
      </Svg>
    );
  }
);
