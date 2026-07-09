import { useState } from 'react'
import { TERMS, TOTAL_TERMS } from '../data/index.js'
import { CATEGORY_MAP } from '../data/constants.js'

export default function QuoteView({ onOpen }) {
  const [term, setTerm] = useState(() => TERMS[Math.floor(Math.random() * TOTAL_TERMS)])
  const [copied, setCopied] = useState(false)
  const cat = CATEGORY_MAP[term.category]

  const shuffle = () => {
    setCopied(false)
    let next = term
    while (next.id === term.id) next = TERMS[Math.floor(Math.random() * TOTAL_TERMS)]
    setTerm(next)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`"${term.quote}" — ${term.by}, ${term.book}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable, ignore silently */
    }
  }

  return (
    <div className="px-4 pt-5 pb-4 max-w-3xl mx-auto animate-fade-in">
      <h2 className="font-display text-lg font-bold text-parchment-100 mb-1">🏮 উক্তির প্রদীপ</h2>
      <p className="font-body text-[13px] text-parchment-400 mb-5">বিখ্যাত মানুষদের অনুপ্রেরণামূলক উক্তি ঘুরে দেখুন</p>

      <div className={`relative rounded-2xl overflow-hidden ring-1 ring-gold-500/25 shadow-glow`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-[0.16]`} />
        <div className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="relative glass p-6 min-h-[220px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <span>{cat.icon}</span>
              <span className="font-ui text-[11px] text-parchment-400">{cat.label} · {term.en}</span>
            </div>
            <p className="font-display text-xl italic text-parchment-100 leading-relaxed text-balance">"{term.quote}"</p>
          </div>
          <div className="mt-5">
            <p className="font-ui text-sm text-gold-400">— {term.by}</p>
            <p className="font-ui text-xs text-parchment-400">{term.book}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2.5 mt-4">
        <button onClick={shuffle} className="flex-1 font-ui text-sm py-2.5 rounded-xl bg-gold-500/15 text-gold-300 ring-1 ring-gold-500/40 hover:bg-gold-500/20 transition">
          🔀 আরেকটি উক্তি
        </button>
        <button onClick={copy} className="font-ui text-sm px-4 py-2.5 rounded-xl bg-ink-800 text-parchment-300 ring-1 ring-white/5 hover:bg-ink-700 transition">
          {copied ? '✓ কপি হয়েছে' : '📋 কপি'}
        </button>
      </div>

      <button
        onClick={() => onOpen(term)}
        className="w-full mt-2.5 font-ui text-sm py-2.5 rounded-xl text-parchment-400 hover:text-gold-300 transition"
      >
        এই টার্মটি সম্পূর্ণ দেখুন →
      </button>
    </div>
  )
}
