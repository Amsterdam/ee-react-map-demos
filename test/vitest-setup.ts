import { vi } from 'vitest';
import '@testing-library/jest-dom';

Object.defineProperty(window, 'alert', {
  writable: true,
  value: vi.fn(),
});
