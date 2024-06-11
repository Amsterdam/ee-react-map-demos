import type { Meta, StoryObj } from '@storybook/react';
import MarkerClusterSpiderfy from '@/pages/MarkerClusterSpiderfy/MarkerClusterSpiderfy';

const meta = {
  title: 'React/MarkerClusterSpiderfy',
  component: MarkerClusterSpiderfy,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof MarkerClusterSpiderfy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
