'use client';

import { useState } from 'react';
import QuestionInput from './components/QuestionInput';
import AnswerDisplay from './components/AnswerDisplay';
import LoadingIndicator from './components/LoadingIndicator';
import { QueryResponse } from '@/lib/types';

export default function Home() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [setupStatus, setSetupStatus] = useState<string | null>(null);

  const handleSubmit = async (query: string) => {
    setIsLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const response = await fetch('/api/read', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: QueryResponse = await response.json();
      setAnswer(data.answer);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetup = async () => {
    setIsLoading(true);
    setSetupStatus('Setting up document database...');
    setError(null);

    try {
      const response = await fetch('/api/setup', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      setSetupStatus('Document database initialized successfully! You can now ask questions.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initialize document database');
      setSetupStatus(null);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Document Question Answering</h2>
        <p className="text-gray-600">
          Upload your documents and ask questions to get AI-powered answers based on their content.
        </p>
      </div>

      <QuestionInput onSubmit={handleSubmit} onSetup={handleSetup} isLoading={isLoading} />

      {setupStatus && !error && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
          <p className="text-green-700">{setupStatus}</p>
        </div>
      )}

      {isLoading ? <LoadingIndicator /> : <AnswerDisplay answer={answer} error={error} />}
    </div>
  );
}