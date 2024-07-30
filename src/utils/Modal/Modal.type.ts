export type ModalProps = {
  onClose: () => void;
  zIndex?: number;
  children?: React.ReactNode;
};

export type ModalType<T> = {
  key: string; // unique
  Component: React.FC<T>;
  props: T;
};
