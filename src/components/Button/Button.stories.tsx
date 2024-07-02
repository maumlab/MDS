import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "버튼은 눌러서 제어하는 기능을 담당하는 컴포넌트 입니다. 화면사이즈에 따라 높이 값이 달라지며 넓이는 여백에 따라 결정됩니다.",
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Button</Button>;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  size: "xl",
  loading: false,
  disabled: false,
};
