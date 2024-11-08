import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "./Avatar";
import { AvatarSize } from "./Avatar.type";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "아바타는 사용자의 프로필을 나타낼 때 사용되어집니다. 뱃지나 태그와 함께 사용될 수 있습니다.",
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const SizeTemplate: ComponentStory<typeof Avatar> = ({ variant }) => {
  return (
    <div>
      <Avatar variant={variant} size={AvatarSize.xl} />
      <Avatar variant={variant} size={AvatarSize.lg} />
      <Avatar variant={variant} size={AvatarSize.md} />
      <Avatar variant={variant} size={AvatarSize.sm} />
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "metri",
  size: AvatarSize.xl,
};

export const Metri = SizeTemplate.bind({});
Metri.args = { variant: "metri" };

export const Unauthenticated = SizeTemplate.bind({});
Unauthenticated.args = { variant: "unauthenticated" };

export const Employee = SizeTemplate.bind({});
Employee.args = { variant: "employee" };

export const Clinic = SizeTemplate.bind({});
Clinic.args = { variant: "clinic" };

export const Client = SizeTemplate.bind({});
Client.args = { variant: "client" };

export const Dashboard = SizeTemplate.bind({});
Dashboard.args = { variant: "dashboard" };
