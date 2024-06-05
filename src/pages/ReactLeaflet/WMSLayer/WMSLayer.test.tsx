import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import WMSLayer from '@/pages/ReactLeaflet/WMSLayer/WMSLayer';

describe('WMSLayer', () => {
  it('renders the component', () => {
    const { container } = render(<WMSLayer />);
    expect(container.firstChild).toBeDefined();
  });
});
