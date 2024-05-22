import type { Meta, StoryObj } from '@storybook/react';
import ZoomControl from '@/components/ZoomControl/ZoomControl';
import { Story } from '@storybook/blocks';
import Map from '../../../components/Map/Map';

const meta = {
  title: 'Components/ZoomControl',
  component: ZoomControl,
  decorators: [
    Story => (
      <Map mapOptions={{ scrollWheelZoom: false }}>
        <Story />
      </Map>
    ),
  ],
} satisfies Meta<typeof ZoomControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
