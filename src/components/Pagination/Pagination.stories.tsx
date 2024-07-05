import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pagination from "./Pagination";
import usePagination from "./hooks/usePagination";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "페이지네이션입니다. 형태는 동일하며 페이지의 넓이에 따라 1부터 5까지 혹은 1부터 10까지로 조합됩니다.",
  },
} as ComponentMeta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => {
  const paginationProps = usePagination({
    variant: "LARGE",
    defaultTotalPages: 20,
  });
  return <Pagination {...args} {...paginationProps} />;
};

const MediumTemplate: ComponentStory<typeof Pagination> = (args) => {
  const paginationProps = usePagination({
    variant: "MEDIUM",
    defaultTotalPages: 20,
  });
  return <Pagination {...args} {...paginationProps} />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "metri",
};

export const Medium = MediumTemplate.bind({});
