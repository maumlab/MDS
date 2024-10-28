import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "./Tooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "사용자에게 도움을 줄 수 있는 정보를 노출 시킵니다. hover, focus 등의 액션을 이용합니다.",
  },
  args: {
    content: "툴팁의 내용입니다.",
  },
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => {
  const Trigger = ({ children }: { children?: React.ReactNode }) => (
    <div
      style={{
        padding: 6,
        borderRadius: 4,
        backgroundColor: "lightpink",
        border: "1px solid red",
        color: "white",
      }}
    >
      {children}
    </div>
  );

  return (
    <>
      <div
        style={{
          width: 600,
          height: 100,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Tooltip {...args} position="top" triPosition="left">
          <Trigger>Top-Left</Trigger>
        </Tooltip>
        <Tooltip {...args} position="top" triPosition="center">
          <Trigger>Top-Center</Trigger>
        </Tooltip>
        <Tooltip {...args} position="top" triPosition="right">
          <Trigger>Top-Right</Trigger>
        </Tooltip>
      </div>
      <div
        style={{
          width: 600,
          height: 100,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Tooltip {...args} position="bottom" triPosition="left">
          <Trigger>Bottom-Left</Trigger>
        </Tooltip>
        <Tooltip {...args} position="bottom" triPosition="center">
          <Trigger>Bottom-Center</Trigger>
        </Tooltip>
        <Tooltip {...args} position="bottom" triPosition="right">
          <Trigger>Bottom-Right</Trigger>
        </Tooltip>
      </div>
      <div
        style={{
          width: 600,
          height: 100,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Tooltip {...args} position="left">
          <Trigger>Left</Trigger>
        </Tooltip>
        <Tooltip {...args} position="right">
          <Trigger>Right</Trigger>
        </Tooltip>
      </div>
    </>
  );
};

const PortalTemplate = (args) => {
  const portalRef = useRef<HTMLElement>(null);

  const Trigger = ({ children }: { children?: React.ReactNode }) => (
    <div
      style={{
        padding: 6,
        borderRadius: 4,
        backgroundColor: "lightpink",
        border: "1px solid red",
        color: "white",
      }}
    >
      {children}
    </div>
  );

  return (
    <div style={{ height: "100dvh" }}>
      <section
        ref={portalRef}
        style={{
          position: "fixed",
          top: 95,
          left: 162,
          width: 500,
          height: 300,
          overflowY: "scroll",
          backgroundColor: "yellow",
        }}
      >
        <Tooltip
          {...args}
          position="top"
          triPosition="left"
          portalRef={portalRef}
        >
          <Trigger>Top-Left</Trigger>
        </Tooltip>
      </section>
      <section
        style={{ backgroundColor: "red", width: 1000, height: "200dvh" }}
      ></section>
    </div>
  );
};

export const Black = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Black.args = {
  color: "black",
};

export const White = Template.bind({});
White.args = {
  color: "white",
};

export const ContentWithElement = Template.bind({});
ContentWithElement.args = {
  content: (
    <div>
      <div
        style={{
          padding: 4,
          borderRadius: 4,
          backgroundColor: "lightseagreen",
          color: "white",
        }}
      >
        Badge
      </div>
      <div
        style={{
          padding: 4,
          borderRadius: 4,
          backgroundColor: "lightcoral",
          color: "white",
        }}
      >
        Badge
      </div>
    </div>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Portal = PortalTemplate.bind({});
