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
          {typeof error === "string" && <AlertMessage type="error" message={error} />}
          {typeof success === "string" && <AlertMessage type="success" message={success} />}
        </Absolute>
      </BaseContainer>
    );
  }
);

export default Input;
