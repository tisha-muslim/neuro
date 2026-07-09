import { useMemo, useState } from 'react'
import { TERMS, TOTAL_TERMS } from '../data/index.js'
import { CATEGORY_MAP } from '../data/constants.js'

function dayIndex() {
  const start = new Date(new Date().getFullYear(), 0, 0)
  const diff = new Date() - start
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export default function WisdomSpotlight({ onOpen }) {
  const [shuffled, setShuffled] = useState(null)
  const ofTheDay = useMemo(() => TERMS[dayIndex() % TOTAL_TERMS], [])
  const term = shuffled || ofTheDay
  const cat = CATEGORY_MAP[term.category]

  return (
    <div className="relative rounded-2xl overflow-hidden ring-1 ring-gold-500/25 shadow-glow animate-rise">
      <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-[0.14]`} />
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="relative glass p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="font-ui text-[11px] uppercase tracking-[0.15em] text-gold-400 flex items-center gap-1.5">
            🏮 {shuffled ? 'এলোমেলো প্রজ্ঞা' : 'আজকের প্রজ্ঞা'}
          </span>
          <button
            onClick={() => setShuffled(TERMS[Math.floor(Math.random() * TOTAL_TERMS)])}
            className="font-ui text-[11px] text-parchment-400 hover:text-gold-300 transition flex items-center gap-1"
          >
            🔀 আরেকটি
          </button>
        </div>

        <button onClick={() => onOpen(term)} className="text-left w-full group">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-lg">{cat.icon}</span>
            <h3 className="font-display text-xl font-bold text-parchment-100 group-hover:text-gold-300 transition">{term.en}</h3>
          </div>
          <p className="font-body text-sm text-parchment-300 mb-3">{term.bn}</p>

          <blockquote className="border-l-2 border-gold-500/50 pl-3 py-0.5">
            <p className="font-display text-[15px] italic text-parchment-200 leading-snug">"{term.quote}"</p>
            <p className="font-ui text-xs text-gold-400 mt-1">— {term.by}, <span className="text-parchment-400">{term.book}</span></p>
          </blockquote>
        </button>
      </div>
    </div>
  )
}
