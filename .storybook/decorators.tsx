import React from "react";
import { Global } from "@emotion/react";
import { reset } from "../src/styles";
import { ModalProvider } from "../src/utils/Modal";

const decorators = [
  (Story) => (
    <>
      <ModalProvider>
        <Global styles={reset} />
        <Story />
      </ModalProvider>
    </>
  ),
];

export default decorators;
