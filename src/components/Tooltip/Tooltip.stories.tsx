import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "./Tooltip";
import { OutlinedHelpIcon } from "../../assets/icons";
import styled from "@emotion/styled";
import Text from "../Text";

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

  return (
    <div style={{ height: "100dvh" }}>
      <section
        ref={portalRef}
        style={{
          position: "fixed",
          top: 95,
          left: 162,
          width: 300,
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
          content={
            <TooltipContents>
              <Text typo="caption14Medium">
                판독 전 척도에 있는 자가보고형 척도가 모두 검사 완료된 경우,
                환자명 우측에 노출됩니다.
              </Text>
            </TooltipContents>
          }
        >
          <OutlinedHelpIcon />
        </Tooltip>
      </section>
      <section
        style={{ backgroundColor: "red", width: 1000, height: "200dvh" }}
      ></section>
    </div>
  );
};

/* 툴팁 컨텐츠 */
const TooltipContents = styled.div`
  width: 250px;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 10px;
  justify-items: center;
`;

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
