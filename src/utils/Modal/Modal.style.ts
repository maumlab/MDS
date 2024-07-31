import styled from "@emotion/styled";
import { ModalProps } from "./Modal.type";

export const ModalWrapper = styled.div<Pick<ModalProps, "zIndex">>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ zIndex }) => zIndex};
  box-sizing: border-box;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);

  > .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    margin-inline: auto;

    & > div {
      max-height: 100%;
    }
  }
`;
