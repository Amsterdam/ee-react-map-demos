import type { Meta, StoryObj } from '@storybook/react';
import MultiMarkerSelect from '@/pages/ContextExamples/MultiMarkerSelect/MultiMarkerSelect';

const meta = {
  title: 'React-Context-Examples/MultiMarkerSelect',
  component: MultiMarkerSelect,
  parameters: {
    layout: 'fullscreen',
    options: {
      panelPosition: 'bottom',
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta<typeof MultiMarkerSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
