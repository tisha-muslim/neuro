# প্রজ্ঞাকোষ (Projnakosh) — মন ও প্রজ্ঞার অভিধান

Neurology, Neuroscience, Psychology, Philosophy, Self-Help, Self-Development, Patience ও Perseverance বিষয়ের **৫০০টি গুরুত্বপূর্ণ পরিভাষা** নিয়ে একটি ইনস্টলযোগ্য, সম্পূর্ণ অফলাইন-সক্ষম PWA (Progressive Web App)। প্রতিটি টার্মের সাথে বাংলা সংজ্ঞা, সহজ উপমা (insight), ব্যবহারিক প্রয়োগ এবং একটি বিখ্যাত উক্তি + বইয়ের রেফারেন্স রয়েছে।

## ✨ ফিচার

- **৫০০টি পরিভাষা**, ৮টি বিষয়ে বিভক্ত — প্রতিটির জন্য সংজ্ঞা, উপমা, প্রয়োগ ও একটি বিখ্যাত উক্তি+বই
- **সম্পূর্ণ অফলাইন** — কোনো ব্যাকএন্ড সার্ভার বা রিয়েল-টাইম সিংক নেই, সব ডেটা অ্যাপের ভেতরেই বান্ডেল করা
- **ইনস্টলযোগ্য PWA** — মোবাইল/ডেস্কটপে হোমস্ক্রিনে ইনস্টল করা যায় (Add to Home Screen)
- **লোকাল ডেটাবেইজ (IndexedDB)** — ফেভারিট, "শেখা হয়েছে" প্রগ্রেস ও ব্যক্তিগত নোট ডিভাইসেই সংরক্ষিত থাকে
- **সার্চ + ক্যাটাগরি + A-Z ফিল্টার**
- **"আজকের প্রজ্ঞা"** — প্রতিদিন একটি নির্দিষ্ট টার্ম হাইলাইট হয়
- **উক্তির প্রদীপ** — এলোমেলোভাবে বিখ্যাত উক্তি খুঁজে দেখার মোড, কপি করার সুবিধাসহ
- **অগ্রগতি ট্র্যাকার** — বিষয়ভিত্তিক শেখার অগ্রগতি প্রগ্রেস-বারে দেখা যায়

## 🛠️ প্রযুক্তি স্ট্যাক

| স্তর | প্রযুক্তি |
|---|---|
| ফ্রন্টএন্ড | React 18 + Vite 5 |
| স্টাইলিং | Tailwind CSS 3 |
| লোকাল ডেটাবেইজ | IndexedDB (`idb` লাইব্রেরি) |
| PWA / অফলাইন | `vite-plugin-pwa` (Workbox precache) |
| ফন্ট | Noto Serif Bengali, Hind Siliguri, Inter (Google Fonts) |

কোনো ব্যাকএন্ড সার্ভার, ডেটাবেইজ সার্ভার বা API নেই — পুরো অ্যাপ একটি স্ট্যাটিক বান্ডল, যা Vercel-এ বিনামূল্যে হোস্ট করা যায়।

## 💻 লোকালে চালানো

```bash
npm install
npm run dev
```

`http://localhost:5173` এ ব্রাউজারে খুলুন।

বিল্ড করার জন্য:
```bash
npm run build
npm run preview
```

## 🚀 GitHub-এ পুশ ও Vercel-এ ডিপ্লয়

### ১. GitHub-এ রিপো তৈরি ও পুশ

```bash
cd projnakosh
git init
git add .
git commit -m "Initial commit: প্রজ্ঞাকোষ PWA"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### ২. Vercel-এ ডিপ্লয়

1. [vercel.com](https://vercel.com) এ লগইন করুন (GitHub অ্যাকাউন্ট দিয়ে)
2. **"Add New... → Project"** ক্লিক করুন
3. আপনার GitHub রিপোটি import করুন
4. Vercel স্বয়ংক্রিয়ভাবে **Vite** ফ্রেমওয়ার্ক সনাক্ত করবে — কোনো কনফিগারেশন পরিবর্তনের প্রয়োজন নেই:
   - Build Command: `vite build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
5. **"Deploy"** ক্লিক করুন — কয়েক মিনিটেই লাইভ লিংক পাবেন

এরপর `main` ব্রাঞ্চে কোনো পুশ দিলেই Vercel স্বয়ংক্রিয়ভাবে নতুন ভার্সন ডিপ্লয় করবে।

