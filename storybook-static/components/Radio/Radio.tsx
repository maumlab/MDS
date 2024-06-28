import { ComponentPropsWithRef, forwardRef } from "react";
import { RadioProps } from "./Radio.type";
import { BaseRadio, BaseRadioInput } from "./Radio.style";

const Radio = forwardRef(
  (
    { label, ...props }: RadioProps,
    ref: ComponentPropsWithRef<"input">["ref"]
  ) => {
    return (
      <BaseRadio>
        <BaseRadioInput type="radio" {...props} ref={ref} />
        {label}
      </BaseRadio>
    );
  }
);

export default Radio;
