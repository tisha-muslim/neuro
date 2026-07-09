import { useEffect, useState } from 'react'

export default function Header({ search, onSearch }) {
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    const on = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => {
      window.removeEventListener('online', on)
      window.removeEventListener('offline', off)
    }
  }, [])

  return (
    <header className="sticky top-0 z-30 glass border-b border-white/5">
      <div className="max-w-3xl mx-auto px-4 pt-4 pb-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ink-700 to-ink-900 ring-1 ring-gold-500/40 flex items-center justify-center text-xl shadow-glow shrink-0">
              🧠
            </div>
            <div className="leading-tight">
              <h1 className="font-display text-lg font-bold text-parchment-100 tracking-wide">প্রজ্ঞাকোষ</h1>
              <p className="font-ui text-[11px] text-parchment-400 -mt-0.5">মন ও প্রজ্ঞার অভিধান</p>
            </div>
          </div>

          <span
            className={`font-ui text-[10px] px-2 py-1 rounded-full ring-1 shrink-0 ${
              online
                ? 'bg-emerald-500/10 text-emerald-300 ring-emerald-500/30'
                : 'bg-amber-500/10 text-amber-300 ring-amber-500/30'
            }`}
            title={online ? 'অনলাইন' : 'অফলাইন মোডে চলছে'}
          >
            {online ? '● অনলাইন' : '◐ অফলাইন'}
          </span>
        </div>

        <div className="mt-3 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-parchment-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 114 10.5a6.5 6.5 0 0113 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="টার্ম, ট্যাগ বা লেখক খুঁজুন..."
            className="w-full font-body bg-ink-800/80 text-parchment-100 placeholder:text-parchment-400 rounded-xl pl-10 pr-4 py-2.5 text-sm ring-1 ring-white/5 focus:ring-gold-500/50 outline-none transition"
          />
        </div>
      </div>
    </header>
  )
}
