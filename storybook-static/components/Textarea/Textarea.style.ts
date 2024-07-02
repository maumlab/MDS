import styled from "@emotion/styled";
import { themes } from "../../styles";

export const BaseTextarea = styled.textarea`
  width: 100%;
  resize: none;
  ${themes.radius.md};
  border: 1px solid ${themes.colors.gray5};
  background-color: ${themes.colors.gray7};

  transition: border-color 0.2s;

  caret-color: ${themes.colors.blue};
  padding: ${themes.spacing.lg}px;
  ${themes.typos.b4};
  line-height: 24px;
  color: ${themes.colors.gray1};

  &:disabled {
    cursor: not-allowed;
    border-color: ${themes.colors.gray5};
    background-color: ${themes.colors.gray5};
  }

  &:focus {
    border-color: ${themes.colors.blue};
    outline: ${themes.colors.blue};
  }
`;
