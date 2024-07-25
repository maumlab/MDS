import styled from "@emotion/styled";
import { themes } from "../../styles";

export const BaseLabel = styled.div`
  display: flex;
  flex-direction: column;

  &[data-required="true"] {
    & > label:after {
      content: "";
      position: relative;
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: ${themes.colors.redDark1};
      ${themes.radius.circle};
      margin-left: 2px;
      top: -5px;
    }
  }
`;
