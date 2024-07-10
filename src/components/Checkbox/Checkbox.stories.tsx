import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "selections/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "유저에게 선택지를 주는 컴포넌트 입니다.",
  },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <div>
      <Checkbox {...args} />
    </div>
  );
};

const BasicTemplate: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <div>
      <Checkbox {...args} />
      <Checkbox {...args}>Text</Checkbox>
      <Checkbox {...args} checked>
        Text
      </Checkbox>
      <Checkbox {...args} disabled>
        Text
      </Checkbox>
      <Checkbox {...args} checked disabled>
        Text
      </Checkbox>
    </div>
  );
};

const RegionTemplate: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <div>
      <Checkbox {...args} variant="region" />
      <Checkbox {...args} variant="region">
        Text
      </Checkbox>
      <Checkbox {...args} variant="region" checked>
        Text
      </Checkbox>
      <Checkbox {...args} variant="region" disabled>
        Text
      </Checkbox>
      <Checkbox {...args} variant="region" checked disabled>
        Text
      </Checkbox>
    </div>
  );
};

const DisabledTemplate: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <div>
      <Checkbox {...args} disabled>
        Text
      </Checkbox>
      <Checkbox {...args} disabled checked>
        Text
      </Checkbox>
      <Checkbox {...args} disabled variant="region">
        Text
      </Checkbox>
      <Checkbox {...args} disabled checked variant="region">
        Text
      </Checkbox>
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  disabled: false,
  checked: false,
  children: "Text",
};

export const Basic = BasicTemplate.bind({});

export const Region = RegionTemplate.bind({});

export const Disabled = DisabledTemplate.bind({});
