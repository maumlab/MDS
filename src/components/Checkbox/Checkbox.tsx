import { ComponentPropsWithRef, forwardRef } from "react";
import { BaseCheckbox, BaseCheckboxInput } from "./Checkbox.style";
import { CheckboxProps } from "./Checkbox.type";

const Checkbox = forwardRef(
  (
    { children, ...props }: CheckboxProps,
    ref: ComponentPropsWithRef<"input">["ref"]
  ) => {
    return (
      <BaseCheckbox>
        <BaseCheckboxInput type="checkbox" ref={ref} {...props} />
        {children}
      </BaseCheckbox>
    );
  }
);

export default Checkbox;
