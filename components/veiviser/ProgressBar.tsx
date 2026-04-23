export default function ProgressBar({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  const percentage = Math.round(((currentStep - 1) / (totalSteps - 1)) * 100);

  return (
    <div className="mb-10 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Steg {currentStep} av {totalSteps}</span>
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{percentage}%</span>
      </div>
      <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-700 ease-in-out relative" 
          style={{ width: `${percentage}%` }}
        >
          {/* Shimmer effect inside progress bar */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
