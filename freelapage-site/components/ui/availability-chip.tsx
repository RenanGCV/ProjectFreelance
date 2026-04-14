export function AvailabilityChip() {
  return (
    <div className="depth-3d inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary/75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-primary" />
      </span>
      Disponível para novos projetos
    </div>
  );
}
