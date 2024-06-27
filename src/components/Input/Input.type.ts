import { ComponentPropsWithoutRef } from "react";

export type InputProps = {
  error?: string;
  success?: string;
} & ComponentPropsWithoutRef<"input">;
