import { ComponentPropsWithoutRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "black" | "gray" | "emr";

/**
 * sm: 44px
 * md: 50px
 * lg: 54px
 * xl: 60px
 */
export type ButtonSize = "sm" | "md" | "lg" | "xl";

/**
 * @param {ButtonVariant} variant 버튼 색상, default: primary
 * @param {ButtonSize} size 버튼 크기, default: xl
 * @param {boolean} loading 로딩 중인지 여부, default: false
 * @param {React.ReactNode} children 버튼 내용
 */
export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;
