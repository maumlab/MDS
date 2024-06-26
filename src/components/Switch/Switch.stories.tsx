import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Switch from "./Switch";
import { useForm } from "react-hook-form/dist/index.ie11";
import { styled } from "../../styles";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "유저에게 선택지를 주는 컴포넌트 입니다.",
  },
} as ComponentMeta<typeof Switch>;

interface IForm {
  first: boolean;
  second: boolean;
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => {
  const { register, watch } = useForm<IForm>({
    defaultValues: {
      second: true,
    },
  });
  const { second } = watch();

  return (
    <Container>
      <Switch {...args} ref={register} name="first" />
      <Switch
        {...args}
        label={second ? "ON" : "OFF"}
        ref={register}
        name="second"
      />
      <Switch {...args} disabled />
      <Switch {...args} checked disabled />
    </Container>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;
