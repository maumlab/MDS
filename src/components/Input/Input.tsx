import { ComponentPropsWithRef, forwardRef } from "react";
import { InputProps } from "./Input.type";
import { Absolute, BaseContainer, BaseInput } from "./Input.style";
import AlertMessage from "../AlertMessage";

const Input = forwardRef(
  ({ variant = "metri", success, error, ...props }: InputProps, ref: ComponentPropsWithRef<"input">["ref"]) => {
    return (
      <BaseContainer>
        <BaseInput ref={ref} {...props} data-error={!!error} data-success={!!success} $variant={variant} />
        <Absolute>
          {typeof error === "string" && !!error && <AlertMessage type="error" message={error} />}
          {typeof success === "string" && !!success && <AlertMessage type="success" message={success} />}
        </Absolute>
      </BaseContainer>
    );
  }
);

export default Input;
