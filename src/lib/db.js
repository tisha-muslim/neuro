// IndexedDB ভিত্তিক লোকাল ডেটাবেইজ — ফেভারিট, শেখার অগ্রগতি ও ব্যক্তিগত নোট সংরক্ষণ করে।
// রিয়েল-টাইম সিংক নেই — সবকিছু ব্যবহারকারীর নিজের ডিভাইসেই থাকে, অফলাইনেও কাজ করে।
import { openDB } from 'idb'

const DB_NAME = 'projnakosh-db'
const DB_VERSION = 1
const STORE = 'termdata'

let dbPromise = null

function getDB() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE, { keyPath: 'id' })
        }
      },
    })
  }
  return dbPromise
}

const DEFAULT_ENTRY = (id) => ({ id, fav: false, learned: false, note: '', updatedAt: Date.now() })

export async function getEntry(id) {
  try {
    const db = await getDB()
    const entry = await db.get(STORE, id)
    return entry || DEFAULT_ENTRY(id)
  } catch (e) {
    console.error('DB read failed', e)
    return DEFAULT_ENTRY(id)
  }
}

export async function getAllEntries() {
  try {
    const db = await getDB()
    return await db.getAll(STORE)
  } catch (e) {
    console.error('DB read-all failed', e)
    return []
  }
}

async function upsert(id, patch) {
  try {
    const db = await getDB()
    const existing = (await db.get(STORE, id)) || DEFAULT_ENTRY(id)
    const updated = { ...existing, ...patch, id, updatedAt: Date.now() }
    await db.put(STORE, updated)
    return updated
  } catch (e) {
    console.error('DB write failed', e)
    return null
  }
}

export async function toggleFavorite(id) {
  const current = await getEntry(id)
  return upsert(id, { fav: !current.fav })
}

export async function toggleLearned(id) {
  const current = await getEntry(id)
  return upsert(id, { learned: !current.learned })
}

export async function setNote(id, note) {
  return upsert(id, { note })
}

export async function getStats() {
  const all = await getAllEntries()
  return {
    favorites: all.filter((e) => e.fav).length,
    learned: all.filter((e) => e.learned).length,
  }
}

export async function getFavoriteIds() {
  const all = await getAllEntries()
  return new Set(all.filter((e) => e.fav).map((e) => e.id))
}

export async function getLearnedIds() {
  const all = await getAllEntries()
  return new Set(all.filter((e) => e.learned).map((e) => e.id))
}

export async function clearAll() {
  try {
    const db = await getDB()
    await db.clear(STORE)
    return true
  } catch (e) {
    console.error('DB clear failed', e)
    return false
  }
}
