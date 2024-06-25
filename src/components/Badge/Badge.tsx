import { ElementRef, forwardRef } from "react";
import { BaseBadge } from "./Badge.style";
import { BasicBadgeProps } from "./Badge.type";

const Badge = forwardRef<ElementRef<"span">, BasicBadgeProps>(
  ({ children }: BasicBadgeProps, ref) => {
    return (
      <BaseBadge data-variant="basic" ref={ref}>
        <span>{children}</span>
      </BaseBadge>
    );
  }
);

export default Badge;
