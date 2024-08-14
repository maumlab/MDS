import { useModal } from "../hooks";
import { AlertModalProps } from "./AlertModal.type";
import * as S from "./AlertModal.style";
import { BasicModal } from "../BasicModal";

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
    <BasicModal {...props} isResponsiveCloseIconVisible={false}>
      {children}
      <S.ConfirmButton
        data-responsive={props.responsive ?? false}
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
      </S.ConfirmButton>
    </BasicModal>
  );
};

export default AlertModal;
