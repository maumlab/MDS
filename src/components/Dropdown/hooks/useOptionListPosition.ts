import { useCallback, useEffect } from "react";
import { UseOptionListPositionProps } from "../Dropdown.type";

const useOptionListPosition = ({
  container,
  triggerRef,
  optionListRef,
  optionVariant,
  portalRef,
}: UseOptionListPositionProps) => {
  const changeOptionListPosition = useCallback(() => {
    const triggerElement = triggerRef?.current;
    const optionListElement = optionListRef?.current;

    if (optionListElement && triggerElement) {
      let windowScrollY, windowScrollX, windowScrollWidth, triggerBoundingRect;

      if (portalRef?.current) {
        windowScrollY = portalRef.current.scrollTop;
        windowScrollX = portalRef.current.scrollLeft;
        windowScrollWidth = portalRef.current.scrollWidth;
        const portalBoundingRect = portalRef.current.getBoundingClientRect();
        const childBoundingRect = triggerElement.getBoundingClientRect();
        triggerBoundingRect = {
          top: childBoundingRect.top - portalBoundingRect.top,
          right: childBoundingRect.right - portalBoundingRect.left,
          bottom: childBoundingRect.bottom - portalBoundingRect.top,
          left: childBoundingRect.left - portalBoundingRect.left,
          width: childBoundingRect.width,
          height: childBoundingRect.height,
        };
      } else {
        windowScrollY = window.scrollY;
        windowScrollX = window.scrollX;
        windowScrollWidth = document.body.scrollWidth;
        triggerBoundingRect = triggerElement.getBoundingClientRect();
      }

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
