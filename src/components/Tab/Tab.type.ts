import React from "react";

export type TabVariant = "line" | "text";
export type TabSize = "large" | "medium";

export type TabProviderProps = {
  variant?: TabVariant;
  size?: TabSize;
  selectedValue: string;
  onChange: (value: string) => void;
};

export type TabProps = {
  children: React.ReactNode;
} & TabProviderProps;

export type TabItemProps = {
  value: string;
  children: React.ReactNode;
};
