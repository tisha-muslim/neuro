// ক্যাটাগরি ও লেভেলের মেটাডেটা — আইকন, রঙ ও বাংলা লেবেল
export const CATEGORIES = [
  {
    key: 'neurology',
    label: 'নিউরোলজি',
    sub: 'Neurology',
    icon: '🧠',
    gradient: 'from-violet-500 to-purple-700',
    text: 'text-violet-300',
    ring: 'ring-violet-500/40',
    dot: 'bg-violet-400',
    desc: 'মস্তিষ্ক ও স্নায়ুতন্ত্রের চিকিৎসাবিজ্ঞান',
  },
  {
    key: 'neuroscience',
    label: 'নিউরোসায়েন্স',
    sub: 'Neuroscience',
    icon: '🔬',
    gradient: 'from-cyan-400 to-blue-700',
    text: 'text-cyan-300',
    ring: 'ring-cyan-500/40',
    dot: 'bg-cyan-400',
    desc: 'মন ও মস্তিষ্কের কার্যপ্রণালীর বিজ্ঞান',
  },
  {
    key: 'psychology',
    label: 'সাইকোলজি',
    sub: 'Psychology',
    icon: '🧩',
    gradient: 'from-rose-400 to-pink-700',
    text: 'text-rose-300',
    ring: 'ring-rose-500/40',
    dot: 'bg-rose-400',
    desc: 'মানুষের আচরণ, আবেগ ও মনের বিজ্ঞান',
  },
  {
    key: 'philosophy',
    label: 'ফিলোসফি',
    sub: 'Philosophy',
    icon: '🦉',
    gradient: 'from-amber-400 to-orange-700',
    text: 'text-amber-300',
    ring: 'ring-amber-500/40',
    dot: 'bg-amber-400',
    desc: 'জীবন, অস্তিত্ব ও জ্ঞানের মৌলিক প্রশ্নসমূহ',
  },
  {
    key: 'selfhelp',
    label: 'সেল্‌ফ হেল্প',
    sub: 'Self Help',
    icon: '🌱',
    gradient: 'from-emerald-400 to-green-700',
    text: 'text-emerald-300',
    ring: 'ring-emerald-500/40',
    dot: 'bg-emerald-400',
    desc: 'দৈনন্দিন জীবনে ব্যবহারযোগ্য ব্যবহারিক কৌশল',
  },
  {
    key: 'selfdev',
    label: 'সেল্‌ফ ডেভেলপমেন্ট',
    sub: 'Self Development',
    icon: '🚀',
    gradient: 'from-teal-400 to-cyan-800',
    text: 'text-teal-300',
    ring: 'ring-teal-500/40',
    dot: 'bg-teal-400',
    desc: 'দক্ষতা, চিন্তন-কৌশল ও ব্যক্তিগত বিকাশ',
  },
  {
    key: 'patience',
    label: 'ধৈর্য',
    sub: 'Patience',
    icon: '⏳',
    gradient: 'from-sky-400 to-blue-800',
    text: 'text-sky-300',
    ring: 'ring-sky-500/40',
    dot: 'bg-sky-400',
    desc: 'অপেক্ষা, সহনশীলতা ও স্থিরতার শিল্প',
  },
  {
    key: 'perseverance',
    label: 'অধ্যবসায়',
    sub: 'Perseverance',
    icon: '🔥',
    gradient: 'from-orange-400 to-red-700',
    text: 'text-orange-300',
    ring: 'ring-orange-500/40',
    dot: 'bg-orange-400',
    desc: 'বাধা পেরিয়ে এগিয়ে চলার শক্তি',
  },
]

export const CATEGORY_MAP = CATEGORIES.reduce((acc, c) => {
  acc[c.key] = c
  return acc
}, {})

export const LEVELS = {
  core: { label: 'মৌলিক', color: 'bg-gold-500/15 text-gold-300 ring-gold-500/30' },
  practical: { label: 'ব্যবহারিক', color: 'bg-emerald-500/15 text-emerald-300 ring-emerald-500/30' },
  advanced: { label: 'উচ্চতর', color: 'bg-rose-500/15 text-rose-300 ring-rose-500/30' },
}

export const BENGALI_DIGITS = ['০','১','২','৩','৪','৫','৬','৭','৮','৯']

export function toBengaliNumber(num) {
  return String(num).split('').map((d) => (/\d/.test(d) ? BENGALI_DIGITS[Number(d)] : d)).join('')
}
