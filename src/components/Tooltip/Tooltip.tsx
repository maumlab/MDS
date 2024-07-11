import { TooltipWrapper, Tri, Wrapper } from "./Tooltip.style";
import { TooltipProps } from "./Tooltip.type";

const Tooltip = ({
  children,
  // container,
  // triggerRef,
  // tooltipRef,
  position = "top",
  triPosition = "center",
  color = "black",
  content,
}: // disabled = false,
TooltipProps) => {
  return (
    <Wrapper>
      {children}
      <TooltipWrapper role="tooltip" $position={position} $triPosition={triPosition} $color={color}>
        {content}
        <Tri className="tri" />
      </TooltipWrapper>
    </Wrapper>
  );
};

export default Tooltip;
