export enum AvatarSize {
  "xl" = 100,
  "lg" = 64,
  "md" = 52,
  "sm" = 40,
}

export type AvatarVariant = "metri" | "unauthenticated" | "employee" | "clinic" | "client" | "dashboard";

export type AvatarProps = {
  variant: AvatarVariant;
  size?: AvatarSize;
};

export type AvatarIconProps = {
  size?: AvatarSize;
  suffixForId?: string;
};
