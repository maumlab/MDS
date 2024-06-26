import { ComponentPropsWithoutRef } from "react";

export type RadioProps = {
  label?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "type">;
