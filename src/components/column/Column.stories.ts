import type { Meta, StoryObj } from '@storybook/react';
import { Column } from './Column';

const meta = {
  title: 'layout/Column',
  component: Column,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
