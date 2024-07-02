import { createPortal } from "react-dom";
import { PortalProps } from "./Portal.type";

const Portal = ({ children, container }: PortalProps) => {
  if (!container) return null;
  return createPortal(children, container);
};

export default Portal;
