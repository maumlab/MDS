import { Button } from "../../../components";
import { BasicModal } from "../BasicModal";
import { AlertModalProps } from "./AlertModal.type";

const AlertModal = ({
  buttonLabel = "확인",
  onConfirm,
  children,
  ...props
}: AlertModalProps) => {
  return (
    <BasicModal {...props}>
      {children}
      <Button onClick={onConfirm}>{buttonLabel}</Button>
    </BasicModal>
  );
};

export default AlertModal;
