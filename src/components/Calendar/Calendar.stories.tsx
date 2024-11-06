import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import useCalendar from "./hooks/useCalendar";
import Calendar, { CalendarProps, CalendarSelectableType, CalendarVariant } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "달력 컴포넌트입니다.",
  },
} as ComponentMeta<typeof Calendar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Calendar> = ({
  isMultiple,
  ...args
}: CalendarProps & {
  isMultiple?: boolean;
}) => {
  const pastProps = useCalendar({ selectableType: CalendarSelectableType.PAST, isMultiple });
  const futureProps = useCalendar({ selectableType: CalendarSelectableType.FUTURE, isMultiple });

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Calendar {...args} {...pastProps} variant={CalendarVariant.SMALL} />
      <Calendar {...args} {...futureProps} variant={CalendarVariant.MEDIUM} />
    </div>
  );
};

export const Primary = Template.bind({});

export const Multiple = Template.bind({});
Multiple.args = { isMultiple: true };

export const NoBorder = Template.bind({});
NoBorder.args = { hasBorder: false };
