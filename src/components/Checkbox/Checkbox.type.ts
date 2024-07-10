import { ComponentPropsWithoutRef } from "react";
import { ColorType } from "../../styles";

export type CheckboxVariant = "basic" | "region";

export type CheckboxProps = {
  variant?: CheckboxVariant;
  children: React.ReactNode;
  color?: ColorType;
} & Omit<ComponentPropsWithoutRef<"input">, "type">;
