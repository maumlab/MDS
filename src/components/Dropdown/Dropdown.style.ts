import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { DropdownOptionVariantType } from "./Dropdown.type";
import { themes } from "../../styles";
import { hexToRgba } from "../../lib";

export const BaseBar = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 15px;
  border: 1px solid ${themes.colors.gray4};
  ${themes.radius.md};
  min-height: 50px;

  background-color: ${themes.colors.white};
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: ${themes.colors.gray1};
    &[aria-placeholder] {
      color: ${themes.colors.gray4};
    }
  }

  .arrowIcon {
    pointer-events: none;
    transform: rotate(0);
    transition: transform 0.3s;
    will-change: transform;
  }

  &[data-expanded="true"] {
    border-color: ${themes.colors.blue};
    .arrowIcon {
      transform: rotate(180deg);
    }
  }
  &[aria-disabled="true"] {
    background-color: ${themes.colors.gray6};
    cursor: not-allowed;

    & > svg {
      opacity: 0.3;
    }
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 1px solid ${themes.colors.blue};
  }
`;

export const BaseOptionList = styled.ul`
  position: absolute;
  opacity: 0;
  list-style-type: none;
  margin: 0;

  overflow-y: auto;

  background-color: ${themes.colors.white};
  ${themes.radius.md};
  border: 1px solid ${themes.colors.gray5};
`;

export const BaseOption = styled.li<{
  $optionVariant: DropdownOptionVariantType;
}>`
  display: flex;
  align-items: center;
  padding: 0px 15px;
  cursor: pointer;
  color: ${themes.colors.gray1};
  background-color: ${themes.colors.white};
  min-height: 50px;
  ${themes.typos.b4};
  line-height: 24px;
  padding-top: 13px;
  padding-bottom: 13px;

  * > {
    width: 100%;
  }

  ${({ $optionVariant }) => {
    switch ($optionVariant) {
      case "ellipsis":
        return css`
          display: list-item;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `;
      case "multiple":
        return css`
          display: list-item;
          height: auto;
          word-break: break-all;
        `;
      case "default":
        return;
    }
  }}

  &:not(:last-of-type) {
    border-bottom: 1px solid ${themes.colors.gray5};
  }

  &:hover:not(&[aria-disabled="true"]) {
    background-color: ${themes.colors.blueLight3};
    color: ${themes.colors.blueDark1};
  }

  &[aria-selected="true"] {
    color: ${themes.colors.blueDark1};
    background-color: ${themes.colors.blueLight3};
  }

  &[aria-disabled="true"] {
    cursor: not-allowed;
    background-color: ${themes.colors.gray6};
    color: ${hexToRgba(themes.colors.gray1, 30)};
  }
`;
