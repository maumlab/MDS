import { createContext, useEffect, useState } from "react";
import { ModalType } from "./Modal.type";

export const ModalContext = createContext<{
  onOpen: <T>(modal: ModalType<T>) => void;
  onClose: (key: string) => void;
  onClear: () => void;
} | null>(null);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modals, setModals] = useState<ModalType<any>[]>([]);

  const onOpen = <T,>(modal: ModalType<T>) => {
    setModals((prev) => [...prev, modal]);
  };

  const onClose = (key: string) => {
    setModals((prev) => prev.filter((modal) => modal.props._key !== key));
  };

  const onClear = () => {
    setModals([]);
  };

  // esc 키를 누르면 마지막에 추가한 모달부터 순차적으로 닫힘
  useEffect(() => {
    function onKeyDownESC(e: KeyboardEvent) {
      if (e.code === "Escape") setModals((prev) => prev.slice(0, -1));
    }
    document.addEventListener("keydown", onKeyDownESC);

    return () => {
      document.removeEventListener("keydown", onKeyDownESC);
    };
  }, []);

  // 모달이 열렸을 때 body에 overflow: hidden이 추가되어야 함.
  useEffect(() => {
    document.body.style.overflow = modals.length ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modals]);

  // TODO 모달이 열렸을 때 해당 모달로 포커스가 이동되어야 함.

  return (
    <ModalContext.Provider
      value={{
        onOpen,
        onClose,
        onClear,
      }}
    >
      {children}
      {modals?.map((modal) => {
        const { Component, props } = modal;
        return <Component key={props._key} {...props} />;
      })}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
