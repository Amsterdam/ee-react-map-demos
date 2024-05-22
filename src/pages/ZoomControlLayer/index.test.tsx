import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ZoomControl from '.';

describe('ZoomControl', () => {
  it('renders the component', () => {
    render(<ZoomControl />);
    const ZoomInbutton = screen.getByRole('button', { name: /Zoom in/i });
    const ZoomOutbutton = screen.getByRole('button', { name: /Zoom out/i });
    expect(ZoomInbutton).toBeInTheDocument();
    expect(ZoomOutbutton).toBeInTheDocument();
  });
});
