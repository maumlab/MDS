import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Callout from "./Callout";
import * as Icon from "../../assets/icons/export.generated";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Callout",
  component: Callout,
  tags: ["autodocs"],
} as ComponentMeta<typeof Callout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Callout> = (args) => (
  <Callout {...args}>
    <Callout.Item>
      <Callout.Message>삭제되었습니다.</Callout.Message>
    </Callout.Item>
    <Callout.Item>
      <Callout.Message>삭제되었습니다.</Callout.Message>
    </Callout.Item>
  </Callout>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  center: false,
};
