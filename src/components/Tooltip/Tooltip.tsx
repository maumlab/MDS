import { useEffect, useMemo, useRef, useState } from "react";
import { TooltipWrapper, Tri, Wrapper } from "./Tooltip.style";
import { TooltipProps } from "./Tooltip.type";
import { generateUniqueId } from "../../lib";
import { Portal } from "../../utils";
import React from "react";
import useTooltipPosition from "./hooks/useTooltipPosition";

const Tooltip = ({
  children,
  position = "top",
  triPosition = "center",
  color = "black",
  content,
}: // disabled = false,
TooltipProps) => {
  // refs
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // tooltip portal
  const [container, setContainer] = useState<Element | null>(null);
  const isOpen = container !== null;
  const uniqueId = useMemo(() => generateUniqueId(), []);

  // open/close
  const open = () => {
    const newContainer = document.createElement("div");
    newContainer.id = uniqueId;
    document.body.appendChild(newContainer);
    setContainer(newContainer);
  };
  const close = () => {
    const container = document.getElementById(uniqueId);
    container?.remove();
    setContainer(null);
  };
  const toggle = () => {
    isOpen ? close() : open();
  };

  // tooltip의 위치를 정하는 로직
  useTooltipPosition({ container, triggerRef, tooltipRef, position, triPosition });
  // event handlers
  useEffect(() => {
    toggle();
  }, []);

  // trigger
  const [trigger, setTrigger] = useState<React.ReactNode>();
  useEffect(() => {
    setTrigger(
      React.cloneElement(children, {
        ...children.props,
        ref: triggerRef,
      })
    );
  }, []);

  return (
    <Wrapper>
      {trigger}
      <Portal container={container}>
        <TooltipWrapper role="tooltip" ref={tooltipRef} $position={position} $triPosition={triPosition} $color={color}>
          {content}
          <Tri className="tri" />
        </TooltipWrapper>
      </Portal>
    </Wrapper>
  );
};

export default Tooltip;
