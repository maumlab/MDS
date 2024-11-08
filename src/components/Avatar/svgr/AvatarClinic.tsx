import React from "react";
import { AvatarIconProps, AvatarSize } from "../Avatar.type";
import Svg from "../../../assets/svg";
export const AvatarClinic = React.memo<AvatarIconProps>(({ size = AvatarSize.xl, suffixForId, ...props }) => {
  const uniqueId = suffixForId ?? String(Math.random().toString(36).slice(2, 11));
  return (
    <Svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g clipPath="url(#avatar_clinic_svg__clip0_13710_27953)">
        <circle cx={50} cy={50} r={50} fill="#F2F2F2" />
        <path
          d="M67.014 28.125H32.986c-2.673 0-4.837 2.188-4.837 4.861l-.024 34.028a4.875 4.875 0 004.861 4.861h34.028a4.875 4.875 0 004.861-4.861V32.986a4.875 4.875 0 00-4.861-4.861zm-2.43 26.736H54.86v9.722H45.14v-9.722h-9.722V45.14h9.722v-9.722h9.722v9.722h9.722v9.722z"
          fill="#BDBDBD"
        />
      </g>
      <defs>
        <clipPath id={`avatar_clinic_svg__clip0_13710_27953__${uniqueId}`}>
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </Svg>
  );
});
