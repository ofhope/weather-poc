import type { Meta, StoryObj } from '@storybook/react';
import { ResultSummary } from '.';
import { BAD_INPUT_ERROR, GENERIC_ERROR } from '../../domain/types';

const meta = {
  title: 'layout/ResultSummary',
  component: ResultSummary,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof ResultSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inital: Story = {
  args: {
    loading: false,
    result: undefined
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    result: undefined
  }
};

export const Default: Story = {
  args: {
    loading: false,
    result: {
      description: "Foo Description",
      resolvedAddress: "Foo Address",
      currentConditions: {
        datetime: '09:00:00',
        temp: 17.5,
        feelslike: 17,
        humidity: 20,
        icon: "cloudy"
      },
      hourlyForecast: [
        {
          temp: 14.3,
          icon: "cloudy",
          datetime: "07:00:00",
          feelslike: 14,
          humidity: 7
        },
        {
          temp: 14.3,
          icon: "partly-cloudy-day",
          datetime: "07:00:00",
          feelslike: 14,
          humidity: 7
        },
        {
          temp: 14.3,
          icon: "cloudy",
          datetime: "07:00:00",
          feelslike: 14,
          humidity: 7
        }
      ]
    }
  }
};

export const BadInputError: Story = {
  args: {
    loading: false,
    result: BAD_INPUT_ERROR
  }
};

export const GenericError: Story = {
  args: {
    loading: false,
    result: GENERIC_ERROR
  }
};
