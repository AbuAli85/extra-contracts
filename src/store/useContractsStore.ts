import { create } from 'zustand';

interface ContractState {
  loading: boolean;
  error?: string;
  setLoading: (v: boolean) => void;
  setError: (e?: string) => void;
}

export const useContractsStore = create<ContractState>((set) => ({
  loading: false,
  error: undefined,
  setLoading: (v) => set({ loading: v }),
  setError: (e) => set({ error: e }),
}));
