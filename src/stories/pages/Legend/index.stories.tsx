import type { Meta, StoryObj } from '@storybook/react';
import Legend from '../../../components/Legend';

const meta = {
  title: 'Components/Legend',
  component: Legend,
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
