import styled from "@emotion/styled";
import { Button } from "../../../components";
import { themes } from "../../../styles";

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const BaseButton = styled(Button)`
  &[data-responsive="true"] {
    ${themes.screen.tablet} {
      height: 50px;
    }

    ${themes.screen.mobile} {
      height: 50px;
    }
  }
`;

export const CancelButton = styled(BaseButton)``;

export const ConfirmButton = styled(BaseButton)``;
