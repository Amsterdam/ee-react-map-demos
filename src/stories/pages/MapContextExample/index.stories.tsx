import type { Meta, StoryObj } from '@storybook/react';
import MapContextExample from '@/pages/MapContextExample/MapContextExample';

const meta = {
  title: 'React/MapContextExample',
  component: MapContextExample,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof MapContextExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Position: Story = {};

export const SingleSelect: Story = {
  args: {
    type: 'single-select',
  },
};

export const MultiSelect: Story = {
  args: {
    type: 'multi-select',
  },
};
