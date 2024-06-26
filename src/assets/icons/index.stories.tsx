import React from "react";

import * as IconComponents from "./export.generated";
import styled from "@emotion/styled";
import { Text } from "../../components";
import { IconSize } from "./icon.type";
import { AvatarSize } from "../../components/Avatar/Avatar.type";

export default {
  title: "components/Icon",
  component: IconComponents,
  tags: ["autodocs"],
};

export const Template = (args) => {
  return <Container></Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
