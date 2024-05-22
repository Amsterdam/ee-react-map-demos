/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react';
import {
  FullscreenPage,
  FullscreenPageFooter,
  FullscreenPageHeader,
} from '../../../pages/Fullscreen';

const meta = {
  title: 'Patterns/Fullscreen',
  component: FullscreenPage,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    header: <FullscreenPageHeader />,
    footer: <FullscreenPageFooter />,
  },
  argTypes: {
    header: { control: { disable: true } },
    footer: { control: { disable: true } },
  },
} satisfies Meta<typeof FullscreenPage>;

export default meta;

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        disable: true,
      },
    },
  },
};
