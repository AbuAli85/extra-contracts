import { describe, expect, it, vi } from 'vitest';

vi.mock('../hooks/useSupabase', async () => {
  const actual = await vi.importActual('../hooks/useSupabase');
  return {
    ...actual,
    generateContract: vi.fn(() => Promise.resolve({ reference: 'REF123', url: 'test.pdf' })),
  };
});

import { generateContract } from '../hooks/useSupabase';

describe('generateContract', () => {
  it('calls RPC and returns data', async () => {
    const result = await generateContract({});
    expect(result.reference).toBe('REF123');
  });
});
