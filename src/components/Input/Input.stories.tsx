import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WithLabel from "../WithLabel";
import Input from "./Input";
import { useForm } from "react-hook-form/dist/index.ie11";
import LineInput from "./LineInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "문자열을 입력받는 컴포넌트입니다. 높이 값은 고정이며, 넓이는 여백에 따라 결정됩니다. 에러 메세지나 확인 메세지 간격은 동일합니다.",
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

const WithLabelTemplate: ComponentStory<typeof WithLabel> = (args) => {
  return (
    <WithLabel label="Label">
      <Input {...args} />
    </WithLabel>
  );
};

const MessageTemplate: ComponentStory<typeof Input> = (args) => {
  const { register, handleSubmit, setError, errors, clearErrors } = useForm<{
    input: string;
  }>();
  const { input: inputError } = errors;
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...args}
        ref={register}
        name="input"
        placeholder="숫자만 입력할 수 있습니다."
        inputMode="numeric"
        error={inputError?.message}
        onChange={(e) => {
          const numeric = /^\d+$/.test(e.target.value);
          const newValue = e.target.value.replace(/\D/g, "");
          if (!numeric) {
            setError("input", {
              message: "에러: 숫자만 입력할 수 있습니다.",
            });
          } else {
            clearErrors("input");
          }
          e.target.value = newValue;
        }}
      />
    </form>
  );
};

const LineInputTemplate: ComponentStory<typeof LineInput> = (args) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <LineInput {...args} />
      <LineInput {...args} placeholder="Placeholder" />
      <LineInput {...args} error="내용을 다시 확인해주세요." />
      <LineInput {...args} success="올바른 값입니다." />
      <LineInput {...args} disabled value="내용을 입력해주세요." />
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "metri",
  placeholder: "Placeholder",
};

export const WithLabelComponent = WithLabelTemplate.bind({});

export const Message = MessageTemplate.bind({});

export const Line = LineInputTemplate.bind({});
