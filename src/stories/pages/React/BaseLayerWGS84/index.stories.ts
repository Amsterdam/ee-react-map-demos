import type { Meta, StoryObj } from '@storybook/react';
import BaseLayerWGS84 from '@/pages/BaseLayerWGS84/BaseLayerWGS84';

const meta = {
  title: 'React/BaseLayerWGS84',
  component: BaseLayerWGS84,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof BaseLayerWGS84>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
