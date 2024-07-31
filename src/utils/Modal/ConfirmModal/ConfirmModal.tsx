import { Button } from "../../../components";
import { BasicModal } from "../BasicModal";
import { useModal } from "../hooks";
import { ButtonWrapper } from "./ConfirmModal.style";
import { ConfirmModalProps } from "./ConfirmModal.type";

const ConfirmModal = ({
  onCancel,
  onConfirm,
  cancelLabel = "취소",
  confirmLabel = "확인",
  cancelVariant = "gray",
  confirmVariant = "primary",
  preventConfirmClose = false,
  children,
  ...props
}: ConfirmModalProps) => {
  const { onClose } = useModal();

  return (
    <BasicModal {...props}>
      {children}
      <ButtonWrapper>
        <Button
          variant={cancelVariant}
          onClick={async () => {
            if (onCancel) {
              await onCancel();
            }
            onClose(props._key);
          }}
        >
          {cancelLabel}
        </Button>
        <Button
          variant={confirmVariant}
          onClick={async () => {
            if (onConfirm) {
              await onConfirm();
            }
            if (preventConfirmClose) {
              return;
            }
            onClose(props._key);
          }}
        >
          {confirmLabel}
        </Button>
      </ButtonWrapper>
    </BasicModal>
  );
};

export default ConfirmModal;
