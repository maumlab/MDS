import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BasicModal from "./BasicModal";
import { Button } from "../../../components";
import { useModal } from "../hooks";
import { BasicModalProps } from "./BasicModal.type";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Utils/Modal/BasicModal",
  component: BasicModal,
  tags: ["autodocs"],
} as ComponentMeta<typeof BasicModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicModal> = (args) => {
  const { onOpen } = useModal();

  // FIXME children에 드롭다운을 주면 드롭다운 onChange가 작동하지 않음
  return (
    <Button
      onClick={() =>
        onOpen<BasicModalProps>({
          Component: BasicModal,
          props: {
            ...args,
            _key: "basic",
            children: <div>Content</div>,
          },
        })
      }
    >
      베이직 모달 오픈
    </Button>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "베이직",
};
