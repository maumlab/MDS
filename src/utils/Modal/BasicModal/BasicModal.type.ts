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
 */
export type BasicModalProps = {
  title: string;
  size?: ModalSize;
  responsive?: boolean;
} & ModalProps;
