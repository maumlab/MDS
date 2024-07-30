import { BasicModalProps } from "../BasicModal";

export type ConfirmModalProps = {
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
} & BasicModalProps;
