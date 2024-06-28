import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Radio from "./Radio";
import { useForm } from "react-hook-form/dist/index.ie11";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "selections/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "유저에게 선택지를 주는 컴포넌트 입니다.",
  },
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => {
  const { register } = useForm<{ radio: string }>();

  return (
    <div>
      <Radio {...args} ref={register} name="radio" value="1" />
      <Radio {...args} ref={register} name="radio" value="2" disabled />
    </div>
  );
};

const WithLabelTemplate: ComponentStory<typeof Radio> = (args) => {
  const { register, watch } = useForm<{
    radio_label: string;
  }>();
  const { radio_label } = watch();

  return (
    <div>
      <Radio
        {...args}
        ref={register}
        name="radio_label"
        value="apple"
        label="Apple"
      />
      <Radio
        {...args}
        ref={register}
        name="radio_label"
        value="banana"
        label="Banana"
      />
      <Radio
        {...args}
        ref={register}
        name="radio_label"
        value="melon"
        label="Melon"
      />
      <div>과일: {radio_label}</div>
    </div>
  );
};

const DisabledTemplate: ComponentStory<typeof Radio> = (args) => {
  return (
    <div>
      <Radio {...args} name="radio_disabled" disabled />
      <Radio {...args} name="radio_disabled" checked disabled />
      <Radio {...args} name="radio_disabled" label="Apple" disabled />
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: undefined,
};

export const WithLabel = WithLabelTemplate.bind({});

export const Disabled = DisabledTemplate.bind({});
