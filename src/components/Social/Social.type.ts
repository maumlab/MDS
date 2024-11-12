import { ComponentPropsWithoutRef } from "react";

export type SocialVariant = "KAKAO" | "NAVER" | "APPLE" | "METRI";
export type SocialType = "primary" | "secondary" | "tertiary";

export type SocialProps = {
  variant: SocialVariant;
  type: SocialType;
} & Omit<ComponentPropsWithoutRef<"button">, "variant" | "type">;
