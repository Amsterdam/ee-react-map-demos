import type { Meta, StoryObj } from '@storybook/react';
import GeoJSONLayer from '@/pages/ReactLeaflet/GeoJSONLayer/GeoJSONLayer';

const meta = {
  title: 'React-Leaflet/GeoJSONLayer',
  component: GeoJSONLayer,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof GeoJSONLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
