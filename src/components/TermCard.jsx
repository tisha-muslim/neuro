import { CATEGORY_MAP, LEVELS } from '../data/constants.js'

export default function TermCard({ term, isFav, isLearned, onOpen, onToggleFavorite }) {
  const cat = CATEGORY_MAP[term.category]
  const level = LEVELS[term.level] || LEVELS.core

  return (
    <button
      onClick={() => onOpen(term)}
      className="relative text-left rounded-xl bg-ink-800/70 ring-1 ring-white/5 hover:ring-white/15 overflow-hidden transition group animate-fade-in"
    >
      <div className={`h-1 w-full bg-gradient-to-r ${cat.gradient}`} />
      <div className="p-3.5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-sm shrink-0">{cat.icon}</span>
            <h3 className="font-display text-[14px] font-bold text-parchment-100 truncate group-hover:text-gold-300 transition">
              {term.en}
            </h3>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(term.id) }}
            className="shrink-0 -mr-1 -mt-1 p-1.5 text-parchment-400 hover:text-gold-400 transition"
            aria-label="ফেভারিট টগল"
          >
            {isFav ? '⭐' : '☆'}
          </button>
        </div>

        <p className="font-body text-[12.5px] text-parchment-300 mb-2 line-clamp-1">{term.bn}</p>
        <p className="font-body text-[12px] text-parchment-400 line-clamp-2 leading-snug mb-2.5">{term.def}</p>

        <div className="flex items-center justify-between">
          <span className={`font-ui text-[10px] px-2 py-0.5 rounded-full ring-1 ${level.color}`}>{level.label}</span>
          {isLearned && <span className="font-ui text-[11px] text-emerald-400">✓ শেখা হয়েছে</span>}
        </div>
      </div>
    </button>
  )
}
