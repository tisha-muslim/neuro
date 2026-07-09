import { CATEGORIES } from '../data/constants.js'
import { CATEGORY_COUNTS, TOTAL_TERMS } from '../data/index.js'
import { toBengaliNumber } from '../data/constants.js'

export default function CategoryGrid({ selected, onSelect }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="font-ui text-xs uppercase tracking-[0.15em] text-parchment-400">বিষয়সমূহ</h2>
        {selected !== 'all' && (
          <button onClick={() => onSelect('all')} className="font-ui text-[11px] text-gold-400 hover:text-gold-300">
            সব দেখান ✕
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={() => onSelect('all')}
          className={`col-span-2 rounded-xl p-3 flex items-center gap-3 ring-1 transition text-left ${
            selected === 'all'
              ? 'ring-gold-500/50 bg-gold-500/10'
              : 'ring-white/5 bg-ink-800/60 hover:bg-ink-800'
          }`}
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-base shadow-card shrink-0">
            📚
          </div>
          <div className="flex-1">
            <p className="font-display text-sm font-semibold text-parchment-100">সব বিষয়</p>
            <p className="font-ui text-[11px] text-parchment-400">{toBengaliNumber(TOTAL_TERMS)}টি পরিভাষা</p>
          </div>
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onSelect(cat.key)}
            className={`rounded-xl p-3 flex items-center gap-2.5 ring-1 transition text-left ${
              selected === cat.key
                ? `ring-2 ${cat.ring} bg-ink-800`
                : 'ring-white/5 bg-ink-800/60 hover:bg-ink-800'
            }`}
          >
            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-base shadow-card shrink-0`}>
              {cat.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-[13px] font-semibold text-parchment-100 truncate">{cat.label}</p>
              <p className="font-ui text-[10.5px] text-parchment-400">{toBengaliNumber(CATEGORY_COUNTS[cat.key])}টি টার্ম</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
