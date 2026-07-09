import { useState } from 'react'
import { TERMS } from '../data/index.js'
import { CATEGORIES, CATEGORY_MAP, toBengaliNumber } from '../data/constants.js'
import StatsBar from './StatsBar.jsx'
import TermCard from './TermCard.jsx'

export default function ProgressView({ favIds, learnedIds, onOpen, onToggleFavorite, onReset }) {
  const [confirmReset, setConfirmReset] = useState(false)
  const learnedTerms = TERMS.filter((t) => learnedIds.has(t.id))

  const perCategory = CATEGORIES.map((cat) => {
    const total = TERMS.filter((t) => t.category === cat.key).length
    const learned = TERMS.filter((t) => t.category === cat.key && learnedIds.has(t.id)).length
    return { ...cat, total, learned, pct: total ? Math.round((learned / total) * 100) : 0 }
  })

  const handleReset = async () => {
    await onReset()
    setConfirmReset(false)
  }

  return (
    <div className="px-4 pt-5 pb-4 max-w-3xl mx-auto animate-fade-in">
      <h2 className="font-display text-lg font-bold text-parchment-100 mb-1">📈 আপনার অগ্রগতি</h2>
      <p className="font-body text-[13px] text-parchment-400 mb-5">প্রতিটি বিষয়ে আপনার শেখার অগ্রগতি এখানে সংরক্ষিত — শুধু আপনার ডিভাইসে</p>

      <StatsBar favCount={favIds.size} learnedCount={learnedIds.size} />

      <div className="mt-6 space-y-2.5">
        {perCategory.map((cat) => (
          <div key={cat.key} className="rounded-xl bg-ink-800/60 ring-1 ring-white/5 p-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-body text-sm text-parchment-200 flex items-center gap-1.5">
                <span>{cat.icon}</span> {cat.label}
              </span>
              <span className="font-ui text-[11px] text-parchment-400">
                {toBengaliNumber(cat.learned)}/{toBengaliNumber(cat.total)}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-ink-700 overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${cat.gradient} transition-all`} style={{ width: `${cat.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      {learnedTerms.length > 0 && (
        <div className="mt-7">
          <h3 className="font-ui text-xs uppercase tracking-[0.15em] text-parchment-400 mb-2.5">✓ শেখা টার্মসমূহ</h3>
          <div className="grid grid-cols-2 gap-2.5">
            {learnedTerms.map((t) => (
              <TermCard key={t.id} term={t} isFav={favIds.has(t.id)} isLearned onOpen={onOpen} onToggleFavorite={onToggleFavorite} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 border-t border-white/5 pt-4">
        {!confirmReset ? (
          <button onClick={() => setConfirmReset(true)} className="font-ui text-xs text-parchment-400 hover:text-rose-400 transition">
            🗑️ সব অগ্রগতি ও ফেভারিট রিসেট করুন
          </button>
        ) : (
          <div className="rounded-xl bg-rose-500/10 ring-1 ring-rose-500/30 p-3.5">
            <p className="font-body text-sm text-rose-200 mb-2.5">আপনি কি নিশ্চিত? আপনার সব ফেভারিট, অগ্রগতি ও নোট স্থায়ীভাবে মুছে যাবে।</p>
            <div className="flex gap-2">
              <button onClick={handleReset} className="font-ui text-xs px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-200 ring-1 ring-rose-500/40">
                হ্যাঁ, রিসেট করুন
              </button>
              <button onClick={() => setConfirmReset(false)} className="font-ui text-xs px-3 py-1.5 rounded-lg bg-ink-800 text-parchment-300 ring-1 ring-white/5">
                বাতিল
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
