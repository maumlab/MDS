import { useCallback, useEffect } from "react";
import { UseTooltipPositionProps } from "../Tooltip.type";
import { themes } from "../../../styles";

const useTooltipPosition = ({
  container,
  triggerRef,
  tooltipRef,
  position,
  triPosition,
  portalRef,
}: UseTooltipPositionProps) => {
  const changeTooltipPosition = useCallback(() => {
    const triggerElement = triggerRef?.current;
    const tooltipElement = tooltipRef?.current;
    if (!triggerElement || !tooltipElement) return;

    const windowScrollY = portalRef?.current
      ? portalRef.current.scrollTop
      : window.scrollY;
    const windowScrollX = window.scrollX;
    const windowScrollWidth = document.body.scrollWidth;
    const windowClientWidth = document.body.clientWidth;
    const triggerBoundingRect = triggerElement.getBoundingClientRect();
    const gap = themes.spacing.xs;

    switch (triPosition) {
      case "left":
        tooltipElement.style.left = `${
          windowScrollX +
          triggerBoundingRect.left +
          triggerElement.offsetWidth / 2 -
          22
        }px`;
        break;
      case "right":
        tooltipElement.style.left = `${
          windowScrollX +
          triggerBoundingRect.left +
          triggerElement.offsetWidth / 2 -
          tooltipElement.offsetWidth +
          22
        }px`;
        break;
      case "center":
        tooltipElement.style.left = `${
          windowScrollX +
          triggerBoundingRect.left +
          triggerElement.offsetWidth / 2 -
          tooltipElement.offsetWidth / 2
        }px`;
        break;
    }

    switch (position) {
      case "top":
        tooltipElement.style.top = `${
          windowScrollY + triggerBoundingRect.bottom + gap
        }px`;
        break;
      case "bottom":
        tooltipElement.style.top = `${
          windowScrollY +
          triggerBoundingRect.top -
          tooltipElement.offsetHeight -
          6 -
          gap
        }px`;
        break;
      case "left":
        tooltipElement.style.top = `${
          windowScrollY +
          triggerBoundingRect.top +
          triggerElement.offsetHeight / 2 -
          tooltipElement.offsetHeight / 2
        }px`;
        tooltipElement.style.left = `${
          windowScrollX + triggerBoundingRect.right + gap
        }px`;
        break;
      case "right":
        tooltipElement.style.top = `${
          windowScrollY +
          triggerBoundingRect.top +
          triggerElement.offsetHeight / 2 -
          tooltipElement.offsetHeight / 2
        }px`;
        tooltipElement.style.left = `${
          windowScrollX +
          triggerBoundingRect.left -
          tooltipElement.offsetWidth -
          6 -
          gap
        }px`;
        break;
    }

    // 기본 위치가 window를 벗어났을 경우
    const tooltipBoundingRect = tooltipElement.getBoundingClientRect();
    if (tooltipBoundingRect.width >= windowClientWidth) {
      // tooltip의 너비가 viewport 너비보다 클 경우
      tooltipElement.style.width = "100%";
      tooltipElement.style.left = `${windowScrollX}px`;
      tooltipElement.style.transform = `translate(0, ${
        position === "top" ? "-100%" : "0"
      })`;
    } else if (windowScrollX + tooltipBoundingRect.left < 0) {
      // window 왼쪽으로 벗어났을 경우
      tooltipElement.style.left = `0px`;
      tooltipElement.style.transform = `translate(0, ${
        position === "top" ? "-100%" : "0"
      })`;
    } else if (windowScrollX + tooltipBoundingRect.right > windowScrollWidth) {
      // window 오른쪽으로 벗어났을 경우
      tooltipElement.style.left = `${
        windowScrollWidth - (tooltipBoundingRect.width + gap)
      }px`;
      tooltipElement.style.transform = `translate(0, ${
        position === "top" ? "-100%" : "0"
      })`;
    }

    if (tooltipBoundingRect.y < 0) {
      const { left } = tooltipElement.getBoundingClientRect();
      tooltipElement.style.top = `0px`;
      tooltipElement.style.left = `${left}px`;
      tooltipElement.style.transform = `translate(0, 0)`;
    }
  }, [triggerRef, tooltipRef, position, triPosition]);

  useEffect(() => {
    if (container) {
      changeTooltipPosition();
    }
  }, [changeTooltipPosition, container]);

  useEffect(() => {
    window.addEventListener("resize", changeTooltipPosition);
    return () => {
      window.removeEventListener("resize", changeTooltipPosition);
    };
  }, [changeTooltipPosition]);
};

export default useTooltipPosition;
