import type { Meta, StoryObj } from '@storybook/react';
import { CurrentWeather } from '.';

const meta = {
  title: 'layout/CurrentWeather',
  component: CurrentWeather,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof CurrentWeather>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "sunny",
    temp: 17.5,
    description: "Something awesome",
    location: "Australia",
  }
};
