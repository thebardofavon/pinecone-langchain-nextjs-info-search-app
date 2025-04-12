'use client';

import { useState } from 'react';

interface QuestionInputProps {
  onSubmit: (query: string) => void;
  onSetup: () => void;
  isLoading: boolean;
}

export default function QuestionInput({ onSubmit, onSetup, isLoading }: QuestionInputProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
            Ask a question about your documents
          </label>
          <input
            id="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., What is the main topic of these documents?"
            className="input"
            disabled={isLoading}
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading || !query.trim()}
          >
            Ask me!
          </button>
          <button
            type="button"
            onClick={onSetup}
            className="btn btn-secondary"
            disabled={isLoading}
          >
            Initialize database for query
          </button>
        </div>
      </form>
    </div>
  );
}