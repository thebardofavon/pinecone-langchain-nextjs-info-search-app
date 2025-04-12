'use client';

export default function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      <p className="ml-4 text-lg font-medium text-gray-700">Processing...</p>
    </div>
  );
}