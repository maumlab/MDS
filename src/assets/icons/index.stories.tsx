import React from "react";

import * as IconComponents from "./export.generated";
import styled from "@emotion/styled";
import { Text } from "../../components";

export default {
  title: "components/Icon",
  component: IconComponents,
  tags: ["autodocs"],
};

export const Template = (args) => {
  return (
    <Container>
      <Wrapper>
        <Text>Social</Text>
        <Contents>
          <IconComponents.SnsAppleIcon {...args} />
          <IconComponents.SnsKakaoIcon {...args} />
          <IconComponents.SnsMetriIcon {...args} />
          <IconComponents.SnsNaverGreenIcon {...args} />
          <IconComponents.SnsNaverWhiteIcon {...args} />
        </Contents>
      </Wrapper>
    </Container>
  );
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
