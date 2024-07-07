import { useEffect } from "react";
import { DropdownEventParamsProps } from "../Dropdown.type";

const useClick = <T extends string>({
  triggerRef,
  optionListRef,
  expanded,
  close,
  toggle,
  onChange,
  disabled,
  multiple,
}: DropdownEventParamsProps<T>) => {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (disabled) return;

      const target = e.target as HTMLElement;
      const triggerElement = triggerRef?.current;
      const optionListElement = optionListRef?.current;

      const triggerIsTarget = triggerElement && triggerElement.contains(target);
      const optionIsTarget =
        optionListElement && optionListElement.contains(target);
      const targetIsInputControl = target.tagName === "INPUT";

      if (targetIsInputControl && expanded) {
        return;
      } else if (!triggerIsTarget && !optionIsTarget) {
        close();
      } else if (triggerIsTarget) {
        toggle();
      } else if (optionIsTarget) {
        const targetOption = (
          Array.from(optionListElement.children) as HTMLLIElement[]
        )
          .filter((optionElement) => optionElement.ariaDisabled !== "true")
          .find((optionElement) => optionElement.contains(target));
        if (targetOption) {
          const value = targetOption.dataset.value as T;
          if (!value) return;
          onChange(e, value);
          if (!multiple) {
            close();
          }
        }
      }
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useClick;
