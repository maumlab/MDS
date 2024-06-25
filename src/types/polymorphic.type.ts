import { ComponentPropsWithoutRef, ElementType } from "react";

export type PolymorphicElementProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;
