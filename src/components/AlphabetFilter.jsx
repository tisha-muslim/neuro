export default function AlphabetFilter({ letters, selected, onSelect }) {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4">
      <button
        onClick={() => onSelect(null)}
        className={`shrink-0 font-ui text-xs px-3 py-1.5 rounded-lg ring-1 transition ${
          selected === null
            ? 'bg-gold-500/15 text-gold-300 ring-gold-500/40'
            : 'text-parchment-400 ring-white/5 hover:bg-ink-800'
        }`}
      >
        সব
      </button>
      {letters.map((l) => (
        <button
          key={l}
          onClick={() => onSelect(l)}
          className={`shrink-0 font-ui text-xs w-8 h-8 rounded-lg ring-1 transition ${
            selected === l
              ? 'bg-gold-500/15 text-gold-300 ring-gold-500/40'
              : 'text-parchment-400 ring-white/5 hover:bg-ink-800'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
