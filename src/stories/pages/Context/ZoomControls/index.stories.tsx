import type { Meta, StoryObj } from '@storybook/react';
import ZoomControls from '@/pages/ContextExamples/ZoomControls/ZoomControls';

const meta = {
  title: 'React-Context-Examples/ZoomControls',
  component: ZoomControls,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof ZoomControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
