import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/stories/Intro.mdx',
    '../src/stories/Requirements.mdx',
    '../src/stories/CoordinateReferenceSystems.mdx',
    '../src/stories/Icons.mdx',
    '../src/stories/Layers.mdx',
    '../src/stories/MarkerClustering.mdx',
    '../src/stories/Alternatives.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
    },
  },
  docs: {},
  staticDirs: ['./static'],
  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ee-react-map-demos/';
    }

    return config;
  },
};

export default config;
