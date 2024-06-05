import type { Meta, StoryObj } from '@storybook/react';
import MarkerClusterSpider from '@/pages/MarkerCluster/MarkerClusterSpider';

const meta = {
  title: 'React/MarkerClusterSpider',
  component: MarkerClusterSpider,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof MarkerClusterSpider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
