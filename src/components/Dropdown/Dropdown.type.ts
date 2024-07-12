import { ComponentPropsWithRef } from "react";

export type DropdownChangeEvent = MouseEvent | KeyboardEvent;

/**
 * @param default: 무조건 한 줄, width 커짐
 * @param ellipsis: 한 줄이 넘어가면 ... 으로 표시, width 고정
 * @param multiple: 여러 줄, width 안커짐
 */
export type DropdownOptionVariantType = "default" | "ellipsis" | "multiple";

export type DropdownProviderProps<T = string> = {
  container: Element | null;
  triggerRef: React.RefObject<HTMLElement> | null;
  optionListRef: React.RefObject<HTMLUListElement> | null;
  close: () => void;
  toggle: () => void;
  value: T;
  onChange: (e: DropdownChangeEvent, value: T) => void;
  expanded: boolean;
  disabled: boolean;
  multiple: boolean;
  optionVariant: DropdownOptionVariantType;
};

export interface DropdownProps<T = string> {
  onChange: DropdownProviderProps<T>["onChange"];
  disabled?: boolean;
  multiple?: boolean;
  optionVariant?: DropdownOptionVariantType;
  children: React.ReactNode;
}

export type UseOptionListPositionProps = Pick<
  DropdownProviderProps,
  "container" | "triggerRef" | "optionListRef" | "optionVariant"
>;

export type DropdownBarProps<T = string> = ComponentPropsWithRef<"div"> & {
  value?: T;
  placeholder?: string;
  disabled?: boolean;
};

export type DropdownOptionListProps = ComponentPropsWithRef<"ul"> & {
  zIndex?: number;
  maxHeight?: number;
  children: React.ReactNode;
};

export type DropdownOptionProps<T = string> = ComponentPropsWithRef<"li"> & {
  value: T;
  label?: T | React.ReactElement;
  selected?: boolean;
  disabled?: boolean;
};

export type DropdownEventParamsProps<T = string> = Pick<
  DropdownProviderProps<T>,
  "triggerRef" | "optionListRef" | "expanded" | "close" | "toggle" | "onChange" | "disabled" | "multiple"
>;
