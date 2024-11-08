import React from "react";
import { AvatarIconProps, AvatarSize } from "../Avatar.type";
import Svg from "../../../assets/svg";
export const AvatarEmployee = React.memo<AvatarIconProps>(({ size = AvatarSize.xl, suffixForId, ...props }) => {
  const uniqueId = suffixForId ?? String(Math.random().toString(36).slice(2, 11));
  return (
    <Svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g clipPath="url(#avatar_employee_svg__clip0_13639_27573)">
        <circle cx={50} cy={50} r={50} fill="#F2F2F2" />
        <path
          d="M63.281 36.719C63.281 44.057 57.338 50 50 50c-7.338 0-13.281-5.943-13.281-13.281 0-7.338 5.943-13.282 13.281-13.282 7.338 0 13.281 5.944 13.281 13.282zM45.022 55.44c-9.235 1.222-21.584 5.541-21.584 12.92v8.203h53.124v-8.204c0-7.378-12.35-11.697-21.584-12.92L50 64.063l-4.978-8.622z"
          fill="#BDBDBD"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.625 62.5H62.5v3.125h-3.125v3.125H62.5v3.125h3.125V68.75h3.125v-3.125h-3.125V62.5z"
          fill="#F2F2F2"
        />
      </g>
      <defs>
        <clipPath id={`avatar_employee_svg__clip0_13639_27573__${uniqueId}`}>
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </Svg>
  );
});
