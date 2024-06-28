import React from "react";
import { IconProps } from "../../../assets/icons/index";
import { IconSize } from "../../../assets/icons/icon.type";
import Svg from "../../../assets/svg";

export const SnsApple = React.memo<IconProps>(
  ({ size = IconSize.S, fillColor = "gray2", suffixForId, ...props }) => {
    return (
      <Svg
        {...props}
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#000">
          <path d="M21.395 17.636c-.513 1.144-.765 1.658-1.43 2.667-.925 1.413-2.238 3.172-3.853 3.188-1.439.017-1.809-.933-3.76-.925-1.953.009-2.365.942-3.803.934-1.624-.017-2.86-1.607-3.786-3.012-2.6-3.962-2.87-8.598-1.27-11.063C4.627 7.675 6.42 6.649 8.11 6.649c1.691 0 2.793.942 4.215.942 1.422 0 2.213-.942 4.206-.942 1.498 0 3.088.816 4.224 2.23-3.71 2.035-3.113 7.335.64 8.757z" />
          <path d="M15.026 5.067c.723-.925 1.27-2.23 1.068-3.567-1.178.084-2.557.833-3.365 1.809-.732.883-1.338 2.204-1.102 3.483 1.287.042 2.616-.732 3.39-1.716l.009-.009z" />
        </g>
      </Svg>
    );
  }
);