### ৩. PWA ইনস্টল করা

লাইভ সাইটে যান → ব্রাউজারের এড্রেস বারে "Install" আইকনে ক্লিক করুন (Chrome/Edge) বা মোবাইলে "Add to Home Screen" ব্যবহার করুন। একবার ইনস্টল হলে ইন্টারনেট ছাড়াই পুরো অ্যাপ ও সব ৫০০ টার্ম ব্যবহার করা যাবে।

> **নোট:** ফন্ট (Noto Serif Bengali, Hind Siliguri) প্রথমবার Google Fonts থেকে লোড হয়। এরপর ব্রাউজার/সার্ভিস ওয়ার্কার ক্যাশ থেকে দ্রুত লোড হবে। অ্যাপের মূল কনটেন্ট (৫০০ টার্ম, সব লজিক) সম্পূর্ণরূপে বান্ডলের ভেতরে থাকে বলে ইন্টারনেট ছাড়াও কাজ করে।

## 📁 প্রজেক্ট স্ট্রাকচার

```
projnakosh/
├── public/
│   ├── icons/              # PWA আইকন (192/512/maskable/apple-touch)
│   └── favicon.svg
├── src/
│   ├── data/
│   │   ├── neurology.js        # ৭৪ টার্ম
│   │   ├── neuroscience.js     # ৬৩ টার্ম
│   │   ├── psychology.js       # ৬২ টার্ম
│   │   ├── philosophy.js       # ৫৭ টার্ম
│   │   ├── selfhelp.js         # ৬১ টার্ম
│   │   ├── selfdev.js          # ৬১ টার্ম
│   │   ├── patience.js         # ৬২ টার্ম
│   │   ├── perseverance.js     # ৬০ টার্ম
│   │   ├── index.js            # সব ডেটাসেট একত্রিতকরণ (মোট ৫০০)
│   │   └── constants.js        # ক্যাটাগরি মেটাডেটা (আইকন/রঙ/লেবেল)
│   ├── lib/
│   │   └── db.js               # IndexedDB wrapper (favorites/progress/notes)
│   ├── hooks/
│   │   └── useTermData.js      # React hook — favorites/learned state
│   ├── components/
│   │   ├── Header.jsx, BottomNav.jsx, CategoryGrid.jsx
│   │   ├── AlphabetFilter.jsx, TermCard.jsx, TermModal.jsx
│   │   ├── WisdomSpotlight.jsx, QuoteView.jsx
│   │   ├── FavoritesView.jsx, ProgressView.jsx, StatsBar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js          # vite-plugin-pwa কনফিগারেশন
├── tailwind.config.js
└── package.json
```

## 📝 নতুন টার্ম যুক্ত করা

`src/data/` এর যেকোনো ক্যাটাগরি ফাইলে (যেমন `patience.js`) নিচের ফরম্যাটে একটি অবজেক্ট যুক্ত করুন:

```js
{
  en: "Term Name",
  bn: "সংক্ষিপ্ত বাংলা অর্থ",
  def: "সম্পূর্ণ সংজ্ঞা...",
  insight: "🔑 সহজ উপমা...",
  apply: "ব্যবহারিক প্রয়োগ...",
  quote: "একটি বিখ্যাত উক্তি",
  by: "উক্তিদাতার নাম",
  book: "বই বা সূত্রের নাম",
  tags: ["tag1", "tag2", "tag3"],
  level: "core" // core | practical | advanced
}
```

`id` ও `letter` স্বয়ংক্রিয়ভাবে `src/data/index.js`-এ তৈরি হয়, আলাদা করে দেওয়ার প্রয়োজন নেই।

## ⚠️ উক্তি সম্পর্কে দ্রষ্টব্য

উক্তিগুলো সাধারণভাবে প্রচলিত ও বহু-উদ্ধৃত (widely-attributed) বিখ্যাত বাক্য থেকে সংগৃহীত। কিছু ঐতিহাসিক উক্তির নির্দিষ্ট মূল উৎস অনিশ্চিত হতে পারে ("Attributed Sayings" চিহ্নিত) — এই অ্যাপটি শিক্ষামূলক ও অনুপ্রেরণামূলক উদ্দেশ্যে তৈরি, একাডেমিক উদ্ধৃতি-সূত্র হিসেবে নয়।

## 📄 লাইসেন্স

এই কোডবেস স্বাধীনভাবে ব্যবহার, পরিবর্তন ও পুনর্বিতরণ করা যাবে।
