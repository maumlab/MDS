import { useState } from "react";
import { CalendarSelectableType, DateRange, UseCalendarOutPut, UseCalendarProps } from "../Calendar.type";

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dayjs, { Dayjs } from "dayjs";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

const useCalendar = ({
  selectableType = CalendarSelectableType.FUTURE,
  isMultiple = false,
  onChangeDateCallback,
}: UseCalendarProps): UseCalendarOutPut => {
  const [date, setDate] = useState<DateRange>(isMultiple ? { from: null, to: null } : { from: null });

  const getRange = (targetDate: Dayjs): DateRange => {
    const formattedDate = targetDate.toDate();

    if (!isMultiple) return { from: formattedDate };

    // from이 선택되지 않았거나 / 둘 다 선택된 경우
    if (!date.from || (date.from && date.to)) return { from: formattedDate, to: null };

    // targetDate가 from 이전인 경우
    if (targetDate.isBefore(dayjs.tz(date.from).add(-1, "D"))) return { from: formattedDate, to: null };

    // to 선택하는 경우
    return { from: date.from, to: formattedDate };
  };

  const onChangeDate = (targetDate: Dayjs) => {
    const range = getRange(targetDate);
    setDate(range);
    onChangeDateCallback?.(range);
  };

  return { selectableType, date, onChangeDate };
};

export default useCalendar;
