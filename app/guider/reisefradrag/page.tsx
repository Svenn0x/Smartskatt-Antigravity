export default function ReisefradragGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Reisefradrag og Pendling</h1>
      <article className="prose prose-slate max-w-none">
        <p>Har du lang vei til jobben? Reisefradraget kan utgjøre en stor forskjell på skatten din.</p>
        <p>Husk at du kun får fradrag for det som overstiger bunnbeløpet for gjeldende år.</p>
        
        <div className="my-10 bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="text-xl font-semibold mb-2">Trenger du ny bil for å pendle?</h3>
          <p className="mb-4 text-slate-600">Billån og billig forsikring kan spare deg for tusenvis av kroner.</p>
          {/* Her kunne vi hatt en annen affiliate, men vi gjenbruker Lendo som et eksempel */}
        </div>
      </article>
    </div>
  );
}
