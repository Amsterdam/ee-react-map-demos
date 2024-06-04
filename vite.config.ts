/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

module.exports = defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/vitest-setup.ts'],
  },
  resolve: {
    // Resolve random 'TypeError: Failed to fetch dynamically imported module' error
    // @see https://github.com/storybookjs/storybook/issues/21610#issuecomment-1882417258
    extensions: ['.mdx', '.mjs', '.js', '.ts', '.tsx'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@@', replacement: path.resolve(__dirname) },
    ],
  },
  // Uncomment the server block below to fix the localhost port to 3000
  // server: {
  //   port: 3000,
  // },
});
