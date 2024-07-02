import { forwardRef } from "react";
import { ButtonProps } from "./Button.type";
import { BaseButton } from "./Button.style";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "xl",
      loading = false,
      children,
      disabled = false,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      // TODO 추후 로딩 컴포넌트가 생긴다면 로딩 컴포넌트로 변경
      <BaseButton
        {...props}
        disabled={disabled}
        ref={ref}
        $variant={variant}
        $size={size}
      >
        {loading ? "Loading..." : children}
      </BaseButton>
    );
  }
);

export default Button;
