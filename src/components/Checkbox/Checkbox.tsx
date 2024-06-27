import { ComponentPropsWithRef, forwardRef } from "react";
import { BaseCheckbox, BaseCheckboxInput } from "./Checkbox.style";
import { CheckboxProps } from "./Checkbox.type";

const Checkbox = forwardRef(
  (
    { label, ...props }: CheckboxProps,
    ref: ComponentPropsWithRef<"input">["ref"]
  ) => {
    return (
      <BaseCheckbox>
        <BaseCheckboxInput type="checkbox" ref={ref} {...props} />
        {label}
      </BaseCheckbox>
    );
  }
);

export default Checkbox;
