import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './';

const meta = {
  title: 'form/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Foo"
  }
};
