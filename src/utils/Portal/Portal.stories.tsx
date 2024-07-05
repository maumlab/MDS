import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Portal from "./Portal";
import { useToggle } from "../../hooks";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "utils/Portal",
  component: Portal,
  tags: ["autodocs"],
} as ComponentMeta<typeof Portal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Portal> = (args) => {
  const targetRef = useRef(null);
  const { isOpen, onToggle } = useToggle(false);
  return (
    <div>
      <div ref={targetRef} style={{ border: `1px solid red`, padding: 10 }}>
        여기 안에 포탈이 생성됩니다.
      </div>
      <button onClick={onToggle}>버튼을 클릭하세요.</button>
      {isOpen && (
        <Portal {...args} container={targetRef.current}>
          <div>쨘~</div>
        </Portal>
      )}
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
