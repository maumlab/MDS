import Modal from "../Modal";
import { BasicModalProps } from "./BasicModal.type";
import { Container, ModalHeader } from "./BasicModal.style";
import { Text } from "../../../components";
import { CloseIcon } from "../../../assets/icons";
import { useModal } from "../hooks";

const BasicModal = ({
  title,
  gap = 24,
  width = 600,
  children,
  ...props
}: BasicModalProps) => {
  const { onClose } = useModal();

  return (
    <Modal {...props}>
      <Container $gap={gap} $width={width}>
        <ModalHeader>
          <Text typo="h3" whiteSpace="pre-wrap" lineHeight={38}>
            {title}
          </Text>
          <CloseIcon onClick={() => onClose(props._key)} />
        </ModalHeader>
        {children}
      </Container>
    </Modal>
  );
};

export default BasicModal;
