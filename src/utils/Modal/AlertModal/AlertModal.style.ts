import styled from "@emotion/styled";
import { Button } from "../../../components";
import { themes } from "../../../styles";

export const ConfirmButton = styled(Button)`
  &[data-responsive="true"] {
    ${themes.screen.tablet} {
      height: 50px;
    }

    ${themes.screen.mobile} {
      height: 50px;
    }
  }
`;
