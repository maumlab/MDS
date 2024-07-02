import { ElementRef, forwardRef } from "react";
import { BaseBadge } from "./Badge.style";
import { BadgeRole, RoleBadgeProps } from "./Badge.type";

const RoleBadge = forwardRef<ElementRef<"span">, RoleBadgeProps>(
  ({ role }: RoleBadgeProps, ref) => {
    let label = "";
    switch (role) {
      case BadgeRole.Director:
        label = "의사(마스터)";
        break;
      case BadgeRole.Doctor:
        label = "의사";
        break;
      case BadgeRole.Nurse:
        label = "간호사";
        break;
    }

    return (
      <BaseBadge $variant="role" data-role={role} ref={ref}>
        {label}
      </BaseBadge>
    );
  }
);

export default RoleBadge;
