import { BasicModalProps } from "../BasicModal";

export type AlertModalProps = {
  buttonLabel?: string;
  onConfirm?: () => void;
} & BasicModalProps;
