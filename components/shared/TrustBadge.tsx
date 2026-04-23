export default function TrustBadge() {
  return (
    <div className="flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-1 rounded">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
      <span>Smartskatt Anbefaler</span>
    </div>
  );
}
