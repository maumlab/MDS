import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SegmentedControl from "./SegmentedControl";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "페이지안에서 정보를 분류하거나, 2차 메뉴 혹은 세부 페이지들을 보여줄 때 사용하는 컴포넌트입니다.",
  },
} as ComponentMeta<typeof SegmentedControl>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SegmentedControl> = (args) => {
  const [selectedValue, setSelectedValue] = useState("Item1");
  const onChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <SegmentedControl
        {...args}
        selectedValue={selectedValue}
        onChange={onChange}
      >
        <SegmentedControl.Item value="Item1">Item1</SegmentedControl.Item>
        <SegmentedControl.Item value="Item2">Item2</SegmentedControl.Item>
        <SegmentedControl.Item value="Item3">Item3</SegmentedControl.Item>
      </SegmentedControl>
    </div>
  );
};

const BasicTemplate: ComponentStory<typeof SegmentedControl> = (args) => {
  const [selectedValue, setSelectedValue] = useState("Item1");
  const onChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <SegmentedControl selectedValue={selectedValue} onChange={onChange}>
      <SegmentedControl.Item value="Item1">Item1</SegmentedControl.Item>
      <SegmentedControl.Item value="Item2">Item2</SegmentedControl.Item>
      <SegmentedControl.Item value="Item3">Item3</SegmentedControl.Item>
    </SegmentedControl>
  );
};

const OutlinedTemplate: ComponentStory<typeof SegmentedControl> = (args) => {
  const [selectedValue, setSelectedValue] = useState("Item1");
  const onChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <SegmentedControl
      selectedValue={selectedValue}
      onChange={onChange}
      variant="outlined"
    >
      <SegmentedControl.Item value="Item1">Item1</SegmentedControl.Item>
      <SegmentedControl.Item value="Item2">Item2</SegmentedControl.Item>
      <SegmentedControl.Item value="Item3">Item3</SegmentedControl.Item>
    </SegmentedControl>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "basic",
};

export const Basic = BasicTemplate.bind({});

export const Outlined = OutlinedTemplate.bind({});
