import { Dayjs } from "dayjs";

export enum CalendarVariant {
  "SMALL" = "SMALL",
  "MEDIUM" = "MEDIUM",
}
export enum CalendarSelectableType {
  "PAST" = "PAST",
  "FUTURE" = "FUTURE",
}
export const enum Day {
  "일",
  "월",
  "화",
  "수",
  "목",
  "금",
  "토",
}
export type DateRange = { from: Date | null; to?: Date | null };

export type CalendarProps = {
  variant?: CalendarVariant; // default is 'MEDIUM'
  selectableType?: CalendarSelectableType; // default is 'FUTURE'
  date: DateRange;
  onChangeDate: (date: Dayjs) => void;
  disabledDays?: Day[];
  hasBorder?: boolean; // default is true
  limit?: { start?: string; end?: string }; // YYYYMMDD 형식
};

export type UseCalendarProps = Pick<CalendarProps, "selectableType"> & {
  defaultDate?: DateRange;
  isMultiple?: boolean; // default is false
  onChangeDateCallback?: (range: DateRange) => void;
};
export type UseCalendarOutPut = Pick<CalendarProps, "selectableType" | "date" | "onChangeDate"> & {
  setDate: React.Dispatch<React.SetStateAction<DateRange>>;
};
