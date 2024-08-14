import { useEffect, useMemo, useRef, useState } from "react";
import Portal from "../Portal";
import { ModalProps } from "./Modal.type";
import { generateUniqueId } from "../../lib";
import { MODAL_Z_INDEX } from "../../constants";
import { ModalWrapper } from "./Modal.style";
import { useModal } from "./hooks";

/**
 * Overlay 위로 children이 띄워지는 컴포넌트
 */
const Modal = ({
  _key,
  zIndex = MODAL_Z_INDEX,
  children,
  position = "center",
}: ModalProps) => {
  const modalId = useMemo(() => `modal_${generateUniqueId()}`, []);
  const [container, setContainer] = useState<Element | null>(null);
  const { onClose } = useModal();
  const contentRef = useRef<HTMLDivElement>(null);
  const [overlayHeight, setOverlayHeight] = useState<string | number>("100%");

  useEffect(() => {
    const newContainer = document.createElement("div");
    newContainer.setAttribute("id", modalId);
    document.body.appendChild(newContainer);
    setContainer(newContainer);

    return () => {
      const containerDOM = document.getElementById(modalId) as HTMLDivElement;
      containerDOM.remove();
    };
  }, []);

  useEffect(() => {
    if (container) {
      if (contentRef.current) {
        const childElement = contentRef.current.querySelector(
          ":scope > div, :scope > section"
        );
        if (childElement) {
          const childHeight = childElement.scrollHeight;
          const vh10 = window.innerHeight * 0.1;
          setOverlayHeight(childHeight + vh10);
        }
      }
    }
  }, [children, container]);

  return (
    <Portal container={container}>
      <ModalWrapper zIndex={zIndex}>
        <div
          className={`overlay mask`}
          style={{ height: overlayHeight }}
          onClick={() => onClose(_key)}
        />
        <div className="content" data-position={position} ref={contentRef}>
          {children}
        </div>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
