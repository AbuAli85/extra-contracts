interface GenerateResultProps {
  reference: string;
  url: string;
}

export default function GenerateResult({ reference, url }: GenerateResultProps) {
  return (
    <div className="space-y-4">
      <p>Contract reference: <strong>{reference}</strong></p>
      <a className="btn" href={url} target="_blank" rel="noreferrer">Download PDF</a>
    </div>
  );
}
