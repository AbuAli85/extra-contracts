import { useEffect, useState } from 'react';
import { getPlaceholders } from '../../hooks/useSupabase';

interface PlaceholderFormProps {
  onNext: () => void;
}

interface PlaceholderMeta {
  name: string;
  type: 'text' | 'date' | 'file';
  group: string;
}

export default function PlaceholderForm({ onNext }: PlaceholderFormProps) {
  const [placeholders, setPlaceholders] = useState<PlaceholderMeta[]>([]);
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    getPlaceholders().then(setPlaceholders).catch(console.error);
  }, []);

  const groups = Array.from(new Set(placeholders.map((p) => p.group)));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-4"
    >
      {groups.map((group) => (
        <details key={group} open className="border p-2 rounded">
          <summary className="font-semibold cursor-pointer">{group}</summary>
          <div className="p-2 space-y-2">
            {placeholders
              .filter((p) => p.group === group)
              .map((p) => (
                <div key={p.name} className="flex flex-col">
                  <label className="mb-1" htmlFor={p.name}>{p.name}</label>
                  {p.type === 'text' && (
                    <input
                      id={p.name}
                      className="input"
                      type="text"
                      value={values[p.name] || ''}
                      onChange={(e) => setValues({ ...values, [p.name]: e.target.value })}
                      required
                    />
                  )}
                  {p.type === 'date' && (
                    <input
                      id={p.name}
                      className="input"
                      type="date"
                      value={values[p.name] || ''}
                      onChange={(e) => setValues({ ...values, [p.name]: e.target.value })}
                      required
                    />
                  )}
                  {p.type === 'file' && (
                    <input
                      id={p.name}
                      className="input"
                      type="file"
                      onChange={(e) => setValues({ ...values, [p.name]: e.target.value })}
                      required
                    />
                  )}
                </div>
              ))}
          </div>
        </details>
      ))}
      <button className="btn" type="submit">Next</button>
    </form>
  );
}
