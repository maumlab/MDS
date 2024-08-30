import { ComponentPropsWithoutRef } from "react";

export type InputVariant = "metri" | "emr";

export type InputProps = {
  variant?: InputVariant;
  error?: string | boolean;
  success?: string | boolean;
} & ComponentPropsWithoutRef<"input">;

export type LineInputProps = {
  error?: string | boolean;
  success?: string | boolean;
} & ComponentPropsWithoutRef<"input">;
