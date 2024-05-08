import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import NavigationMenu from './';

// Mock to avoid wrapping test components in <BrowserRouter>
vi.mock('react-router-dom', () => ({
  Link: ({ to, children }: { to: string | undefined; children: ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe('NavigationMenu', () => {
  it('renders the component', () => {
    const { container } = render(<NavigationMenu />);
    expect(container.firstChild).toBeDefined();
  });

  it('contains two elements', () => {
    const { container } = render(<NavigationMenu />);
    expect(container.querySelectorAll('a')).toHaveLength(2);
  });
});
