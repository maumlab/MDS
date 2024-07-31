export type ModalProps = {
  _key: string;
  zIndex?: number;
  children?: React.ReactNode;
};

export type ModalType<T> = {
  Component: React.FC<T>;
  props: T & { _key: string };
};
