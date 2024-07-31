import { ModalProps } from "../Modal.type";

export type BasicModalProps = {
  title: string;
  gap?: number;
  width?: number;
} & ModalProps;
