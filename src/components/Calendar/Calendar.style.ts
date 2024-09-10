import styled from "@emotion/styled";
import { themes } from "../../styles";
import { CalendarVariant } from "./Calendar.type";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: fit-content;
  height: fit-content;
  background-color: ${themes.colors.white};

  &[data-border="true"] {
    padding: 20px 16px;
    border-radius: 12px;
    border: 1px solid ${themes.colors.gray6};
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ChevronButton = styled.button`
  width: 16px;
  height: 16px;
`;

export const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  grid-template-rows: repeat(7, 40px);

  & > * {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    ${themes.typos.caption14Medium}
  }

  [data-variant=${CalendarVariant.MEDIUM}] & {
    gap: 8px;
    & > * {
      ${themes.typos.caption18Medium}
    }
  }
`;

export const Day = styled.div``;
export const Content = styled.button``;
