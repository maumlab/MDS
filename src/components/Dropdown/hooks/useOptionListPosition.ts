import { useCallback, useEffect } from "react";
import { UseOptionListPositionProps } from "../Dropdown.type";

const useOptionListPosition = ({
  container,
  triggerRef,
  optionListRef,
  optionVariant,
}: UseOptionListPositionProps) => {
  const changeOptionListPosition = useCallback(() => {
    const triggerElement = triggerRef?.current;
    const optionListElement = optionListRef?.current;

    if (optionListElement && triggerElement) {
      const windowScrollY = window.scrollY;
      const windowScrollX = window.scrollX;
      const windowScrollWidth = document.body.scrollWidth;
      const triggerBoundingRect = triggerElement.getBoundingClientRect();

      optionListElement.style.minWidth = `${triggerBoundingRect.width}px`;
      if (optionVariant === "ellipsis" || optionVariant === "multiple") {
        optionListElement.style.maxWidth = `${triggerBoundingRect.width}px`;
      }

      optionListElement.style.top = `${
        windowScrollY + triggerBoundingRect.bottom + 10
      }px`;
      optionListElement.style.left = `${
        windowScrollX + triggerBoundingRect.left
      }px`;

      const optionListBoundingRect = optionListElement.getBoundingClientRect();
      // window 오른쪽으로 벗어났을 경우
      if (windowScrollX + optionListBoundingRect.right > windowScrollWidth) {
        optionListElement.style.left = `${
          triggerBoundingRect.right - optionListElement.offsetWidth
        }px`;
      }

      optionListElement.style.transform = "scale(1)";
      optionListElement.style.opacity = "1";
    }
  }, [triggerRef, optionListRef]);

  useEffect(() => {
    if (container) {
      changeOptionListPosition();
    }
  }, [changeOptionListPosition, container]);

  useEffect(() => {
    window.addEventListener("resize", changeOptionListPosition);
    return () => {
      window.removeEventListener("resize", changeOptionListPosition);
    };
  }, [changeOptionListPosition]);
};

export default useOptionListPosition;
