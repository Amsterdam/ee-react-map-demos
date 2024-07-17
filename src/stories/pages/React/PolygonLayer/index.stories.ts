import type { Meta, StoryObj } from '@storybook/react';
import PolygonLayer from '@/pages/PolygonLayer/PolygonLayer';

const meta = {
  title: 'React/PolygonLayer',
  component: PolygonLayer,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof PolygonLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
