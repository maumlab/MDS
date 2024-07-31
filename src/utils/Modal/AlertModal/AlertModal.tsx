import { Button } from "../../../components";
import { BasicModal } from "../BasicModal";
import { useModal } from "../hooks";
import { AlertModalProps } from "./AlertModal.type";

const AlertModal = ({
  buttonLabel = "확인",
  onConfirm,
  children,
  preventClose = false,
  variant = "primary",
  ...props
}: AlertModalProps) => {
  const { onClose } = useModal();

  return (
    <BasicModal {...props}>
      {children}
      <Button
        variant={variant}
        onClick={async () => {
          if (onConfirm) {
            await onConfirm();
          }
          if (preventClose) {
            return;
          }
          onClose(props._key);
        }}
      >
        {buttonLabel}
      </Button>
    </BasicModal>
  );
};

export default AlertModal;
