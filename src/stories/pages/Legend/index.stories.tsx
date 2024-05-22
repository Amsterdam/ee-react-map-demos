import type { Meta, StoryObj } from '@storybook/react';
import Legend from '../../../components/Legend';
import Pane from '../../../components/Pane';

const meta = {
  title: 'Components/Legend',
  component: Legend,
  decorators: [
    Story => (
      <Pane label={'Legenda'} closable>
        <Story />
      </Pane>
    ),
  ],
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
