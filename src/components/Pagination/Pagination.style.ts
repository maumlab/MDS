import styled from "@emotion/styled";
import { css, themes } from "../../styles";
import { PaginationType } from "./Pagination.type";

export const BasePagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & > button:not(:last-of-type) {
    border-right: none;
  }
`;

export const BasePage = styled.button<{ $type: PaginationType }>`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border: 1px solid ${themes.colors.gray6};
  outline: none;
  background-color: ${themes.colors.white};
  color: ${themes.colors.gray3};
  ${themes.typos.b3};

  ${({ $type }) => {
    return css`
      &[data-active="true"] {
        background-color: ${
          $type === "metri" ? themes.colors.blue : themes.colors.emrBlue3
        };
        color: ${themes.colors.white};

        &:hover {
        opacity: 1;
      }
    `;
  }}

  &:disabled {
    cursor: no-drop;
    opacity: 1;

    & > * {
      opacity: 0.3;
    }
  }
`;
