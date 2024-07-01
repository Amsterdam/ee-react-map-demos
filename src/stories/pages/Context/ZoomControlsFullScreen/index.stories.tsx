import type { Meta, StoryObj } from '@storybook/react';
import ZoomControlsFullScreen from '@/pages/MapContextExample/ZoomControlsFullScreen/ZoomControlsFullScreen';

const meta = {
  title: 'React-Context-Examples/ZoomControlsFullScreen',
  component: ZoomControlsFullScreen,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof ZoomControlsFullScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
