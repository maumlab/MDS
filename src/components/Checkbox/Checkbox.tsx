import { ComponentPropsWithRef, forwardRef } from "react";
import { BaseCheckbox, BaseCheckboxInput } from "./Checkbox.style";
import { CheckboxProps } from "./Checkbox.type";

const Checkbox = forwardRef(
  (
    { variant = "basic", color = "gray3", children, ...props }: CheckboxProps,
    ref: ComponentPropsWithRef<"input">["ref"]
  ) => {
    return (
      <BaseCheckbox $variant={variant} $color={color}>
        <BaseCheckboxInput type="checkbox" ref={ref} {...props} />
        {children}
      </BaseCheckbox>
    );
  }
);

export default Checkbox;
