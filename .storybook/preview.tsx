import React from 'react';
import '@amsterdam/design-system-tokens/dist/index.css';
import '@amsterdam/design-system-tokens/dist/compact.theme.css';
import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import { viewports } from './viewports';

export const decorators = [
  withThemeByClassName({
    themes: {
      Spacious: '',
      Compact: 'ams-theme--compact',
    },
    defaultTheme: 'Spacious',
  }),
];

export const parameters = {
  backgrounds: {
    disable: true,
  },
  viewport: {
    viewports,
  },
};