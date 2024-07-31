import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./Modal";
import { Button } from "../../components";
import {
  AlertModal,
  AlertModalProps,
  BasicModal,
  BasicModalProps,
  ConfirmModal,
  ConfirmModalProps,
  useModal,
} from "../Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "utils/Modal",
  component: Modal,
  tags: ["autodocs"],
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  const { onOpen, onClose } = useModal();

  const onConfirmOpen = () => {
    onOpen<ConfirmModalProps>({
      Component: ConfirmModal,
      props: {
        _key: "confirm",
        title: "컨펌",
        confirmLabel: "엘럿 모달 오픈",
        preventConfirmClose: true,
        onConfirm: async () => {
          onOpen<AlertModalProps>({
            Component: AlertModal,
            props: {
              _key: "alert",
              title: "엘럿",
              preventClose: true,
              buttonLabel: "베이직 모달 오픈",
              onConfirm: async () => {
                onOpen({
                  Component: BasicModal,
                  props: { _key: "basic", title: "베이직" },
                });
              },
            },
          });
        },
      },
    });
  };

  return <Button onClick={onConfirmOpen}>컨펌 오픈</Button>;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
