import React from "react";

type SegmentedControlVariant = "padded" | "contained";

export type SegmentedControlProviderProps = {
  variant?: SegmentedControlVariant;
  selectedValue: string;
  onChange: (value: string) => void;
};

export type SegmentedControlProps = {
  children: React.ReactNode;
} & SegmentedControlProviderProps;

export type SegmentedControlItemProps = {
  children: React.ReactNode;
  value: string;
};
