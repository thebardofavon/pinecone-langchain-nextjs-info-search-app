'use client';

import ReactMarkdown from 'react-markdown';

interface AnswerDisplayProps {
  answer: string | null;
  error: string | null;
}

export default function AnswerDisplay({ answer, error }: AnswerDisplayProps) {
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <h3 className="text-lg font-medium text-red-800 mb-2">Error</h3>
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!answer) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Answer</h3>
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
    </div>
  );
}