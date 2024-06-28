import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { themes, TypoType } from "../../styles";

export const BaseText = styled.span<{
  $typo: TypoType;
  $trucate: number;
}>`
  ${({ $typo }) => themes.typos[$typo]}

  ${({ $trucate }) =>
    $trucate &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;

      display: -webkit-box;
      -webkit-line-clamp: ${$trucate};
      -webkit-box-orient: vertical;
    `}
`;
