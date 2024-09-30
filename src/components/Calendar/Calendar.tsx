import { useEffect, useMemo, useState } from "react";
import { CalendarProps, CalendarSelectableType, CalendarVariant } from ".";
import { ChevronLeftIcon, ChevronRightIcon, IconSize } from "../../assets/icons";
import Text from "../Text";
import { ChevronButton, Container, Content, Contents, Day, Header } from "./Calendar.style";
import dayjs, { Dayjs } from "dayjs";
import { nationalHolidays } from "../../lib";

const Calendar = ({
  variant = CalendarVariant.MEDIUM,
  selectableType = CalendarSelectableType.FUTURE,
  date: selectedDate,
  onChangeDate,
  disabledDays,
  hasBorder = true,
  limit,
}: CalendarProps) => {
  const DAY_OF_THE_WEEK = ["일", "월", "화", "수", "목", "금", "토"];

  const [holidays, setHolidays] = useState<{ [year in number]: number[] }>();
  const [month, setMonth] = useState<Dayjs>(dayjs.tz());
  const formattedMonth = useMemo(() => month.format("YYYY년 MM월"), [month]);
  const currentHolidays = useMemo(() => holidays?.[month.get("year")] ?? [], [holidays, month]);

  const today = useMemo(() => dayjs.tz(), []);
  const dates = useMemo(() => {
    const firstDay = month.set("date", 1).day();
    const lastDate = month.daysInMonth();

    const emptyDates = Array.from({ length: firstDay }).fill(undefined);
    const monthDates = Array.from({ length: lastDate }, (_, i) => i + 1);

    return [...emptyDates, ...monthDates];
  }, [month]);

  const onClickPrevMonth = () => {
    setMonth((prev) => prev.add(-1, "month"));
  };
  const onClickNextMonth = () => {
    setMonth((prev) => prev.add(1, "month"));
  };

  const isDisabledDate = (targetDate: Dayjs) => {
    if (disabledDays?.includes(targetDate.day())) return true;

    if (!limit)
      return selectableType === CalendarSelectableType.FUTURE
        ? today.isAfter(targetDate, "date")
        : today.isBefore(targetDate, "date");

    let limit_Dayjs: { start?: Dayjs; end?: Dayjs } =
      selectableType === CalendarSelectableType.FUTURE ? { start: today } : { end: today };

    if (limit.start) limit_Dayjs.start = dayjs.tz(limit.start);
    if (limit.end) limit_Dayjs.end = dayjs.tz(limit.end);

    return (
      (limit_Dayjs.start && limit_Dayjs.start.isAfter(targetDate, "date")) ||
      (limit_Dayjs.end && limit_Dayjs.end.isBefore(targetDate, "date"))
    );
  };
  const isIncludedDate = (targetDate: Dayjs) => {
    if (!selectedDate.from || !selectedDate.to) return false;

    return (
      targetDate.isAfter(dayjs.tz(selectedDate.from), "date") && targetDate.isBefore(dayjs.tz(selectedDate.to), "date")
    );
  };
  const isSelectedDate = (targetDate: Dayjs) => {
    if (!selectedDate.from && !selectedDate.to) return false;

    return (
      (selectedDate.from && targetDate.isSame(dayjs.tz(selectedDate.from), "date")) ||
      (selectedDate.to && targetDate.isSame(dayjs.tz(selectedDate.to), "date"))
    );
  };

  useEffect(() => {
    const sessionHolidays = sessionStorage.getItem("holidays");
    setHolidays(sessionHolidays ? JSON.parse(sessionHolidays) : {});
  }, []);

  useEffect(() => {
    if (!holidays) return;

    const year = month.get("year");
    if (Object.keys(holidays).includes(year.toString())) return;

    (async () => {
      const monthHolidays = await nationalHolidays({ year });
      const newHolidays = { ...holidays, [year]: monthHolidays };
      setHolidays(newHolidays);
      sessionStorage.setItem("holidays", JSON.stringify(newHolidays));
    })();
  }, [!holidays, month]);

  return (
    <Container data-variant={variant} data-border={hasBorder}>
      <Header>
        <ChevronButton onClick={onClickPrevMonth}>
          <ChevronLeftIcon size={IconSize.XXS} />
        </ChevronButton>
        <Text typo={variant === CalendarVariant.SMALL ? "caption14Bold" : "h4"}>{formattedMonth}</Text>
        <ChevronButton onClick={onClickNextMonth}>
          <ChevronRightIcon size={IconSize.XXS} />
        </ChevronButton>
      </Header>
      <Contents>
        {DAY_OF_THE_WEEK.map((day) => (
          <Day key={day}>{day}</Day>
        ))}
        {dates.map((date, i) => {
          if (typeof date !== "number") return <div key={`empty_${i}`} />;

          const targetDate = month.set("date", date);
          return (
            <Content
              key={`date_${date}`}
              onClick={() => onChangeDate(targetDate)}
              disabled={isDisabledDate(targetDate)}
              data-holiday={i % 7 === 0 || currentHolidays.includes(+targetDate.format("YYYYMMDD"))}
              data-today={today.isSame(targetDate, "date")}
              data-included={isIncludedDate(targetDate)}
              data-selected={isSelectedDate(targetDate)}>
              {date}
            </Content>
          );
        })}
      </Contents>
    </Container>
  );
};

export default Calendar;
