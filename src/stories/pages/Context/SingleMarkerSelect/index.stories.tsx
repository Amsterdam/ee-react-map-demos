import type { Meta, StoryObj } from '@storybook/react';
import SingleMarkerSelect from '@/pages/MapContextExample/SingleMarkerSelect/SingleMarkerSelect';

const meta = {
  title: 'React-Context-Examples/SingleMarkerSelect',
  component: SingleMarkerSelect,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof SingleMarkerSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
