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
import FullscreenPageMap from '../../../pages/Fullscreen/FullscreenPageMap';

const meta = {
  title: 'Patterns/Fullscreen',
  component: FullscreenPage,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    header: <FullscreenPageHeader />,
    map: <FullscreenPageMap scrollWheelZoom={false} />,
    footer: <FullscreenPageFooter />,
  },
  argTypes: {
    header: { control: { disable: true } },
    map: { control: { disable: true } },
    footer: { control: { disable: true } },
  },
} satisfies Meta<typeof FullscreenPage>;

export default meta;

export const Default: StoryObj = {};
