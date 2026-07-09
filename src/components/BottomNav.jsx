const TABS = [
  { key: 'home', label: 'হোম', icon: '🏠' },
  { key: 'favorites', label: 'ফেভারিট', icon: '⭐' },
  { key: 'quotes', label: 'উক্তি', icon: '🏮' },
  { key: 'progress', label: 'অগ্রগতি', icon: '📈' },
]

export default function BottomNav({ view, onChange }) {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 glass border-t border-white/5 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-3xl mx-auto grid grid-cols-4">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`flex flex-col items-center gap-0.5 py-2.5 font-ui text-[11px] transition ${
              view === t.key ? 'text-gold-300' : 'text-parchment-400 hover:text-parchment-200'
            }`}
          >
            <span className="text-base leading-none">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
