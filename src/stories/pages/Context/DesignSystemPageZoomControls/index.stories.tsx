import type { Meta, StoryObj } from '@storybook/react-vite';
import DesignSystemPageZoomControls from '@/pages/ContextExamples/DesignSystemPageZoomControls/DesignSystemPageZoomControls';

const meta = {
  title: 'React-Context-Examples/DesignSystemPageZoomControls',
  component: DesignSystemPageZoomControls,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof DesignSystemPageZoomControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
