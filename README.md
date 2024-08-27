# React Map Demos

Team responsible: Engineering Enablement team

## Aims of this repo

This project uses [Storybook](https://storybook.js.org/) to provide demos and examples of common use-cases of maps for Gemeente Amsterdam. The preferred map library is [Leaflet](https://leafletjs.com/) implemented in the frontend library [React](https://react.dev/).

## How to use this repo?

This project is generated from a [repository template](https://github.com/amsterdam/ee-react-template).

### Usage

The starter contains the following scripts:

- `start` - starts dev server
- `build` - generates the production bundle
- `test` - starts vitest and runs all tests
- `test:coverage` - starts vitest and run all tests with code coverage report
- `lint:scripts` - lint `.ts`, `.tsx` and `.json` files with eslint
- `lint:styles` - lint `.css` and `.scss` files with stylelint
- `format:scripts` - format `.ts`, `.html` and `.json` files with prettier
- `format:styles` - format `.cs` and `.scss` files with stylelint
- `format` - format all with prettier and stylelint
- `prepare` - script for setting up husky pre-commit hook
- `uninstall-husky` - script for removing husky from repository

### Settings

By default `npm run start` will fire up a dev server with a random port (often 5173). You can configure a constant port in the `vite.config.ts` file; there is commented code showing to configure the port. There are many other options available as documented in the [vite docs](https://vitejs.dev/config/).

## How to contribute to this repo?

Simply create and submit a pull request. You can also contact us via Teams (DV - Engineering Enablement) or Slack (#engineering-enablement).

## Acknowledgments

[Original template repo](https://github.com/kbysiec/vite-vanilla-ts-lib-starter)
