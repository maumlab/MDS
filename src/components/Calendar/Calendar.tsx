import { useMemo, useState } from "react";
import { CalendarProps, CalendarSelectableType, CalendarVariant } from ".";
import { ChevronLeftIcon, ChevronRightIcon, IconSize } from "../../assets/icons";
import Text from "../Text";
import { ChevronButton, Container, Content, Contents, Day, Header } from "./Calendar.style";
import dayjs, { Dayjs } from "dayjs";

const Calendar = ({
  variant = CalendarVariant.MEDIUM,
  selectableType = CalendarSelectableType.FUTURE,
  // date,
  // onChangeDate,
  hasBorder = true,
}: CalendarProps) => {
  const DAY_OF_THE_WEEK = ["일", "월", "화", "수", "목", "금", "토"];

  const [month, setMonth] = useState<Dayjs>(dayjs());
  const formattedMonth = useMemo(() => month.format("YYYY년 MM월"), [month]);

  const isSmall = useMemo(() => variant === CalendarVariant.SMALL, [variant]);

  const today = useMemo(() => dayjs(), []);
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

  return (
    <Container data-variant={variant} data-border={hasBorder}>
      <Header>
        <ChevronButton onClick={onClickPrevMonth}>
          <ChevronLeftIcon size={IconSize.XXS} />
        </ChevronButton>
        <Text typo={isSmall ? "caption14Bold" : "h4"}>{formattedMonth}</Text>
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
              disabled={
                selectableType === CalendarSelectableType.FUTURE
                  ? today.isAfter(targetDate, "date")
                  : today.isBefore(targetDate, "date")
              }
              data-today={today.isSame(targetDate, "date")}>
              {date}
            </Content>
          );
        })}
      </Contents>
    </Container>
  );
};

export default Calendar;
