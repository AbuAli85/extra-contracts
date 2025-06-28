import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function ContractForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.from('contracts').insert({ title, body });
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };

  if (success) {
    return <p>Contract saved!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-1">Title</label>
        <input
          id="title"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="body" className="mb-1">Body</label>
        <textarea
          id="body"
          className="input"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button className="btn" type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}
