import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WithLabel from "./WithLabel";
import Input from "../Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/WithLabel",
  component: WithLabel,
  tags: ["autodocs"],
} as ComponentMeta<typeof WithLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WithLabel> = (args) => {
  return (
    <div>
      <WithLabel {...args} label="제목">
        <Input placeholder="내용을 입력해 주세요." />
      </WithLabel>
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  required: false,
};
