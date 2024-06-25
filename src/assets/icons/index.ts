import React from "react";
import { ColorType } from "../../styles";
import { IconSize } from "./icon.type";

export type IconProps = {
  size?: IconSize;
  fillColor?: ColorType;
  suffixForId?: string;
  viewBox?: string;
} & React.SVGAttributes<SVGElement>;

export * from "./export.generated";
