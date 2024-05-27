import type { Meta, StoryObj } from '@storybook/react';
import BaseLayer from '@/pages/MVTLayer/MVTLayer';

const meta = {
  title: 'React/MVTLayer',
  component: BaseLayer,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof BaseLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
