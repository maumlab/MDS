import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "selections/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "유저에게 선택지를 주는 컴포넌트 입니다.",
  },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <div>
      <Checkbox {...args} />
      <Checkbox {...args} label="Text" />
      <Checkbox {...args} label="Text" disabled />
      <Checkbox {...args} label="Text" disabled checked />
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
