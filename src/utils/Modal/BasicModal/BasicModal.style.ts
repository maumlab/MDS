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
