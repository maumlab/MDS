import { ButtonVariant } from "../../../components";
import { BasicModalProps } from "../BasicModal";

type ModalVariantType = Extract<ButtonVariant, "primary" | "black" | "gray">;

/**
 * @param {ModalVariantType} variant 모달 버튼 색상, default: primary
 * @param {string} buttonLabel 버튼 라벨, default: 확인
 * @param {boolean} preventClose 모달 닫기 방지, default: false
 * @param {() => Promise<void>} onConfirm 확인 버튼 클릭 시 실행할 함수
 */
export type AlertModalProps = {
  variant?: ModalVariantType;
  buttonLabel?: string;
  preventClose?: boolean;
  onConfirm?: () => Promise<void>;
  disabled?: boolean;
} & BasicModalProps;
