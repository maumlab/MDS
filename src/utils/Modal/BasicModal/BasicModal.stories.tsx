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
  const { onOpen, onClose } = useModal();
  return (
    <Button
      onClick={() =>
        onOpen<BasicModalProps>({
          key: "basic",
          Component: BasicModal,
          props: { title: "알림", onClose: () => onClose("basic") },
        })
      }
    >
      베이직 모달 오픈
    </Button>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
