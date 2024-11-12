import styled from "@emotion/styled";
import { css, themes } from "../../styles";
import { SocialType } from "./Social.type";

export const BaseSocial = styled.button<{ $type: SocialType }>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $type }) => {
    const circleStyle = css`
      width: 60px;
      height: 60px;
      ${themes.radius.circle};
    `;

    switch ($type) {
      case "primary":
        return css`
          width: 100%;
          height: 60px;
          ${themes.radius.md};
          ${themes.typos.h6};
          gap: ${themes.spacing.md}px;
        `;
      case "secondary":
        return css`
          ${circleStyle}
          border: 1px solid ${themes.colors.gray9};
        `;
      case "tertiary":
        return circleStyle;
    }
  }}
`;
