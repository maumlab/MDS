export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
  children: React.ReactNode;
};
