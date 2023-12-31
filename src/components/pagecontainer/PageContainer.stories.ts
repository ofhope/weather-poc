import type { Meta, StoryObj } from '@storybook/react';
import { PageContainer } from './PageContainer';

const meta = {
  title: 'layout/PageContainer',
  component: PageContainer,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
