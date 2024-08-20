import styled from "@emotion/styled";
import { themes } from "../../styles";

// FIXME 일단 padding이 15px 24px인 것만 해놓음. 나중에 필요하면 20px 30px도 해놔야함.
export const Container = styled.div`
  padding: 15px 24px;
  ${themes.radius.md};
  ${themes.typos.caption14Medium};

  &[data-variant="blue"] {
    background-color: ${themes.colors.blueLight3};

    & span[role="message"] {
      color: ${themes.colors.blue} !important;
    }
  }

  &[data-variant="green"] {
    background-color: ${themes.colors.greenLight3};

    & span[role="message"] {
      color: ${themes.colors.green} !important;
    }
  }

  &[data-variant="red"] {
    background-color: ${themes.colors.redLight3};

    & span[role="message"] {
      color: ${themes.colors.red} !important;
    }
  }

  & > div[role="item"] {
    display: flex;
    gap: ${themes.spacing.xs}px;

    & > svg {
      flex-shrink: 0;
    }
  }

  &[data-center="true"] {
    display: flex;
    justify-content: center;
  }
`;
