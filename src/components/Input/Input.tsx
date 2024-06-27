import { ComponentPropsWithRef, forwardRef } from "react";
import { InputProps } from "./Input.type";
import { BaseContainer, BaseInput } from "./Input.style";
import AlertMessage from "../AlertMessage";

const Input = forwardRef(
  (
    { success, error, ...props }: InputProps,
    ref: ComponentPropsWithRef<"input">["ref"]
  ) => {
    return (
      <BaseContainer>
        <BaseInput
          ref={ref}
          {...props}
          data-error={!!error}
          data-success={!!success}
        />
        {error && <AlertMessage type="error" message={error} />}
        {success && <AlertMessage type="success" message={success} />}
      </BaseContainer>
    );
  }
);

export default Input;
