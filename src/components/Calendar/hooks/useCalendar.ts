import { useState } from "react";
import { CalendarSelectableType, DateRange, UseCalendarOutPut, UseCalendarProps } from "../Calendar.type";

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dayjs, { Dayjs } from "dayjs";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul");

const useCalendar = ({
  defaultDate,
  selectableType = CalendarSelectableType.FUTURE,
  isMultiple = false,
  onChangeDateCallback,
}: UseCalendarProps): UseCalendarOutPut => {
  const [date, setDate] = useState<DateRange>(defaultDate || (isMultiple ? { from: null, to: null } : { from: null }));

  const getRange = (targetDate: Dayjs): DateRange => {
    const formattedDate = targetDate.toDate();

    if (!isMultiple) return { from: formattedDate };

    // from, to가 둘 다 선택된 경우
    if (date.from && date.to) return { from: formattedDate, to: null };

    // targetDate가 선택할 수 있는 범위를 벗어난 경우 (from 이전이거나 to 이후인 경우)
    if (
      (date.from && targetDate.isBefore(dayjs.tz(date.from).add(-1, "D"))) ||
      (date.to && targetDate.isAfter(dayjs.tz(date.to).add(1, "D")))
    )
      return { from: formattedDate, to: null };

    // from이 선택되지 않은 경우
    if (!date.from) return { from: formattedDate, to: date.to };

    // to 선택하는 경우
    return { from: date.from, to: formattedDate };
  };

  const onChangeDate = (targetDate: Dayjs) => {
    const range = getRange(targetDate);
    setDate(range);
    onChangeDateCallback?.(range);
  };

  return { selectableType, date, setDate, onChangeDate };
};

export default useCalendar;
