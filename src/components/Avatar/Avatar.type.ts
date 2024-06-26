export enum AvatarSize {
  "xl" = 100,
  "lg" = 64,
  "md" = 52,
  "sm" = 40,
}

type AvatarVariantType = "metri" | "tablet" | "client" | "dashboard";

export type AvatarProps = {
  variant: AvatarVariantType;
  size?: AvatarSize;
};

export type AvatarIconProps = {
  size?: AvatarSize;
  suffixForId?: string;
};
