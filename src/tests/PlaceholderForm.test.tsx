import { describe, expect, it, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PlaceholderForm from '../components/contracts/PlaceholderForm';

vi.mock('../hooks/useSupabase', () => ({
  getPlaceholders: () => Promise.resolve([
    { name: 'Name', type: 'text', group: 'General' },
  ]),
}));

describe('PlaceholderForm', () => {
  it('renders inputs and submits', async () => {
    const onNext = vi.fn();
    const { getByLabelText, getByText } = render(<PlaceholderForm onNext={onNext} />);
    await waitFor(() => getByLabelText('Name'));
    fireEvent.change(getByLabelText('Name'), { target: { value: 'John' } });
    fireEvent.submit(getByText('Next'));
    expect(onNext).toHaveBeenCalled();
  });
});
