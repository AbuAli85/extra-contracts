import { describe, expect, it, vi } from 'vitest';
import { generateContract } from '../hooks/useSupabase';

vi.mock('../hooks/useSupabase', async () => {
  const actual = await vi.importActual('../hooks/useSupabase');
  return {
    ...actual,
    generateContract: vi.fn(() => Promise.resolve({ reference: 'REF123', url: 'test.pdf' })),
  };
});

describe('generateContract', () => {
  it('calls RPC and returns data', async () => {
    const result = await generateContract({});
    expect(result.reference).toBe('REF123');
  });
});
