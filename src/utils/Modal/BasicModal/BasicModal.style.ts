import styled from "@emotion/styled";
import { themes } from "../../../styles";

export const Container = styled.div<{ $gap: number }>`
  background-color: ${themes.colors.white};
  ${themes.radius.lg};
  ${themes.shadow.md};
  padding: 48px;
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap}px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & > svg {
    margin-top: 7px;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
