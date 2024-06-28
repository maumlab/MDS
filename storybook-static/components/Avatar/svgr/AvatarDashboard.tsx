import React from "react";
import { AvatarIconProps, AvatarSize } from "../Avatar.type";
import Svg from "../../../assets/svg";
export const AvatarDashboard = React.memo<AvatarIconProps>(
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
        <g clipPath="url(#avatar_dashboard_svg__clip0_1413_9150)">
          <circle cx={50} cy={50} r={50} fill="#62B4DA" />
          <path
            d="M46.867 37c3.407 0 6.106.989 8.097 2.967C56.988 41.912 58 44.847 58 48.769V64h-7.894V49.956c0-2.11-.456-3.676-1.367-4.698-.877-1.055-2.142-1.582-3.795-1.582-1.856 0-3.323.593-4.403 1.78-1.08 1.154-1.62 2.885-1.62 5.192V64h-7.893V49.956c0-4.187-1.721-6.28-5.162-6.28-1.822 0-3.273.593-4.352 1.78-1.08 1.154-1.62 2.885-1.62 5.192V64H12V39.967l7.54-2.571v3.066a10.008 10.008 0 013.694-2.572c1.485-.593 3.104-.89 4.858-.89 1.923 0 3.66.38 5.213 1.137a8.988 8.988 0 013.745 3.215c1.113-1.385 2.513-2.456 4.2-3.215C42.97 37.38 44.843 37 46.867 37zM75.125 56.984c-2.67.41-5.239-1.301-6.437-4.04l5.821-.89 13.388-2.088.103-.069c0-.65-.069-1.335-.171-2.02-1.164-7.634-8.32-12.906-15.957-11.707-7.635 1.164-12.874 8.319-11.71 15.952 1.164 7.635 8.32 12.906 15.956 11.708 6.232-.958 10.889-5.888 11.745-11.844l-8.355 1.266c-.787 1.986-2.363 3.423-4.383 3.732zM73.002 43.05c2.192-.342 4.315.754 5.684 2.705L68.414 47.33c.685-2.225 2.397-3.937 4.588-4.28z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id={`avatar_dashboard_svg__clip0_1413_9150__${uniqueId}`}>
            <path fill="#fff" d="M0 0h100v100H0z" />
          </clipPath>
        </defs>
      </Svg>
    );
  }
);
