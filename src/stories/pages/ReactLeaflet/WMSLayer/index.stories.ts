import type { Meta, StoryObj } from '@storybook/react';
import WMSLayer from '@/pages/ReactLeaflet/WMSLayer/WMSLayer';

const meta = {
  title: 'React-Leaflet/WMSLayer',
  component: WMSLayer,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof WMSLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
