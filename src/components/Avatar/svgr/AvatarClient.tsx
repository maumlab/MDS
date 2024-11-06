import React from "react";
import { AvatarIconProps, AvatarSize } from "../Avatar.type";
import Svg from "../../../assets/svg";
export const AvatarClient = React.memo<AvatarIconProps & { opacity?: number }>(
  ({ size = AvatarSize.xl, suffixForId, opacity, ...props }) => {
    const uniqueId = suffixForId ?? String(Math.random().toString(36).slice(2, 11));
    return (
      <Svg
        {...props}
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{ opacity }}>
        <g clipPath="url(#avatar_client_svg__clip0_13639_27582)">
          <circle cx={50} cy={50} r={50} fill="#F2F2F2" />
          <path
            d="M50 50c7.338 0 13.281-5.943 13.281-13.281 0-7.338-5.943-13.282-13.281-13.282-7.338 0-13.281 5.944-13.281 13.282S42.662 50 50 50zm0 6.64c-8.865 0-26.563 4.45-26.563 13.282v6.64h53.126v-6.64C76.563 61.09 58.864 56.64 50 56.64z"
            fill="#BDBDBD"
          />
        </g>
        <defs>
          <clipPath id={`avatar_client_svg__clip0_13639_27582__${uniqueId}`}>
            <path fill="#fff" d="M0 0h100v100H0z" />
          </clipPath>
        </defs>
      </Svg>
    );
  }
);
