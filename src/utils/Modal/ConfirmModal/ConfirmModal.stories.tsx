import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConfirmModal from "./ConfirmModal";
import { Button } from "../../../components";
import { useModal } from "../hooks";
import { ConfirmModalProps } from "./ConfirmModal.type";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Utils/Modal/ConfirmModal",
  component: ConfirmModal,
  tags: ["autodocs"],
} as ComponentMeta<typeof ConfirmModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConfirmModal> = (args) => {
  const { onOpen } = useModal();

  return (
    <Button
      onClick={() =>
        onOpen<ConfirmModalProps>({
          Component: ConfirmModal,
          props: {
            ...args,
            _key: "confirm",
            title: "알림",
            children: (
              <div>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
                <Button>ㅁ</Button>
              </div>
            ),
          },
        })
      }
    >
      컨펌 모달 오픈
    </Button>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
