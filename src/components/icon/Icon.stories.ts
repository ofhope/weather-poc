import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '.';

const meta = {
  title: 'data-display/Icon',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "cloudy"
  }
};
