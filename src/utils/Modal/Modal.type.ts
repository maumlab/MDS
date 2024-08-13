/**
 * @param {string} _key 모달 고유 키
 * @param {number} zIndex z-index, default: 1000
 */
export type ModalProps = {
  _key: string;
  zIndex?: number;
  children?: React.ReactNode;
  position?: "center" | "left" | "right";
};

export type ModalType<T> = {
  Component: React.FC<T>;
  props: T & { _key: string };
};
