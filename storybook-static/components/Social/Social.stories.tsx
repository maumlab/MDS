import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Social from "./Social";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Social",
  component: Social,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "소셜 로그인 버튼 (애플, 카카오, 네이버, 메트리)",
  },
} as ComponentMeta<typeof Social>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Social> = (args) => <Social {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "KAKAO",
  type: "primary",
};
