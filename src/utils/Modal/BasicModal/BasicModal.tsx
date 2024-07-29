import Modal from "../Modal";
import { BasicModalProps } from "./BasicModal.type";
import { Container } from "./BasicModal.style";
import { Text } from "../../../components";

const BasicModal = ({
  title,
  gap = 24,
  children,
  ...props
}: BasicModalProps) => {
  return (
    <Modal {...props}>
      <Container $gap={gap}>
        <Text typo="h3">{title}</Text>
        {children}
      </Container>
    </Modal>
  );
};

export default BasicModal;
