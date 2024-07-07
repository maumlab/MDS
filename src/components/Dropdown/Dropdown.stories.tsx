import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from "./Dropdown";
import { useForm } from "react-hook-form/dist/index.ie11";
import { themes } from "../../styles";
import { Checkbox, Input } from "../../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "사용자에게 선택 옵션만 제공하는 컴포넌트입니다. 선택 시 사용자가 하나의 옵션 또는 여러 옵션을 선택할 수 있는 목록을 제공합니다.",
  },
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [selectedValue, setSelectedValue] = useState<{
    label: string;
    value: string;
  }>();
  const options = ["A", "B", "C", "D"].map((option) => ({
    label: option + "label",
    value: option + "value",
  }));

  return (
    <Dropdown
      {...args}
      onChange={(e, newValue) => {
        const findOption = options.find((option) => option.label === newValue);
        if (findOption) {
          setSelectedValue(findOption);
        }
      }}
    >
      <Dropdown.Trigger>
        <Dropdown.Bar
          placeholder="내용을 선택해 주세요."
          value={selectedValue?.label}
          aria-label="Dropdown"
        />
      </Dropdown.Trigger>
      <Dropdown.OptionList>
        {options.map((option) => (
          <Dropdown.Option
            value={option.label}
            selected={option.value === selectedValue?.value}
            disabled={option.value === options[2].value}
            key={option.value}
          />
        ))}
      </Dropdown.OptionList>
    </Dropdown>
  );
};

const DisabledTemplate: ComponentStory<typeof Dropdown> = (args) => {
  const [selectedValue, setSelectedValue] = useState<undefined | string>();
  const options = ["A", "B", "C", "D"];

  return (
    <Dropdown
      {...args}
      disabled={true}
      onChange={(e, newValue) => setSelectedValue(newValue)}
    >
      <Dropdown.Trigger>
        <Dropdown.Bar
          placeholder="내용을 선택해 주세요."
          value={selectedValue}
          aria-label="Dropdown"
        />
      </Dropdown.Trigger>
      <Dropdown.OptionList>
        {options.map((value) => (
          <Dropdown.Option
            value={value}
            selected={value === selectedValue}
            disabled={value === options[2]}
            key={value}
          />
        ))}
      </Dropdown.OptionList>
    </Dropdown>
  );
};

const MultipleTemplate: ComponentStory<typeof Dropdown> = (args) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const options = ["A", "B", "C", "D"];

  return (
    <Dropdown
      {...args}
      multiple={true}
      onChange={(e, newValue) => {
        if (selectedValues.includes(newValue)) {
          setSelectedValues(selectedValues.filter((v) => v !== newValue));
        } else {
          setSelectedValues([...selectedValues, newValue]);
        }
      }}
    >
      <Dropdown.Trigger>
        <Dropdown.Bar
          placeholder="내용을 선택해 주세요."
          value={selectedValues.join(", ") || undefined}
          aria-label="Dropdown"
        />
      </Dropdown.Trigger>
      <Dropdown.OptionList>
        {options.map((value) => (
          <Dropdown.Option
            value={value}
            label={
              <Checkbox
                name="checkbox"
                value={value}
                checked={selectedValues.some((cur) => cur === value)}
                disabled={value === options[2]}
              >
                {value}
              </Checkbox>
            }
            selected={selectedValues.includes(value)}
            disabled={value === options[2]}
            key={value}
          />
        ))}
      </Dropdown.OptionList>
    </Dropdown>
  );
};

const CustomTriggerTemplate: ComponentStory<typeof Dropdown> = (args) => {
  const { register, setValue, watch } = useForm<{
    input: string;
  }>();
  const { input } = watch();
  const options = ["A", "AS", "B", "C"];

  return (
    <Dropdown
      {...args}
      onChange={(e, newValue) => {
        setValue("input", newValue);
      }}
    >
      <Dropdown.Trigger>
        <div style={{ width: 200 }}>
          <Input ref={register} name="input" />
        </div>
      </Dropdown.Trigger>
      <Dropdown.OptionList>
        {options.map((value) => (
          <Dropdown.Option
            value={value}
            label={
              <span>
                <span style={{ color: themes.colors.blue }}>
                  {value.charAt(0)}
                </span>
                <span style={{ color: themes.colors.gray1 }}>
                  {value.slice(1)}
                </span>
              </span>
            }
            selected={value === input}
            disabled={value === options[2]}
            key={value}
          />
        ))}
      </Dropdown.OptionList>
    </Dropdown>
  );
};

const EllipsisTemplate: ComponentStory<typeof Dropdown> = (args) => {
  const [selectedValue, setSelectedValue] = useState<undefined | string>();
  const options = ["Aasdasdasdasdasdasdasdasdasdasdsadasdas", "B", "C", "D"];

  return (
    <div style={{ width: 300 }}>
      <Dropdown
        {...args}
        onChange={(e, newValue) => setSelectedValue(newValue)}
        optionVariant="ellipsis"
      >
        <Dropdown.Trigger>
          <Dropdown.Bar
            placeholder="내용을 선택해 주세요."
            value={selectedValue}
            aria-label="Dropdown"
          />
        </Dropdown.Trigger>
        <Dropdown.OptionList>
          {options.map((value) => (
            <Dropdown.Option
              value={value}
              selected={value === selectedValue}
              disabled={value === options[2]}
              key={value}
            />
          ))}
        </Dropdown.OptionList>
      </Dropdown>
    </div>
  );
};

const MultipleLineTemplate: ComponentStory<typeof Dropdown> = (args) => {
  const [selectedValue, setSelectedValue] = useState<undefined | string>();
  const options = [
    "asdasdasdasdasdasdasdasdasdasdasdasdasdasda",
    "한글입니다한글입니다한글입니다한글입니다한글입니다한글입니다한글입니다한글입니다한글입니다한글입니다",
    "한글입니다한글입니다한글입니다 한글입니다한글입니다한글입니다한글입니다 한글입니다한글입니다한글입니다한글입니다",
    "asdasdasdasdas dasdasdasdasd asdasdasdasdasda",
  ];

  return (
    <div style={{ width: 300 }}>
      <Dropdown
        {...args}
        onChange={(e, newValue) => setSelectedValue(newValue)}
        optionVariant="multiple"
      >
        <Dropdown.Trigger>
          <Dropdown.Bar
            placeholder="내용을 선택해 주세요."
            value={selectedValue}
            aria-label="Dropdown"
          />
        </Dropdown.Trigger>
        <Dropdown.OptionList>
          {options.map((value) => (
            <Dropdown.Option
              value={value}
              selected={value === selectedValue}
              disabled={value === options[2]}
              key={value}
            />
          ))}
        </Dropdown.OptionList>
      </Dropdown>
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Disabled = DisabledTemplate.bind({});

export const Multiple = MultipleTemplate.bind({});

export const CustomTrigger = CustomTriggerTemplate.bind({});

export const Ellipsis = EllipsisTemplate.bind({});

export const MultipleLine = MultipleLineTemplate.bind({});
