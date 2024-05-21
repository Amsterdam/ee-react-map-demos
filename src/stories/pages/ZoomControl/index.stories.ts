import type { Meta, StoryObj } from '@storybook/react';
import ZoomControl from '@/pages/ZoomControl';

import '@amsterdam/design-system-tokens/dist/index.css';
import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';

const meta = {
  title: 'React/ZoomControl',
  component: ZoomControl,
} satisfies Meta<typeof ZoomControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {};
