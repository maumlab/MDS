import styled from "@emotion/styled";
import { themes } from "../../styles";

export const BaseContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;

  &[data-variant="padded"] {
    padding: 2px 1px;
    background-color: ${themes.colors.gray6};
  }

  &[data-variant="contained"] {
    background-color: ${themes.colors.white};
  }
`;

export const ItemContainer = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  transition: background-color 0.2s;

  &[data-variant="contained"] {
    border: 1px solid ${themes.colors.gray5};

    &:first-of-type {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-of-type {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    &:not(:first-of-type) {
      margin-left: -1px;
    }
  }

  /* active */
  &[data-active="true"] {
    /* variant */
    &[data-variant="padded"] {
      background-color: ${themes.colors.white};
      border: 1px solid ${themes.colors.blue};
      ${themes.radius.md};
    }

    &[data-variant="contained"] {
      border-color: ${themes.colors.blue};
      background-color: ${themes.colors.blueLight3};

      & + button {
        margin-left: 0;
        border-left: 0;
      }
    }
  }
`;
