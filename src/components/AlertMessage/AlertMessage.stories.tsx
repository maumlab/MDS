import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlertMessage from "./AlertMessage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/AlertMessage",
  component: AlertMessage,
  tags: ["autodocs"],
} as ComponentMeta<typeof AlertMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AlertMessage> = (args) => {
  return <AlertMessage {...args} />;
};

const SuccessTemplate: ComponentStory<typeof AlertMessage> = (args) => {
  return <AlertMessage {...args} type="success" message="메시지입니다." />;
};

const ErrorTemplate: ComponentStory<typeof AlertMessage> = (args) => {
  return <AlertMessage {...args} type="error" message="메시지입니다." />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "success",
  message: "메시지입니다.",
};

export const Success = SuccessTemplate.bind({});

export const Error = ErrorTemplate.bind({});
