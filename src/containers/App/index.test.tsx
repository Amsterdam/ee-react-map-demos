import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './';

describe('App', () => {
  it('renders the component', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container.firstChild).toBeDefined();
  });
});
