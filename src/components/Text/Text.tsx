import { ElementRef, forwardRef } from "react";
import { TextProps } from "./Text.type";
import { BaseText } from "./Text.style";
import { themes } from "../../styles";

const Text = forwardRef<ElementRef<"span">, TextProps>(
  (
    {
      as = "span",
      children,
      typo = "b4",
      color = "gray1",
      lineHeight,
      truncate,
      wordBreak = "keep-all",
      align = "left",
      whiteSpace = "normal",
      ...props
    }: TextProps,
    ref
  ) => {
    return (
      <BaseText
        as={as}
        ref={ref}
        {...props}
        style={{
          textAlign: align,
          wordBreak,
          color: themes.colors[color],
          lineHeight: lineHeight ? `${lineHeight}px` : "normal",
          ...props.style,
        }}
        $typo={typo}
        $truncate={truncate}
        $whitespace={whiteSpace}
      >
        {children}
      </BaseText>
    );
  }
);
Text.displayName = "Text";

export default Text;
