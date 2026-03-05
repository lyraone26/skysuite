const orgs = [
  "COASTAL AVIATION",
  "MOUNTAIN AIR CLUB",
  "SKYLINE FLIGHT ACADEMY",
  "BLUE RIDGE FLYING CLUB",
  "SUMMIT AIR PARTNERSHIP",
];

export default function ProofBar() {
  return (
    <section className="border-t border-b border-slate-200/60 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6">
        <span className="text-sm text-slate-400">Built for aviation operators</span>
        <span className="text-slate-300">|</span>
        {orgs.map((org) => (
          <span
            key={org}
            className="text-xs font-medium uppercase tracking-widest text-slate-400"
          >
            {org}
          </span>
        ))}
      </div>
    </section>
  );
}
