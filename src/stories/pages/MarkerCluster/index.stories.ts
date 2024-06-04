import type { Meta, StoryObj } from '@storybook/react';
import MarkerCluster from '@/pages/MarkerCluster/MarkerClusterSpider';

const meta = {
  title: 'React/MarkerCluster',
  component: MarkerCluster,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof MarkerCluster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
