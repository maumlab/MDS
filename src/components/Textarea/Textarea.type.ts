import { ComponentPropsWithoutRef } from "react";

export type TextareaProps = {
  children: React.ReactNode;
  height?: number;
} & ComponentPropsWithoutRef<"textarea">;
