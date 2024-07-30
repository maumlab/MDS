import Modal from "../Modal";
import { BasicModalProps } from "./BasicModal.type";
import { Container, ModalHeader } from "./BasicModal.style";
import { Text } from "../../../components";
import { CloseIcon } from "../../../assets/icons";

const BasicModal = ({
  title,
  gap = 24,
  children,
  ...props
}: BasicModalProps) => {
  return (
    <Modal {...props}>
      <Container $gap={gap}>
        <ModalHeader>
          <Text typo="h3" whiteSpace="pre-wrap" lineHeight={38}>
            {title}
          </Text>
          <CloseIcon onClick={props.onClose} />
        </ModalHeader>
        {children}
      </Container>
    </Modal>
  );
};

export default BasicModal;
