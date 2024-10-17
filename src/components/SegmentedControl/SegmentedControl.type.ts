import React from "react";

export type SegmentedControlVariant = "basic" | "outlined";

export type SegmentedControlProviderProps = {
  variant: SegmentedControlVariant;
  selectedValue: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export type SegmentedControlProps = {
  children: React.ReactNode;
  variant?: SegmentedControlVariant;
} & Omit<SegmentedControlProviderProps, "variant">;

export type SegmentedControlItemProps = {
  children: React.ReactNode;
  value: string;
};
