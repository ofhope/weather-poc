import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta = {
  title: 'form/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
