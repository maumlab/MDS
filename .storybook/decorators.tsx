import React from "react";
import { Global } from "@emotion/react";
import { reset } from "../src/styles";

const decorators = [
  (Story) => (
    <>
      <Global styles={reset} />
      <Story />
    </>
  ),
];

export default decorators;
