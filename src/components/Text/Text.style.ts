import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { themes, TypoType } from "../../styles";

export const BaseText = styled.span<{
  $typo: TypoType;
  $truncate?: number;
  $whitespace?: string;
}>`
  ${({ $typo }) => themes.typos[$typo]}

  ${({ $truncate }) =>
    $truncate &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;

      display: -webkit-box;
      -webkit-line-clamp: ${$truncate};
      -webkit-box-orient: vertical;
    `}

    ${({ $whitespace }) => css`
    white-space: ${$whitespace};
  `}
`;
