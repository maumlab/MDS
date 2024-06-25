import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "./Badge";
import StatusBadge from "./StatusBadge";
import RoleBadge from "./RoleBadge";
import LevelBadge from "./LevelBadge";
import SearchBadge from "./SearchBadge";

import { styled } from "../../styles";
import { BadgeRole, BadgeSearch, BadgeStatus } from "./Badge.type";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "노티를 위한 작은 숫자나 알파벳을 보여주기 위한 용도 / 역할과 상태를 보여주고 구분을 위한 용도로 사용됩니다.",
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => {
  return <Badge {...args}>badge</Badge>;
};

const BasicTemplate: ComponentStory<typeof Badge> = (args) => {
  return (
    <Container>
      <Badge>1</Badge>
      <Badge>10</Badge>
      <Badge>N</Badge>
    </Container>
  );
};

const StatusTemplate: ComponentStory<typeof StatusBadge> = (args) => {
  return (
    <Container>
      <StatusBadge status={BadgeStatus.Sent} />
      <StatusBadge status={BadgeStatus.Progress} />
      <StatusBadge status={BadgeStatus.Complete} />
      <StatusBadge status={BadgeStatus.Unfinished} />
    </Container>
  );
};

const RoleTemplate: ComponentStory<typeof RoleBadge> = (args) => {
  return (
    <Container>
      <RoleBadge role={BadgeRole.Director} />
      <RoleBadge role={BadgeRole.Doctor} />
      <RoleBadge role={BadgeRole.Nurse} />
    </Container>
  );
};

const LevelTemplate: ComponentStory<typeof LevelBadge> = (args) => {
  return (
    <Container>
      <LevelBadge level={1} />
      <LevelBadge level={2} />
      <LevelBadge level={3} />
      <LevelBadge level={4} />
      <LevelBadge level={5} />
      <LevelBadge level={6} />
    </Container>
  );
};

const SearchTemplate: ComponentStory<typeof SearchBadge> = (args) => {
  return (
    <Container>
      <SearchBadge search={BadgeSearch.Group} />
      <SearchBadge search={BadgeSearch.Level} />
      <SearchBadge search={BadgeSearch.Abbreviations} />
      <SearchBadge search={BadgeSearch.Korean} />
    </Container>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Basic = BasicTemplate.bind({});

export const Status = StatusTemplate.bind({});

export const Role = RoleTemplate.bind({});

export const Level = LevelTemplate.bind({});

export const Search = SearchTemplate.bind({});

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
