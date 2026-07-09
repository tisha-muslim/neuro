import { NEUROLOGY } from './neurology.js'
import { NEUROSCIENCE } from './neuroscience.js'
import { PSYCHOLOGY } from './psychology.js'
import { PHILOSOPHY } from './philosophy.js'
import { SELF_HELP } from './selfhelp.js'
import { SELF_DEV } from './selfdev.js'
import { PATIENCE } from './patience.js'
import { PERSEVERANCE } from './perseverance.js'

// প্রতিটি ক্যাটাগরির ডেটাসেটকে একটি "category" ট্যাগ, ক্রমিক id ও প্রথম অক্ষর (letter) সহ একত্রিত করা হচ্ছে
const GROUPS = [
  { key: 'neurology', list: NEUROLOGY },
  { key: 'neuroscience', list: NEUROSCIENCE },
  { key: 'psychology', list: PSYCHOLOGY },
  { key: 'philosophy', list: PHILOSOPHY },
  { key: 'selfhelp', list: SELF_HELP },
  { key: 'selfdev', list: SELF_DEV },
  { key: 'patience', list: PATIENCE },
  { key: 'perseverance', list: PERSEVERANCE },
]

let counter = 1
export const TERMS = GROUPS.flatMap(({ key, list }) =>
  list.map((term) => ({
    ...term,
    id: counter++,
    category: key,
    letter: term.en.trim()[0].toUpperCase(),
  }))
)

export const CATEGORY_COUNTS = GROUPS.reduce((acc, { key, list }) => {
  acc[key] = list.length
  return acc
}, {})

export const TOTAL_TERMS = TERMS.length
