import { ComponentPropsWithoutRef } from "react";

export type InputVariant = "metri" | "emr";

export type InputProps = {
  variant?: InputVariant;
  error?: string;
  success?: string;
} & ComponentPropsWithoutRef<"input">;
