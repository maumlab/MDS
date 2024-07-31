import { ButtonVariant } from "../../../components";
import { BasicModalProps } from "../BasicModal";

type ModalVariantType = Extract<ButtonVariant, "primary" | "black" | "gray">;

export type AlertModalProps = {
  variant?: ModalVariantType;
  buttonLabel?: string;
  preventClose?: boolean;
  onConfirm?: () => Promise<void>;
} & BasicModalProps;
