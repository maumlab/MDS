export type TooltipColor = "black" | "white";
export type TooltipPosition = "top" | "bottom" | "left" | "right";
export type TooltipTriPosition = "left" | "center" | "right";

/**
 * position이 top, bottom인 경우만 triPosition 적용.
 * position이 left, right인 경우는 triPosition이 center로 고정.
 */
export type TooltipStyleProps = {
  position: TooltipPosition;
  triPosition: TooltipTriPosition;
  color: TooltipColor;
  zIndex?: number;
};

export type TooltipProps = Partial<TooltipStyleProps> & {
  children: React.ReactElement;
  content: React.ReactNode;
  disabled?: boolean;
};

export type UseTooltipPositionProps = {
  container: Element | null;
  triggerRef: React.RefObject<HTMLElement> | null;
  tooltipRef: React.RefObject<HTMLDivElement> | null;
  position: TooltipPosition;
  triPosition: TooltipTriPosition;
};
