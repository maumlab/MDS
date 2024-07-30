import { Button } from "../../../components";
import { BasicModal } from "../BasicModal";
import { ButtonWrapper } from "./ConfirmModal.style";
import { ConfirmModalProps } from "./ConfirmModal.type";

const ConfirmModal = ({
  onCancel,
  onConfirm,
  cancelLabel = "취소",
  confirmLabel = "확인",
  children,
  ...props
}: ConfirmModalProps) => {
  return (
    <BasicModal {...props}>
      {children}
      <ButtonWrapper>
        <Button
          variant="gray"
          onClick={() => {
            onCancel?.();
            props.onClose();
          }}
        >
          {cancelLabel}
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onConfirm?.();
          }}
        >
          {confirmLabel}
        </Button>
      </ButtonWrapper>
    </BasicModal>
  );
};

export default ConfirmModal;
