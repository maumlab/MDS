import styled from "@emotion/styled";
import { ModalProps } from "./Modal.type";

export const Overlay = styled.div<Pick<ModalProps, "zIndex">>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ zIndex }) => zIndex};
  box-sizing: border-box;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);

  & > div {
    width: fit-content;
    height: fit-content;
  }
`;
