# Engineering Enablement React Template

Team responsible: Engineering Enablement team

This starter kit is built on top of Vite 5.x for writing React based applications in TypeScript.

## Aims of this repo

This repository aims to provide developers with a simple and unopinionated codebase to develop frontend-based React applications with. Simple meaning minimal config and maintenance overheads.

## Features

- ESLint - scripts linter
- Stylelint - styles linter
- Prettier - formatter
- Vitest - test framework
- Husky + lint-staged - pre-commit git hook set up for formatting

## How to use this repo?

You can create a repository based on this [repository template](https://github.com/amsterdam/ee-react-template/generate) or simply clone the repository:

```bash
git clone https://github.com/amsterdam/ee-react-template.git
cd ee-react-template
npm i
```

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
