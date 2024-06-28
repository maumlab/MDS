import { ElementRef, forwardRef } from "react";
import { BaseBadge } from "./Badge.style";
import { LevelBadgeProps } from "./Badge.type";

const LevelBadge = forwardRef<ElementRef<"span">, LevelBadgeProps>(
  ({ level }: LevelBadgeProps, ref) => {
    return (
      <BaseBadge data-variant="level" data-level={level} ref={ref}>
        {level}
      </BaseBadge>
    );
  }
);

export default LevelBadge;
