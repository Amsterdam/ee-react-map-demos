/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react';
import { FullscreenPage } from './FullscreenPage';

const meta = {
  title: 'Docs/Patterns/Fullscreen',
  component: FullscreenPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FullscreenPage>;

export default meta;

export const Default: StoryObj = {
  render: () => <FullscreenPage />,
};
