import { forwardRef } from "react";
import { BaseTextarea } from "./Textarea.style";
import { TextareaProps } from "./Textarea.type";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ children, height = 208, ...props }: TextareaProps, ref) => {
    return (
      <BaseTextarea {...props} ref={ref} style={{ height }}>
        {children}
      </BaseTextarea>
    );
  }
);

export default Textarea;
