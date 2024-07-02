import { ComponentPropsWithoutRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "black" | "gray" | "emr";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;
