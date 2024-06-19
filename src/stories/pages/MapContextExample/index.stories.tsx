import type { Meta, StoryObj } from '@storybook/react';
import MapContextExample from '@/pages/MapContextExample/CustomProperty/MapContextExample';

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

export const Default: Story = {};
