import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';

export default function ContractPage() {
  const { id } = useParams<{ id: string }>();
  const [contract, setContract] = useState<{ title: string; body: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    supabase
      .from('contracts')
      .select('title, body')
      .eq('id', id)
      .single()
      .then(({ data }) => {
        setContract(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!contract) return <p>Contract not found</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">{contract.title}</h1>
      <p>{contract.body}</p>
    </div>
  );
}
