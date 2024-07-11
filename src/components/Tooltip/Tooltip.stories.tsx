import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "./Tooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "사용자에게 도움을 줄 수 있는 정보를 노출 시킵니다. hover, focus, click 등의 액션을 이용합니다.",
  },
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{ width: 400, height: 300, display: "flex", justifyContent: "center", alignItems: "center" }}>
    <Tooltip {...args} content="툴팁의 내용입니다.">
      <div style={{ width: 24, height: 24, backgroundColor: "red" }} />
    </Tooltip>
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
