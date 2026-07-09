import { useEffect, useState } from 'react'
import { CATEGORY_MAP, LEVELS } from '../data/constants.js'

const TABS = [
  { key: 'def', label: 'সংজ্ঞা', icon: '📖' },
  { key: 'insight', label: 'অন্তর্দৃষ্টি', icon: '💡' },
  { key: 'apply', label: 'প্রয়োগ', icon: '🛠️' },
  { key: 'quote', label: 'উক্তি ও বই', icon: '🏮' },
]

export default function TermModal({ term, isFav, isLearned, onClose, onToggleFavorite, onToggleLearned, fetchNote, saveNote }) {
  const [tab, setTab] = useState('def')
  const [note, setNote] = useState('')
  const [noteLoaded, setNoteLoaded] = useState(false)

  useEffect(() => {
    setTab('def')
    setNoteLoaded(false)
    fetchNote(term.id).then((n) => { setNote(n); setNoteLoaded(true) })
  }, [term.id, fetchNote])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const cat = CATEGORY_MAP[term.category]
  const level = LEVELS[term.level] || LEVELS.core

  const handleNoteBlur = () => { if (noteLoaded) saveNote(term.id, note) }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div className="relative w-full sm:max-w-lg max-h-[92vh] bg-ink-900 rounded-t-2xl sm:rounded-2xl ring-1 ring-white/10 overflow-hidden flex flex-col animate-rise">
        <div className={`relative bg-gradient-to-br ${cat.gradient} px-5 pt-5 pb-4`}>
          <div className="absolute inset-0 bg-ink-900/40" />
          <div className="relative flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-2xl shrink-0">{cat.icon}</span>
              <div className="min-w-0">
                <h2 className="font-display text-xl font-bold text-white truncate">{term.en}</h2>
                <p className="font-body text-[13px] text-white/85 truncate">{term.bn}</p>
              </div>
            </div>
            <button onClick={onClose} className="shrink-0 w-8 h-8 rounded-full bg-black/25 text-white flex items-center justify-center hover:bg-black/40 transition">✕</button>
          </div>

          <div className="relative flex items-center gap-2 mt-3">
            <span className={`font-ui text-[10px] px-2 py-0.5 rounded-full ring-1 ${level.color} bg-ink-900/60`}>{level.label}</span>
            <span className="font-ui text-[10px] px-2 py-0.5 rounded-full bg-black/25 text-white/80">{cat.label}</span>
          </div>
        </div>

        <div className="flex border-b border-white/5 shrink-0">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-1 py-2.5 font-ui text-[12px] flex flex-col items-center gap-0.5 transition ${
                tab === t.key ? 'text-gold-300 border-b-2 border-gold-400' : 'text-parchment-400 hover:text-parchment-200'
              }`}
            >
              <span className="text-sm">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div className="overflow-y-auto scrollbar-thin px-5 py-4 flex-1">
          {tab === 'def' && (
            <p className="font-body text-[15px] text-parchment-100 leading-relaxed animate-fade-in">{term.def}</p>
          )}
          {tab === 'insight' && (
            <p className="font-body text-[15px] text-parchment-100 leading-relaxed animate-fade-in">{term.insight}</p>
          )}
          {tab === 'apply' && (
            <p className="font-body text-[15px] text-parchment-100 leading-relaxed animate-fade-in">{term.apply}</p>
          )}
          {tab === 'quote' && (
            <div className="animate-fade-in">
              <div className="relative rounded-xl ring-1 ring-gold-500/25 p-4 bg-gold-500/5">
                <span className="absolute -top-3 left-3 text-2xl">🏮</span>
                <p className="font-display text-base italic text-parchment-100 leading-relaxed mt-1">"{term.quote}"</p>
                <p className="font-ui text-sm text-gold-400 mt-2.5">— {term.by}</p>
                <p className="font-ui text-xs text-parchment-400">{term.book}</p>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mt-4">
            {term.tags?.map((tg) => (
              <span key={tg} className="font-ui text-[10.5px] px-2 py-0.5 rounded-full bg-ink-800 text-parchment-400 ring-1 ring-white/5">
                #{tg}
              </span>
            ))}
          </div>

          <div className="mt-5">
            <label className="font-ui text-[11px] uppercase tracking-wide text-parchment-400 mb-1.5 block">🖊️ ব্যক্তিগত নোট</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onBlur={handleNoteBlur}
              placeholder="নিজের ভাষায় ছোট নোট লিখে রাখুন..."
              rows={3}
              className="w-full font-body text-sm bg-ink-800/70 text-parchment-100 placeholder:text-parchment-400 rounded-lg p-3 ring-1 ring-white/5 focus:ring-gold-500/40 outline-none resize-none transition"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 p-4 border-t border-white/5 shrink-0">
          <button
            onClick={() => onToggleFavorite(term.id)}
            className={`flex-1 font-ui text-sm py-2.5 rounded-xl ring-1 transition flex items-center justify-center gap-1.5 ${
              isFav ? 'bg-gold-500/15 text-gold-300 ring-gold-500/40' : 'bg-ink-800 text-parchment-300 ring-white/5 hover:bg-ink-700'
            }`}
          >
            {isFav ? '⭐ ফেভারিটে আছে' : '☆ ফেভারিট করুন'}
          </button>
          <button
            onClick={() => onToggleLearned(term.id)}
            className={`flex-1 font-ui text-sm py-2.5 rounded-xl ring-1 transition flex items-center justify-center gap-1.5 ${
              isLearned ? 'bg-emerald-500/15 text-emerald-300 ring-emerald-500/40' : 'bg-ink-800 text-parchment-300 ring-white/5 hover:bg-ink-700'
            }`}
          >
            {isLearned ? '✓ শেখা হয়েছে' : 'শেখা হয়েছে বলুন'}
          </button>
        </div>
      </div>
    </div>
  )
}
