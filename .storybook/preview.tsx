import '@amsterdam/design-system-tokens/dist/index.css';
import '@amsterdam/design-system-tokens/dist/compact.theme.css';
import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';
import './preview.css';

import { withThemeByClassName } from '@storybook/addon-themes';
import { viewports } from './viewports';
import { StoryContext, StoryFn } from '@storybook/react';
import { CSSProperties } from 'react';

export const decorators = [
  (Story: StoryFn, context: StoryContext) => {
    const pageBackgroundColor = context.parameters['pageBackgroundColor'];
    const wrapperStyle = pageBackgroundColor
      ? ({
          '--ams-page-background-color': pageBackgroundColor,
          backgroundColor: pageBackgroundColor,
        } as CSSProperties)
      : undefined;
    const wrapperClassName =
      context.args['color'] === 'inverse'
        ? 'ams-docs-dark-background'
        : context.args['color'] === 'contrast'
          ? 'ams-docs-light-background'
          : '';

    return (
      <div className={wrapperClassName} lang="nl" style={wrapperStyle}>
        <div className="sb-map-fullscreen">
          <div className="sb-map-container">{Story(context.args, context)}</div>
        </div>
      </div>
    );
  },
  withThemeByClassName({
    defaultTheme: 'Spacious',
    themes: {
      Compact: 'ams-theme--compact',
      Spacious: '',
    },
  }),
];

export const parameters = {
  backgrounds: {
    disabled: true,
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Alternative*',
        'Coordinate*',
        'Global',
        'React',
        'React-Context-Examples',
        'React-Leaflet',
      ],
    },
  },
  viewport: {
    options: viewports,
  },
};
export const tags = ['autodocs'];
