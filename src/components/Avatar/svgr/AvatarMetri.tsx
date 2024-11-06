import React from "react";
import { AvatarIconProps, AvatarSize } from "../Avatar.type";
import Svg from "../../../assets/svg";
export const AvatarMetri = React.memo<AvatarIconProps>(({ size = AvatarSize.xl, suffixForId, ...props }) => {
  const uniqueId = suffixForId ?? String(Math.random().toString(36).slice(2, 11));
  return (
    <Svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g clipPath="url(#avatar_metri_svg__clip0_13639_27585)">
        <circle cx={50} cy={50} r={50} fill="#EFF8FB" />
        <path
          d="M50 50c7.338 0 13.281-5.943 13.281-13.281 0-7.338-5.943-13.282-13.281-13.282-7.338 0-13.281 5.944-13.281 13.282S42.662 50 50 50zm0 6.64c-8.865 0-26.563 4.45-26.563 13.282v6.64h53.126v-6.64C76.563 61.09 58.864 56.64 50 56.64z"
          fill="#62B4DA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M84.375 71.875c0 8.63-6.996 15.625-15.625 15.625-8.63 0-15.625-6.996-15.625-15.625 0-8.63 6.996-15.625 15.625-15.625 8.63 0 15.625 6.996 15.625 15.625zm-15.625 12.5c6.904 0 12.5-5.596 12.5-12.5s-5.596-12.5-12.5-12.5-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5z"
          fill="#EFF8FB"
        />
        <circle cx={68.75} cy={71.875} r={12.5} fill="#35D48D" />
        <path
          d="M72.78 67.188c1.158 0 2.075.343 2.751 1.03.688.675 1.031 1.694 1.031 3.056v5.288h-2.681v-4.876c0-.733-.155-1.276-.464-1.631-.298-.366-.728-.55-1.29-.55-.63 0-1.128.207-1.495.619-.367.4-.55 1.001-.55 1.803v4.635h-2.681v-4.876c0-1.454-.585-2.18-1.754-2.18-.619 0-1.111.206-1.478.618-.367.4-.55 1.001-.55 1.803v4.635h-2.681v-8.344l2.56-.893v1.064c.345-.389.763-.686 1.256-.892a4.32 4.32 0 011.65-.31c.653 0 1.243.132 1.77.395.527.252.951.624 1.272 1.117.378-.481.854-.853 1.427-1.117a4.59 4.59 0 011.908-.394z"
          fill="#EFF8FB"
        />
      </g>
      <defs>
        <clipPath id={`avatar_metri_svg__clip0_13639_27585__${uniqueId}`}>
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </Svg>
  );
});
