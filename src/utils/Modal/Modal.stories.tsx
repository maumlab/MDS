import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./Modal";
import { Button } from "../../components";
import {
  AlertModal,
  AlertModalProps,
  BasicModal,
  BasicModalProps,
  useModal,
} from "../Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "utils/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  const { onOpen, onClose } = useModal();

  const onClick = () => {
    onOpen<AlertModalProps>({
      key: "alert",
      Component: AlertModal,
      props: {
        onClose: () => onClose("alert"),
        title: "엘럿 모달\n두 줄",
        buttonLabel: "베이직 모달 오픈",
        onConfirm: () => {
          onOpen<BasicModalProps>({
            key: "basic",
            Component: BasicModal,
            props: {
              title: "베이직 모달",
              onClose: () => onClose("basic"),
            },
          });
        },
        children: <div>엘럿 모달입니다</div>,
      },
    });
  };

  return <Button onClick={onClick}>베이직 오픈</Button>;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
