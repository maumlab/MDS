import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";
import { FONT_SIZES, styled, themes, TypoType } from "../../styles";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: `텍스트를 표시할 때 사용합니다. div, span, p, label, h1 ~ h6 태그를 사용할 수 있습니다.`,
  },
} as ComponentMeta<typeof Text>;

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const getSizeWeight = (typo: TypoType) => {
  switch (typo) {
    case "h1":
      return {
        size: FONT_SIZES.xxxl,
        weight: "bold",
      };
    case "h2":
      return {
        size: FONT_SIZES.xxl,
        weight: "bold",
      };
    case "h3":
      return {
        size: FONT_SIZES.xl,
        weight: "bold",
      };
    case "h4":
      return {
        size: FONT_SIZES.lg,
        weight: "bold",
      };
    case "h5":
      return {
        size: FONT_SIZES.md,
        weight: "bold",
      };
    case "h6":
      return {
        size: FONT_SIZES.sm,
        weight: "bold",
      };
    case "h7":
      return {
        size: FONT_SIZES.sm,
        weight: "medium",
      };
    case "b1":
      return {
        size: FONT_SIZES.xl,
        weight: "medium",
      };
    case "b2":
      return {
        size: FONT_SIZES.lg,
        weight: "medium",
      };
    case "b3":
      return {
        size: FONT_SIZES.md,
        weight: "regular",
      };
    case "b4":
      return {
        size: FONT_SIZES.sm,
        weight: "regular",
      };
    case "caption18Medium":
      return {
        size: FONT_SIZES.md,
        weight: "medium",
      };
    case "caption14Bold":
      return {
        size: FONT_SIZES.xs,
        weight: "bold",
      };
    case "caption14Medium":
      return {
        size: FONT_SIZES.xs,
        weight: "medium",
      };
    case "caption14Regular":
      return {
        size: FONT_SIZES.xs,
        weight: "regular",
      };
    case "caption12Medium":
      return {
        size: FONT_SIZES.xxs,
        weight: "medium",
      };
    case "badge":
      return {
        size: FONT_SIZES.xxs,
        weight: "medium",
      };
  }
};

const TextItem = ({ typo }: { typo: TypoType }) => {
  const { size, weight } = getSizeWeight(typo);

  return (
    <Wrapper>
      <div>
        <Text>{typo}</Text>
        <Text>
          {size}px, {weight}
        </Text>
      </div>
      <Text typo={typo}>{LOREM}</Text>
    </Wrapper>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => {
  return <Text {...args}>{LOREM}</Text>;
};

const TyposTemplate: ComponentStory<typeof Text> = (args) => {
  const typos = Object.keys(themes.typos) as TypoType[];

  return (
    <Container>
      {typos.map((typo, idx) => {
        return <TextItem typo={typo} key={idx} />;
      })}
    </Container>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  as: "span",
  typo: "b4",
  wordBreak: "keep-all",
};

export const Typos = TyposTemplate.bind({});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
`;
