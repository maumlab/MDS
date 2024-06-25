import { AvatarProps, AvatarSize } from "./Avatar.type";
import { AvatarMetriIcon, AvatarTabletIcon } from "./export.avatar";

const Avatar = ({ variant = "metri", size = AvatarSize.md }: AvatarProps) => {
  return variant === "metri" ? (
    <AvatarMetriIcon size={size} />
  ) : (
    <AvatarTabletIcon size={size} />
  );
};

export default Avatar;
