import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Textarea from "./Textarea";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "문자역을 입력받는 컴포넌트로 디자인 상태는 동일하되 사용되는 곳에 따라 넓이와 높이는 가변적입니다.",
  },
} as ComponentMeta<typeof Textarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textarea> = (args) => {
  return <Textarea {...args} />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  disabled: false,
  placeholder: "텍스트를 입력해주세요.",
};
