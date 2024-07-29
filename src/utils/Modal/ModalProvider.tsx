import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext<{
  onOpen: <T>(modal: ModalType<T>) => void;
  onClose: (key: string) => void;
  onClear: () => void;
} | null>(null);

type ModalType<T> = {
  key: string; // unique
  Component: React.FC<T>;
  props: T;
};

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modals, setModals] = useState<ModalType<any>[]>([]);

  const onOpen = <T,>(modal: ModalType<T>) => {
    setModals((prev) => [...prev, modal]);
  };

  const onClose = (key: string) => {
    setModals((prev) => prev.filter((modal) => modal.key !== key));
  };

  const onClear = () => {
    setModals([]);
  };

  useEffect(() => {
    function onKeyDownESC(e: KeyboardEvent) {
      if (e.code === "Escape") setModals((prev) => prev.slice(0, -1));
    }
    document.addEventListener("keydown", onKeyDownESC);

    return () => {
      document.removeEventListener("keydown", onKeyDownESC);
    };
  }, []);

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
        const { key, Component, props } = modal;
        return <Component key={key} {...props} />;
      })}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
