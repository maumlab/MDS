import styled from "@emotion/styled";
import { themes } from "../../styles";
import { keyframes } from "@emotion/react";

export const BaseLineTabWrapper = styled.div`
  border-bottom: 1px solid ${themes.colors.gray5};

  &[data-size="large"] {
    & > button {
      width: 100px;
    }
  }

  &[data-size="medium"] {
    & > button {
      width: 77px;
    }
  }
`;

const SlideBefore = keyframes`
    0% {
        width: 0%;
    }
    100% {
        left: 0;
        width: 50%;
    }
`;

const SlideAfter = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: 50%;
    }
`;

export const BaseLineTabItem = styled.button`
  margin-bottom: -1px;
  height: 48px;
  color: ${themes.colors.gray3};
  ${themes.typos.caption14Regular};
  position: relative;

  &[data-active="true"] {
    color: ${themes.colors.blue};
    ${themes.typos.caption14Medium};

    &:before {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
      left: 50%;
      bottom: 0;
      background-color: ${themes.colors.blue};
      animation: ${SlideBefore} 0.3s forwards;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
      left: 50%;
      bottom: 0;
      background-color: ${themes.colors.blue};
      animation: ${SlideAfter} 0.3s forwards;
    }
  }
`;

export const BaseTextTabWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  height: 70px;
`;

export const BaseTextTabItem = styled.button`
  color: ${themes.colors.gray4};
  ${themes.typos.b2}

  &[data-active="true"] {
    color: ${themes.colors.gray1};
    ${themes.typos.h4}
  }
`;
