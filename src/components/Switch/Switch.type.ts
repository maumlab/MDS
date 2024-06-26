import { ComponentPropsWithoutRef } from "react";

export type SwitchProps = {
  label?: string;
} & ComponentPropsWithoutRef<"input">;
