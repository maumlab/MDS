import { createPortal } from "react-dom";
import { PortalProps } from "./Portal.type";

/**
 * @params `container` 포탈로 사용할 node의 ref.current를 작성합니다. `Element | null`
 * @params `children` 포탈에 들어갈 컨텐츠 내용을 작성합니다. `ReactNode`
 * @return `createPortal`을 사용하여 container에 children을 렌더링합니다.
 */
const Portal = ({ children, container }: PortalProps) => {
  if (!container) return null;
  return createPortal(children, container);
};

export default Portal;
