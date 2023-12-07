import React from "react";
import type { Preview } from "@storybook/react";
import { PageContainer } from "../src/components/pagecontainer/PageContainer";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <PageContainer>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </PageContainer>
    ),
  ],
};

export default preview;
