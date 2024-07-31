import { useEffect, useState } from "react";
import Portal from "../Portal";
import { ModalProps } from "./Modal.type";
import { generateUniqueId } from "../../lib";
import { MODAL_Z_INDEX } from "../../constants";
import { ModalWrapper } from "./Modal.style";
import { useModal } from "./hooks";

const Modal = ({ _key, zIndex = MODAL_Z_INDEX, children }: ModalProps) => {
  const modalId = `modal_${generateUniqueId()}`;
  const [container, setContainer] = useState<Element | null>(null);
  const { onClose } = useModal();

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

  return (
    <Portal container={container}>
      <ModalWrapper
        zIndex={zIndex}
        onClick={() => {
          onClose(_key);
        }}
      >
        <div className="content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
