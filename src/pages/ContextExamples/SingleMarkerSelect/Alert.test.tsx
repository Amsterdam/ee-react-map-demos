import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Alert from './Alert';

const selectedMarker = 1234;
const setSelectedMarker = vi.fn();
const setDisplayAlert = vi.fn();

vi.mock('./MapContext', () => {
  const actual = vi.importActual('./MapContext');
  return {
    ...actual,
    useMapInstance: () => ({
      displayAlert: true,
      setDisplayAlert,
      selectedMarker,
      setSelectedMarker,
    }),
  };
});

describe('MultiMarkerSelect Alert', () => {
  it('renders the component', () => {
    const { container } = render(<Alert />);
    expect(container.firstChild).toBeDefined();
  });

  it('renders the selected IDs', () => {
    const { container } = render(<Alert />);
    expect(container.textContent).toContain(
      `You clicked on a marker with the ID ${selectedMarker}!`
    );
  });

  it('calls the reset function on click', async () => {
    render(<Alert />);
    await userEvent.click(screen.getByRole('button'));
    expect(setDisplayAlert).toBeCalled();
    expect(setSelectedMarker).toBeCalled();
  });
});
