import { useState } from 'react';
import PlaceholderForm from './PlaceholderForm';
import GenerateResult from './GenerateResult';
import { generateContract } from '../../hooks/useSupabase';

export default function ContractStepper() {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState<{ reference: string; url: string }>();
  const next = () => setStep((s) => s + 1);

  const handleGenerate = async () => {
    setStep(4);
    const res = await generateContract({});
    setResult(res);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <div className={step === 1 ? 'font-bold' : ''}>1. Select Template</div>
        <div className={step === 2 ? 'font-bold' : ''}>2. Fill Placeholders</div>
        <div className={step === 3 ? 'font-bold' : ''}>3. Review</div>
        <div className={step === 4 ? 'font-bold' : ''}>4. Done</div>
      </div>
      {step === 1 && (
        <div>
          <p>Select template step.</p>
          <button className="btn" onClick={next}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <PlaceholderForm onNext={next} />
        </div>
      )}
      {step === 3 && (
        <div>
          <p>Review step.</p>
          <button className="btn" onClick={handleGenerate}>Generate Contract</button>
        </div>
      )}
      {step === 4 && result && (
        <GenerateResult reference={result.reference} url={result.url} />
      )}
    </div>
  );
}
