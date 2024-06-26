import styled from "@emotion/styled";
import { themes } from "../../styles";

export const BaseSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 26px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const Checkbox = styled.input`
  &:not(:checked) + span {
    color: ${themes.colors.gray3};
  }

  &:checked + span {
    background-color: ${themes.colors.blue};
    color: ${themes.colors.blueDark1};

    &::before {
      -webkit-transform: translateX(34px);
      -ms-transform: translateX(34px);
      transform: translateX(34px);
    }
  }

  &:focus-visible + span {
    box-shadow: ${themes.colors.blue} 0px 1px 4px;
  }

  &:disabled + span {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (hover: hover) {
    &:not(:disabled):hover {
      cursor: pointer;
    }
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  font-size: 11px;
  font-weight: 500;
  line-height: normal;

  &::before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Label = styled.span``;
