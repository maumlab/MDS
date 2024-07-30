import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlertModal from "./AlertModal";
import { Button } from "../../../components";
import { useModal } from "../hooks";
import { AlertModalProps } from "./AlertModal.type";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Utils/Modal/AlertModal",
  component: AlertModal,
  tags: ["autodocs"],
} as ComponentMeta<typeof AlertModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AlertModal> = (args) => {
  const { onOpen, onClose } = useModal();

  return (
    <Button
      onClick={() =>
        onOpen<AlertModalProps>({
          key: "alert",
          Component: AlertModal,
          props: {
            title: "알림",
            onClose: () => onClose("alert"),
            onConfirm: () => onClose("alert"),
          },
        })
      }
    >
      모달 오픈
    </Button>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
