import { ComponentPropsWithoutRef } from "react";

type SocialVariant = "KAKAO" | "NAVER" | "APPLE" | "METRI";
type SocialType = "primary" | "secondary";

export type SocialProps = {
  variant: SocialVariant;
  type: SocialType;
} & Omit<ComponentPropsWithoutRef<"button">, "variant" | "type">;
