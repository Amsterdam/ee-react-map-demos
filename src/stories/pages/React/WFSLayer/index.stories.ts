import type { Meta, StoryObj } from '@storybook/react';
import WFSLayer from '@/pages/WFSLayer/WFSLayer';

const meta = {
  title: 'React/WFSLayer',
  component: WFSLayer,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof WFSLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
