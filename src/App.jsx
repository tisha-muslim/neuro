import { useEffect, useMemo, useState } from 'react'
import { TERMS } from './data/index.js'
import { CATEGORY_MAP } from './data/constants.js'
import { useTermData } from './hooks/useTermData.js'
import { clearAll } from './lib/db.js'

import Header from './components/Header.jsx'
import BottomNav from './components/BottomNav.jsx'
import WisdomSpotlight from './components/WisdomSpotlight.jsx'
import CategoryGrid from './components/CategoryGrid.jsx'
import AlphabetFilter from './components/AlphabetFilter.jsx'
import TermCard from './components/TermCard.jsx'
import TermModal from './components/TermModal.jsx'
import FavoritesView from './components/FavoritesView.jsx'
import QuoteView from './components/QuoteView.jsx'
import ProgressView from './components/ProgressView.jsx'

const PAGE_SIZE = 30

export default function App() {
  const [view, setView] = useState('home')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [letter, setLetter] = useState(null)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [selectedTerm, setSelectedTerm] = useState(null)

  const { favIds, learnedIds, onToggleFavorite, onToggleLearned, fetchNote, saveNote } = useTermData()

  useEffect(() => { setVisibleCount(PAGE_SIZE) }, [search, category, letter])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return TERMS.filter((t) => {
      if (category !== 'all' && t.category !== category) return false
      if (letter && t.letter !== letter) return false
      if (q) {
        const hay = `${t.en} ${t.bn} ${t.by} ${t.book} ${t.tags?.join(' ')}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [search, category, letter])

  const availableLetters = useMemo(() => {
    const base = category === 'all' ? TERMS : TERMS.filter((t) => t.category === category)
    return [...new Set(base.map((t) => t.letter))].sort()
  }, [category])

  const visible = filtered.slice(0, visibleCount)

  const handleReset = async () => {
    await clearAll()
    window.location.reload()
  }

  return (
    <div className="min-h-screen pb-20">
      <Header search={search} onSearch={(v) => { setSearch(v); setView('home') }} />

      {view === 'home' && (
        <main className="max-w-3xl mx-auto px-4 pt-4 space-y-5">
          {!search && category === 'all' && !letter && <WisdomSpotlight onOpen={setSelectedTerm} />}

          <CategoryGrid selected={category} onSelect={(c) => { setCategory(c); setLetter(null) }} />

          <div>
            <AlphabetFilter letters={availableLetters} selected={letter} onSelect={setLetter} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h2 className="font-ui text-xs uppercase tracking-[0.15em] text-parchment-400">
                {category === 'all' ? 'সব টার্ম' : CATEGORY_MAP[category].label}
              </h2>
              <span className="font-ui text-[11px] text-parchment-400">{filtered.length} টি ফলাফল</span>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl bg-ink-800/60 ring-1 ring-white/5 p-8 text-center">
                <p className="text-3xl mb-2">🔍</p>
                <p className="font-body text-sm text-parchment-300">কোনো টার্ম খুঁজে পাওয়া যায়নি।</p>
                <p className="font-ui text-xs text-parchment-400 mt-1">ভিন্ন শব্দ বা ফিল্টার দিয়ে চেষ্টা করুন।</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2.5">
                  {visible.map((t) => (
                    <TermCard
                      key={t.id}
                      term={t}
                      isFav={favIds.has(t.id)}
                      isLearned={learnedIds.has(t.id)}
                      onOpen={setSelectedTerm}
                      onToggleFavorite={onToggleFavorite}
                    />
                  ))}
                </div>
                {visibleCount < filtered.length && (
                  <button
                    onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    className="w-full mt-4 font-ui text-sm py-2.5 rounded-xl bg-ink-800 text-parchment-300 ring-1 ring-white/5 hover:bg-ink-700 transition"
                  >
                    আরও দেখুন ({filtered.length - visibleCount} বাকি)
                  </button>
                )}
              </>
            )}
          </div>
        </main>
      )}

      {view === 'favorites' && (
        <FavoritesView favIds={favIds} learnedIds={learnedIds} onOpen={setSelectedTerm} onToggleFavorite={onToggleFavorite} />
      )}

      {view === 'quotes' && <QuoteView onOpen={setSelectedTerm} />}

      {view === 'progress' && (
        <ProgressView
          favIds={favIds}
          learnedIds={learnedIds}
          onOpen={setSelectedTerm}
          onToggleFavorite={onToggleFavorite}
          onReset={handleReset}
        />
      )}

      <BottomNav view={view} onChange={setView} />

      {selectedTerm && (
        <TermModal
          term={selectedTerm}
          isFav={favIds.has(selectedTerm.id)}
          isLearned={learnedIds.has(selectedTerm.id)}
          onClose={() => setSelectedTerm(null)}
          onToggleFavorite={onToggleFavorite}
          onToggleLearned={onToggleLearned}
          fetchNote={fetchNote}
          saveNote={saveNote}
        />
      )}
    </div>
  )
}
