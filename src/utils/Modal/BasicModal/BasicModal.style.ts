import styled from "@emotion/styled";
import { themes } from "../../../styles";

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  margin-inline: auto;

  max-height: 90vh;
`;

export const Wrapper = styled.div`
  // 배경색, 그림자, 모서리
  background-color: ${themes.colors.white};
  ${themes.radius.lg};
  ${themes.shadow.md};

  // 정렬
  display: flex;
  flex-direction: column;

  & > .header {
    display: flex;
    justify-content: space-between;

    & > svg {
      cursor: pointer;
      flex-shrink: 0;

      @media (hover: hover) {
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  // 사이즈
  &[data-size="XS"] {
    width: 380px;
  }

  &[data-size="SM"] {
    width: 600px;
  }

  &[data-size="MD"] {
    width: 800px;
  }

  &[data-size="LG"] {
    width: 1000px;
  }

  // PC
  padding: 48px;
  gap: 24px;

  & > .header {
    & > svg {
      margin-top: 7px;
    }
  }

  // Tablet, Mobile 반응형
  &[data-responsive="true"] {
    ${themes.screen.tablet} {
      padding: 24px;
      gap: 16px;

      &[data-size="XS"] {
        width: 300px;
      }

      &[data-size="SM"] {
        width: 450px;
      }

      & > .header > .title {
        font-size: 20px;
        line-height: 29px !important;
      }

      & > .header > svg {
        margin-top: 2.5px;
      }
    }

    ${themes.screen.mobile} {
      padding: 24px;
      gap: 16px;

      &[data-size="XS"] {
        width: 300px;
      }

      &[data-size="SM"] {
        width: 300px;
      }

      & > .header > .title {
        font-size: 16px;
        line-height: 23px !important;
      }

      & > .header > svg {
        margin-top: 0px;
      }

      &[data-role="alert"],
      &[data-role="confirm"] {
        & > .header > svg {
          display: none;
        }
      }
    }
  }
`;
