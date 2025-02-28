import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./Modal";
import { Button } from "../../components";
import { useModal } from "../Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "utils/Modal",
  component: Modal,
  tags: ["autodocs"],
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  const { onOpen } = useModal();

  const onClick = () => {
    onOpen({
      Component: Modal,
      props: {
        _key: "common",
        onClickOutside: async () => {
          console.log("first");
        },
        children: (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 16,
              padding: 48,
            }}
          >
            그냥 모달
          </div>
        ),
      },
    });
  };

  return <Button onClick={onClick}>모달 오픈</Button>;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
