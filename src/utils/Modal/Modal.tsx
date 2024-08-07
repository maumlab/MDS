import { useEffect, useState } from "react";
import Portal from "../Portal";
import { ModalProps } from "./Modal.type";
import { generateUniqueId } from "../../lib";
import { MODAL_Z_INDEX } from "../../constants";
import { Overlay } from "./Modal.style";
import { useModal } from "./hooks";

/**
 * Overlay 위로 children이 띄워지는 컴포넌트 (children의 위치는 모달을 사용하는 곳에서 지정)
 */
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
      <Overlay
        zIndex={zIndex}
        onClick={() => {
          onClose(_key);
        }}
      >
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </Overlay>
    </Portal>
  );
};

export default Modal;
