import React, {
  createContext,
  ForwardedRef,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  DropdownBarProps,
  DropdownOptionListProps,
  DropdownOptionProps,
  DropdownProps,
  DropdownProviderProps,
} from "./Dropdown.type";
import { generateUniqueId } from "../../lib";
import useOptionListPosition from "./hooks/useOptionListPosition";
import useClick from "./hooks/useClick";
import { Portal } from "../../utils";
import { ChevronDownIcon } from "../../assets/icons";
import { BaseBar, BaseOption, BaseOptionList } from "./Dropdown.style";
import { POPPER_Z_INDEX } from "../../constants";

const DropdownProvider = createContext<
  Pick<
    DropdownProviderProps<never>,
    | "container"
    | "triggerRef"
    | "optionListRef"
    | "expanded"
    | "disabled"
    | "close"
    | "onChange"
    | "optionVariant"
  >
>({
  container: null,
  triggerRef: null,
  optionListRef: null,
  expanded: false,
  disabled: false,
  close: () => null,
  onChange: () => null,
  optionVariant: "default",
});

const Dropdown = <T,>({
  onChange,
  disabled = false,
  multiple = false,
  optionVariant = "default",
  children,
}: DropdownProps) => {
  // refs
  const triggerRef = useRef<HTMLElement>(null);
  const optionListRef = useRef<HTMLUListElement>(null);

  // optionList portal
  const [container, setContainer] =
    useState<DropdownProviderProps["container"]>(null);
  const expanded = container !== null;
  const uniqueId = useMemo(() => generateUniqueId(), []);

  // open/close
  const open = () => {
    const newContainer = document.createElement("div");
    newContainer.id = uniqueId;
    document.body.appendChild(newContainer);
    setContainer(newContainer);
  };
  const close = () => {
    const container = document.getElementById(uniqueId);
    container?.remove();
    setContainer(null);
  };
  const toggle = () => {
    expanded ? close() : open();
  };

  // optionList의 위치를 정하는 로직
  useOptionListPosition({
    container,
    triggerRef,
    optionListRef,
    optionVariant,
  });
  // event handlers
  useClick({
    triggerRef,
    optionListRef,
    expanded,
    close,
    toggle,
    onChange,
    disabled,
    multiple,
  });

  return (
    <DropdownProvider.Provider
      value={
        {
          container,
          triggerRef,
          optionListRef,
          expanded,
          disabled,
          close,
          onChange,
          optionVariant,
        } as Pick<
          DropdownProviderProps<T>,
          | "container"
          | "triggerRef"
          | "optionListRef"
          | "expanded"
          | "disabled"
          | "close"
          | "onChange"
          | "optionVariant"
        >
      }
    >
      {children}
    </DropdownProvider.Provider>
  );
};

Dropdown.Trigger = ({ children }: { children: React.ReactElement }) => {
  const { triggerRef, expanded, disabled } = useContext(DropdownProvider);

  return React.cloneElement(children, {
    ...children.props,
    "data-expanded": expanded,
    disabled,
    ref: triggerRef,
  });
};

Dropdown.Bar = React.forwardRef(
  (
    { value, placeholder, disabled = false, ...props }: DropdownBarProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <BaseBar
        ref={ref}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        {...props}
      >
        <span aria-placeholder={value ? undefined : placeholder}>
          {value || placeholder}
        </span>
        <ChevronDownIcon size={24} className="arrowIcon" />
      </BaseBar>
    );
  }
);

Dropdown.OptionList = ({
  children,
  zIndex = POPPER_Z_INDEX,
  maxHeight = 400,
  ...props
}: DropdownOptionListProps) => {
  const { container, optionListRef } = useContext(DropdownProvider);

  return (
    <Portal container={container}>
      <BaseOptionList
        role="listbox"
        ref={optionListRef}
        style={{ zIndex, maxHeight }}
        {...props}
      >
        {children}
      </BaseOptionList>
    </Portal>
  );
};

Dropdown.Option = ({
  value,
  label,
  selected = false,
  disabled = false,
  ...props
}: DropdownOptionProps) => {
  const { optionVariant } = useContext(DropdownProvider);

  return (
    <BaseOption
      role="option"
      data-value={value}
      key={value}
      aria-disabled={disabled}
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      $optionVariant={optionVariant}
      {...props}
    >
      {label ?? value}
    </BaseOption>
  );
};

export default Dropdown;
