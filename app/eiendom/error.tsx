'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error in /eiendom:', error);
  }, [error]);

  return (
    <div className="max-w-4xl mx-auto py-24 px-4 text-center">
      <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-3xl font-extrabold text-rose-900 mb-4">Noe gikk galt med visningen!</h2>
        <p className="text-rose-800 mb-6">
          Vi opplevde en teknisk feil ved lasting av eiendomsguiden. Feilmelding er logget til konsollen for utviklere.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => reset()}
            className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full font-bold transition-colors"
          >
            Prøv igjen
          </button>
          <Link
            href="/"
            className="bg-white text-rose-900 border border-rose-300 hover:bg-rose-100 px-6 py-3 rounded-full font-bold transition-colors"
          >
            Gå til forsiden
          </Link>
        </div>
        {/* Viser selve feilmeldingen i DEV for enklere debugging */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 text-left bg-black p-4 rounded-lg overflow-auto">
            <pre className="text-rose-400 text-xs font-mono">{error.stack || error.message}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
