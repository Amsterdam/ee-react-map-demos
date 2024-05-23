import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import BaseLayer from './BaseLayer';

describe('BaseLayer', () => {
  it('renders the component', () => {
    const { container } = render(<BaseLayer />);
    expect(container.firstChild).toBeDefined();
  });

  it('accepts a children prop', () => {
    const { container } = render(<BaseLayer>Children</BaseLayer>);
    expect(container.firstChild).toHaveTextContent('Children');
  });
});
