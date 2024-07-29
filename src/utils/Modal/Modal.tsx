import { useEffect, useState } from "react";
import Portal from "../Portal";
import { ModalProps } from "./Modal.type";
import { generateUniqueId } from "../../lib";
import { MODAL_Z_INDEX } from "../../constants";
import { ModalWrapper } from "./Modal.style";

const Modal = ({ onClose, zIndex = MODAL_Z_INDEX, children }: ModalProps) => {
  const portalId = `portal_${generateUniqueId()}`;
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    const newContainer = document.createElement("div");
    newContainer.setAttribute("id", portalId);
    document.body.appendChild(newContainer);

    setContainer(newContainer);

    return () => {
      const containerDOM = document.getElementById(portalId) as HTMLDivElement;
      containerDOM.remove();
    };
  }, []);

  return (
    <Portal container={container}>
      <ModalWrapper zIndex={zIndex}>
        <div className="background mask" onClick={onClose}></div>
        <div className="content">{children}</div>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
