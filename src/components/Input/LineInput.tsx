import { ComponentPropsWithRef, forwardRef } from "react";
import { LineInputProps } from "./Input.type";
import { Absolute, BaseContainer, LineBaseInput } from "./Input.style";
import AlertMessage from "../AlertMessage";

const LineInput = forwardRef(
  (
    { error, success, ...props }: LineInputProps,
    ref: ComponentPropsWithRef<"input">["ref"]
  ) => {
    return (
      <BaseContainer>
        <LineBaseInput
          ref={ref}
          {...props}
          data-error={!!error}
          data-success={!!success}
        />
        <Absolute>
          {error && <AlertMessage type="error" message={error} />}
          {success && <AlertMessage type="success" message={success} />}
        </Absolute>
      </BaseContainer>
    );
  }
);

export default LineInput;
