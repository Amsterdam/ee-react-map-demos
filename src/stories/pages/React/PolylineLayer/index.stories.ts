import type { Meta, StoryObj } from '@storybook/react';
import PolylineLayer from '@/pages/PolylineLayer/PolylineLayer';

const meta = {
  title: 'React/PolylineLayer',
  component: PolylineLayer,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof PolylineLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
