import type { Meta, StoryObj } from '@storybook/react';
import Position from '@/pages/MapContextExample/Position/Position';

const meta = {
  title: 'React-Context-Examples/Position',
  component: Position,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof Position>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
