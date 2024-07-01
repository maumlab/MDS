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
    componentSubtitle:
      "아바타는 사용자의 프로필을 나타낼 때 사용되어집니다. 뱃지나 태그와 함께 사용될 수 있습니다.",
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const MetriTemplate: ComponentStory<typeof Avatar> = (args) => {
  return (
    <div>
      <Avatar variant="metri" size={AvatarSize.xl} />
      <Avatar variant="metri" size={AvatarSize.lg} />
      <Avatar variant="metri" size={AvatarSize.md} />
      <Avatar variant="metri" size={AvatarSize.sm} />
    </div>
  );
};

const TabletTemplate: ComponentStory<typeof Avatar> = (args) => {
  return (
    <div>
      <Avatar variant="tablet" size={AvatarSize.xl} />
      <Avatar variant="tablet" size={AvatarSize.lg} />
      <Avatar variant="tablet" size={AvatarSize.md} />
      <Avatar variant="tablet" size={AvatarSize.sm} />
    </div>
  );
};

const ClientTemplate: ComponentStory<typeof Avatar> = (args) => {
  return (
    <div>
      <Avatar variant="client" size={AvatarSize.xl} />
      <Avatar variant="client" size={AvatarSize.lg} />
      <Avatar variant="client" size={AvatarSize.md} />
      <Avatar variant="client" size={AvatarSize.sm} />
    </div>
  );
};

const DashboardTemplate: ComponentStory<typeof Avatar> = (args) => {
  return (
    <div>
      <Avatar variant="dashboard" size={AvatarSize.xl} />
      <Avatar variant="dashboard" size={AvatarSize.lg} />
      <Avatar variant="dashboard" size={AvatarSize.md} />
      <Avatar variant="dashboard" size={AvatarSize.sm} />
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "metri",
  size: AvatarSize.xl,
};

export const Metri = MetriTemplate.bind({});

export const Tablet = TabletTemplate.bind({});

export const Client = ClientTemplate.bind({});

export const Dashboard = DashboardTemplate.bind({});
