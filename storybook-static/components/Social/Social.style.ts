import styled from "@emotion/styled";
import { themes } from "../../styles";

export const BaseSocial = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  &[data-type="primary"] {
    width: 100%;
    height: 60px;
    ${themes.radius.md};
    ${themes.typos.h6};
    gap: ${themes.spacing.md}px;
  }

  &[data-type="secondary"] {
    width: 60px;
    height: 60px;
    ${themes.radius.circle};
    border: 1px solid ${themes.colors.gray9};
  }
`;
