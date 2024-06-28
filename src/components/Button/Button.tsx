import { forwardRef } from "react";
import { ButtonProps } from "./Button.type";
import { BaseButton } from "./Button.style";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, ...props }: ButtonProps, ref) => {
    return (
      <BaseButton {...props} ref={ref}>
        Button
      </BaseButton>
    );
  }
);

export default Button;
