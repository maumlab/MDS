import { ModalProps } from "../Modal.type";

/**
 * @param XS 380px -> 300px -> 300px
 * @param SM 600px -> 450px -> 300px
 * @param MD 800px
 * @param LG 1000px
 */
export type ModalSize = "XS" | "SM" | "MD" | "LG";

/**
 * @param {ModalSize} size 모달 사이즈, default: SM
 * @param {boolean} responsive 반응형 유무, 클라이언트에서 쓸거면 true 필요, default: false
 * @param {string} title 모달 타이틀
 * @param {string} role closeIcon 유무를 위해 사용 (반응형 모바일에서 alert, confirm일 때 closeIcon 비노출), default: basic
 */
export type BasicModalProps = {
  title: string;
  size?: ModalSize;
  responsive?: boolean;
  role?: "basic" | "alert" | "confirm";
} & ModalProps;
