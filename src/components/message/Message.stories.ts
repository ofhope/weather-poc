import type { Meta, StoryObj } from '@storybook/react';
import { Message } from './Message';

const meta = {
  title: 'layout/Message',
  component: Message,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Attention something happened."
  }
};
