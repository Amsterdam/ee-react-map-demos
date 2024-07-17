import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Alert from './Alert';

const selectedMarkers = ['1234', '5678', '9012'];

const setSelectedMarkers = vi.fn();

vi.mock('./MapContext', () => {
  const actual = vi.importActual('./MapContext');
  return {
    ...actual,
    useMapInstance: () => ({
      selectedMarkers,
      setSelectedMarkers,
    }),
  };
});

describe('MultiMarkerSelect Alert', () => {
  it('renders the component', () => {
    const { container } = render(<Alert />);
    expect(container.firstChild).toBeDefined();
  });

  it('renders the selected IDs', () => {
    render(<Alert />);
    expect(screen.getByRole('list').childNodes).toHaveLength(3);
    expect(screen.getByRole('list').textContent).toEqual(
      selectedMarkers.join('')
    );
  });

  it('calls the reset function on click', async () => {
    render(<Alert />);

    await userEvent.click(screen.getByRole('button'));
    expect(setSelectedMarkers).toBeCalled();
  });
});
