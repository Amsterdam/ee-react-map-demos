import type { Meta, StoryObj } from '@storybook/react';
import ZoomControl from '@/pages/ZoomControl';

import '@amsterdam/design-system-tokens/dist/index.css';
import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';
import { Story } from '@storybook/blocks';

const meta = {
  title: 'React/ZoomControl',
  component: ZoomControl,
  args: {
    zoom: 12,
    minZoom: 3,
    maxZoom: 16,
  },
} satisfies Meta<typeof ZoomControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
  args: {
    zoom: 14,
  },
};
