import { AvatarProps, AvatarSize } from "./Avatar.type";
import {
  AvatarClientIcon,
  AvatarDashboardIcon,
  AvatarMetriIcon,
  AvatarTabletIcon,
} from "./svgr/export.generated";

const Avatar = ({ variant, size = AvatarSize.xl }: AvatarProps) => {
  switch (variant) {
    case "metri":
      return <AvatarMetriIcon size={size} />;
    case "tablet":
      return <AvatarTabletIcon size={size} />;
    case "client":
      return <AvatarClientIcon size={size} />;
    case "dashboard":
      return <AvatarDashboardIcon size={size} />;
  }
};

export default Avatar;
