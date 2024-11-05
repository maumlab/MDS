import { BasicModalProps } from "../BasicModal";

export type ConfirmModalProps = {
  onConfirm?: () => Promise<void>;
  onCancel?: () => Promise<void>;
  confirmLabel?: string;
  cancelLabel?: string;
  cancelVariant?: "gray" | "black";
  confirmVariant?: "primary" | "black";
  preventConfirmClose?: boolean; // onConfirm 함수가 실행된 후 모달을 닫을지 여부
  disabled?: boolean;
} & BasicModalProps;
