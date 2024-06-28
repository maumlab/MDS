import React from "react";
import { IconProps } from "../../../assets/icons/index";
import { IconSize } from "../../../assets/icons/icon.type";
import Svg from "../../../assets/svg";
export const SnsMetri = React.memo<IconProps>(
  ({ size = IconSize.S, fillColor = "gray2", suffixForId, ...props }) => {
    return (
      <Svg
        {...props}
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.191 5c1.778 0 3.186.513 4.225 1.538C23.472 7.547 24 9.068 24 11.103V19h-4.119v-7.282c0-1.094-.237-1.906-.713-2.436-.457-.547-1.117-.82-1.98-.82-.968 0-1.734.307-2.297.923-.563.598-.845 1.495-.845 2.692V19H9.927v-7.282c0-2.171-.897-3.256-2.693-3.256-.95 0-1.707.307-2.27.923-.564.598-.845 1.495-.845 2.692V19H0V6.538l3.934-1.333v1.59a5.222 5.222 0 011.927-1.333A6.804 6.804 0 018.396 5c1.003 0 1.91.197 2.72.59.81.376 1.46.931 1.953 1.666a5.829 5.829 0 012.192-1.666c.897-.393 1.874-.59 2.93-.59z"
          fill="#62B4DA"
        />
      </Svg>
    );
  }
);
