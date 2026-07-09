import { TOTAL_TERMS } from '../data/index.js'
import { CATEGORIES, toBengaliNumber } from '../data/constants.js'

export default function StatsBar({ favCount, learnedCount }) {
  const stats = [
    { label: 'মোট টার্ম', value: TOTAL_TERMS, icon: '📚' },
    { label: 'বিষয়', value: CATEGORIES.length, icon: '🗂️' },
    { label: 'ফেভারিট', value: favCount, icon: '⭐' },
    { label: 'শেখা হয়েছে', value: learnedCount, icon: '✓' },
  ]
  return (
    <div className="grid grid-cols-4 gap-2">
      {stats.map((s) => (
        <div key={s.label} className="rounded-xl bg-ink-800/60 ring-1 ring-white/5 p-2.5 text-center">
          <div className="text-base">{s.icon}</div>
          <div className="font-display text-base font-bold text-parchment-100 mt-0.5">{toBengaliNumber(s.value)}</div>
          <div className="font-ui text-[9.5px] text-parchment-400 leading-tight">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
