import { ComponentPropsWithoutRef } from "react";

export type CheckboxProps = {
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<"input">, "type">;
