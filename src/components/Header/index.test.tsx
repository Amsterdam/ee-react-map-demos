import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './';

describe('Header', () => {
  it('renders the component', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(container.firstChild).toBeDefined();
  });

  it('expands the menu on menu button click', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.queryByTestId('navigation-menu')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByTestId('navigation-menu')).toBeInTheDocument();
  });
});
