// Supabase RPC hooks. Insert RLS checks where appropriate.
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getPlaceholders() {
  const { data, error } = await supabase.rpc('get_placeholders');
  if (error) throw error;
  return data as { name: string; type: 'text' | 'date' | 'file'; group: string }[];
}

export async function generateContract(values: Record<string, any>) {
  const { data, error } = await supabase.rpc('generate_contract', values);
  if (error) throw error;
  return data as { reference: string; url: string };
}
