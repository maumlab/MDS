import { AvatarProps, AvatarSize } from "./Avatar.type";
import {
  AvatarClientIcon,
  AvatarDashboardIcon,
  AvatarMetriIcon,
  AvatarClinicIcon,
  AvatarEmployeeIcon,
} from "./svgr/export.generated";

const Avatar = ({ variant, size = AvatarSize.xl }: AvatarProps) => {
  switch (variant) {
    case "metri":
      return <AvatarMetriIcon size={size} />;
    case "unauthenticated":
      return <AvatarClientIcon size={size} opacity={0.7} />;
    case "employee":
      return <AvatarEmployeeIcon size={size} />;
    case "clinic":
      return <AvatarClinicIcon size={size} />;
    case "client":
      return <AvatarClientIcon size={size} />;
    case "dashboard":
      return <AvatarDashboardIcon size={size} />;
  }
};

export default Avatar;
