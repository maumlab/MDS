import Modal from "../Modal";
import { BasicModalProps } from "./BasicModal.type";
import { Text } from "../../../components";
import { CloseIcon } from "../../../assets/icons";
import * as S from "./BasicModal.style";
import { useModal } from "../hooks";

/**
 * Alert, Confirm의 기본이 되는 모달
 *
 * Title이 있는 모달은 무조건 BasicModal을 사용한다.
 *
 * 사이즈, 반응형 여부를 설정할 수 있다.
 */
const BasicModal = ({
  title,
  size = "SM",
  responsive = false,
  children,
  isResponsiveCloseIconVisible = true,
  ...props
}: BasicModalProps) => {
  const { onClose } = useModal();

  return (
    <Modal {...props}>
      <S.Container>
        <S.Wrapper
          data-isresponsivecloseiconvisible={isResponsiveCloseIconVisible}
          data-size={size}
          data-responsive={responsive}
        >
          <div className="header">
            <Text
              className="title"
              typo="h3"
              whiteSpace="pre-wrap"
              wordBreak="break-all"
              lineHeight={38}
            >
              {title}
            </Text>
            <CloseIcon onClick={() => onClose(props._key)} />
          </div>
          {children}
        </S.Wrapper>
      </S.Container>
    </Modal>
  );
};

export default BasicModal;
