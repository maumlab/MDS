import { useState } from "react";
import { CalendarSelectableType, DateRange, UseCalendarOutPut, UseCalendarProps } from "../Calendar.type";

const useCalendar = ({
  selectableType = CalendarSelectableType.FUTURE,
  isMultiple = false,
  onChangeDateFallback,
}: UseCalendarProps): UseCalendarOutPut => {
  const [date, setDate] = useState<DateRange>(isMultiple ? { from: null, to: null } : { from: null });

  const onChangeDate = (range: DateRange) => {
    setDate(range);
    onChangeDateFallback?.(range);
  };

  return { selectableType, date, onChangeDate };
};

export default useCalendar;
