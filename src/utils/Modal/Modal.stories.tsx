import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./Modal";
import { Button } from "../../components";
import { BasicModal, BasicModalProps, ModalProvider, useModal } from "../Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "utils/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  const { onOpen, onClose } = useModal();

  const onClick = () => {
    onOpen<BasicModalProps>({
      key: "basic",
      Component: BasicModal,
      props: {
        onClose: () => onClose("basic"),
        title: "베이직 모달",
        children: (
          <div>
            <Button
              onClick={() => {
                onOpen<BasicModalProps>({
                  key: "basic2",
                  Component: BasicModal,
                  props: {
                    title: "베베이직 모달",
                    onClose: () => onClose("basic2"),
                    children: <div>베베이직 모달</div>,
                  },
                });
              }}
            >
              베베이직 모달 오픈
            </Button>
          </div>
        ),
      },
    });
  };

  return <Button onClick={onClick}>베이직 오픈</Button>;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
