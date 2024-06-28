import { ElementRef, forwardRef } from "react";

import { StatusBadgeProps } from "./Badge.type";
import { BaseBadge } from "./Badge.style";

const StatusBadge = forwardRef<ElementRef<"span">, StatusBadgeProps>(
  ({ status }: StatusBadgeProps, ref) => {
    let label = "";
    switch (status) {
      case "Sent":
        label = "검사대기";
        break;
      case "Progress":
        label = "검사중";
        break;
      case "Complete":
        label = "검사완료";
        break;
      case "Unfinished":
        label = "미검사";
        break;
    }

    return (
      <BaseBadge data-variant="status" data-status={status} ref={ref}>
        {label}
      </BaseBadge>
    );
  }
);

export default StatusBadge;
