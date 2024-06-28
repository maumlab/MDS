import { ComponentPropsWithoutRef } from "react";

export type ButtonProps = {
  asChild?: boolean;
} & ComponentPropsWithoutRef<"button">;
