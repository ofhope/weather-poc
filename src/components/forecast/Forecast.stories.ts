import type { Meta, StoryObj } from '@storybook/react';
import { Forecast } from '.';

const meta = {
  title: 'layout/Forecast',
  component: Forecast,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Forecast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    hours: [
      {
        temp: 14.3,
        icon: "cloudy",
        datetime: "07:00:00"
      }
    ]
  }
};
