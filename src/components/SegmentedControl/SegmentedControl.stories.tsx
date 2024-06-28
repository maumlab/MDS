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

const SoftTemplate: ComponentStory<typeof SegmentedControl> = (args) => {
  const [selectedValue1, setSelectedValue1] = useState("Item1");
  const onChange1 = (value: string) => {
    setSelectedValue1(value);
  };

  const [selectedValue2, setSelectedValue2] = useState("Item1");
  const onChange2 = (value: string) => {
    setSelectedValue2(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <SegmentedControl
        {...args}
        selectedValue={selectedValue1}
        onChange={onChange1}
      >
        <SegmentedControl.Item value="Item1">Item1</SegmentedControl.Item>
        <SegmentedControl.Item value="Item2">Item2</SegmentedControl.Item>
        <SegmentedControl.Item value="Item3">Item3</SegmentedControl.Item>
      </SegmentedControl>
      <SegmentedControl
        {...args}
        selectedValue={selectedValue2}
        onChange={onChange2}
      >
        <SegmentedControl.Item value="Item1">Item1</SegmentedControl.Item>
        <SegmentedControl.Item value="Item2">Item2</SegmentedControl.Item>
        <SegmentedControl.Item value="Item3">Item3</SegmentedControl.Item>
        <SegmentedControl.Item value="Item4">Item4</SegmentedControl.Item>
        <SegmentedControl.Item value="Item5">Item5</SegmentedControl.Item>
      </SegmentedControl>
    </div>
  );
};

const OutlinedTemplate: ComponentStory<typeof SegmentedControl> = (args) => {
  const [selectedValue1, setSelectedValue1] = useState("Item1");
  const onChange1 = (value: string) => {
    setSelectedValue1(value);
  };

  const [selectedValue2, setSelectedValue2] = useState("Item1");
  const onChange2 = (value: string) => {
    setSelectedValue2(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <SegmentedControl
        {...args}
        variant="contained"
        selectedValue={selectedValue1}
        onChange={onChange1}
      >
        <SegmentedControl.Item value="Item1">Item1</SegmentedControl.Item>
        <SegmentedControl.Item value="Item2">Item2</SegmentedControl.Item>
        <SegmentedControl.Item value="Item3">Item3</SegmentedControl.Item>
      </SegmentedControl>
      <SegmentedControl
        {...args}
        variant="contained"
        selectedValue={selectedValue2}
        onChange={onChange2}
      >
        <SegmentedControl.Item value="Item1">Item1</SegmentedControl.Item>
        <SegmentedControl.Item value="Item2">Item2</SegmentedControl.Item>
        <SegmentedControl.Item value="Item3">Item3</SegmentedControl.Item>
        <SegmentedControl.Item value="Item4">Item4</SegmentedControl.Item>
        <SegmentedControl.Item value="Item5">Item5</SegmentedControl.Item>
      </SegmentedControl>
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Soft = SoftTemplate.bind({});
export const Outlined = OutlinedTemplate.bind({});
