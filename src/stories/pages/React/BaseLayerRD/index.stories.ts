import type { Meta, StoryObj } from '@storybook/react';
import BaseLayerRD from '@/pages/BaseLayerRD/BaseLayerRD';

const meta = {
  title: 'React/BaseLayerRD',
  component: BaseLayerRD,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof BaseLayerRD>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
