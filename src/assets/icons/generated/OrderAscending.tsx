import React from "react";
import { IconProps } from "../index";
import { IconSize } from "../icon.type";
import Svg from "../../svg";
export const OrderAscending = React.memo<IconProps>(
  ({ size = IconSize.S, fillColor = "gray2", viewBox = "0 0 24 24", suffixForId, ...props }) => {
    return (
      <Svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        <path
          d="M16 12l-4 4m0 0l-4-4m4 4V8M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C5.28 3 6.12 3 7.8 3z"
          stroke="#656565"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
);
