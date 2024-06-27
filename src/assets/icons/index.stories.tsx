import React from "react";

import * as IconComponents from "./export.generated";
import styled from "@emotion/styled";
import { Text } from "../../components";
import { IconSize } from "./icon.type";

export default {
  title: "components/Icon",
  component: IconComponents,
  tags: ["autodocs"],
};

export const Template = (args) => {
  const icons = Object.keys(IconComponents);

  return (
    <Container>
      {icons.map((icon, idx) => {
        const Icon = IconComponents[icon];
        return <Icon key={idx} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
