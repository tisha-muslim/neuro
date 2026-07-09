import { TERMS } from '../data/index.js'
import TermCard from './TermCard.jsx'

export default function FavoritesView({ favIds, learnedIds, onOpen, onToggleFavorite }) {
  const favTerms = TERMS.filter((t) => favIds.has(t.id))

  return (
    <div className="px-4 pt-5 pb-4 max-w-3xl mx-auto animate-fade-in">
      <h2 className="font-display text-lg font-bold text-parchment-100 mb-1">⭐ আপনার ফেভারিট</h2>
      <p className="font-body text-[13px] text-parchment-400 mb-5">যে টার্মগুলো ফেভারিট করেছেন, সেগুলো এখানে দেখুন</p>

      {favTerms.length === 0 ? (
        <div className="rounded-2xl bg-ink-800/60 ring-1 ring-white/5 p-8 text-center">
          <p className="text-3xl mb-2">☆</p>
          <p className="font-body text-sm text-parchment-300">এখনো কোনো টার্ম ফেভারিট করা হয়নি।</p>
          <p className="font-ui text-xs text-parchment-400 mt-1">কোনো টার্ম কার্ডে ⭐ চেপে ফেভারিটে যুক্ত করুন।</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2.5">
          {favTerms.map((t) => (
            <TermCard key={t.id} term={t} isFav learnedIds={learnedIds} isLearned={learnedIds.has(t.id)} onOpen={onOpen} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      )}
    </div>
  )
}
