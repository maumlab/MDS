import { ComponentPropsWithoutRef } from "react";

export type CheckboxProps = {
  label?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "type">;
