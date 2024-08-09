import { BasicModal } from "../BasicModal";
import { useModal } from "../hooks";
import {
  ButtonWrapper,
  CancelButton,
  ConfirmButton,
} from "./ConfirmModal.style";
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
    <BasicModal {...props} role="confirm">
      {children}
      <ButtonWrapper>
        <CancelButton
          data-responsive={props.responsive ?? false}
          variant={cancelVariant}
          onClick={async () => {
            if (onCancel) {
              await onCancel();
            }
            onClose(props._key);
          }}
        >
          {cancelLabel}
        </CancelButton>
        <ConfirmButton
          data-responsive={props.responsive ?? false}
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
        </ConfirmButton>
      </ButtonWrapper>
    </BasicModal>
  );
};

export default ConfirmModal;
