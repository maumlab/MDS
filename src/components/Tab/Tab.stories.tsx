import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tab from "./Tab";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "페이지안에서 정보를 분류하거나, 2차 메뉴 혹은 세부 페이지들을 보여줄 때 사용하는 컴포넌트입니다.",
  },
} as ComponentMeta<typeof Tab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tab> = (args) => {
  const [selectedValue, setSelectedValue] = useState("Item1");
  const onChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Tab {...args} selectedValue={selectedValue} onChange={onChange}>
      <Tab.Item value="Item1">Item1</Tab.Item>
      <Tab.Item value="Item2">Item2</Tab.Item>
      <Tab.Item value="Item3">Item3</Tab.Item>
    </Tab>
  );
};

const LineTemplate: ComponentStory<typeof Tab> = (args) => {
  const [selectedValue, setSelectedValue] = useState("Item1");
  const onChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Tab {...args} selectedValue={selectedValue} onChange={onChange}>
      <Tab.Item value="Item1">Item1</Tab.Item>
      <Tab.Item value="Item2">Item2</Tab.Item>
      <Tab.Item value="Item3">Item3</Tab.Item>
    </Tab>
  );
};

const TextTemplate: ComponentStory<typeof Tab> = (args) => {
  const [selectedValue, setSelectedValue] = useState("Item1");
  const onChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Tab
      {...args}
      selectedValue={selectedValue}
      onChange={onChange}
      variant="text"
    >
      <Tab.Item value="Item1">Item1</Tab.Item>
      <Tab.Item value="Item2">Item2</Tab.Item>
      <Tab.Item value="Item3">Item3</Tab.Item>
    </Tab>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "line",
  size: "large",
};

export const Line = LineTemplate.bind({});

export const Text = TextTemplate.bind({});
