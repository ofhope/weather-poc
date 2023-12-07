import type { Meta, StoryObj } from '@storybook/react';
import { Weather } from '.';

const meta = {
  title: 'form/Weather',
  component: Weather,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Weather>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Foo"
  }
};
