import type { Meta, StoryObj } from '@storybook/react';
import Marker from '@/pages/Marker';

const meta = {
  title: 'React/Marker',
  component: Marker,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof Marker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
