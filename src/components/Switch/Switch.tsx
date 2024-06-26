import { ComponentPropsWithRef, forwardRef } from "react";
import { BaseSwitch, Checkbox, Slider } from "./Switch.style";
import { SwitchProps } from "./Switch.type";

const Switch = forwardRef(
  (
    { label, ...props }: SwitchProps,
    ref: ComponentPropsWithRef<"input">["ref"]
  ) => {
    return (
      <BaseSwitch>
        <Checkbox ref={ref} type="checkbox" {...props} />
        <Slider>{label}</Slider>
      </BaseSwitch>
    );
  }
);

export default Switch;
