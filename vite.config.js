import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'প্রজ্ঞাকোষ — মন ও প্রজ্ঞার অভিধান',
        short_name: 'প্রজ্ঞাকোষ',
        description: 'নিউরোলজি, নিউরোসায়েন্স, সাইকোলজি, ফিলোসফি, সেল্ফ-হেল্প, সেল্ফ-ডেভেলপমেন্ট, ধৈর্য ও অধ্যবসায়ের ৫০০ পরিভাষার ইন্টারেক্টিভ অভিধান — বিখ্যাত উক্তি ও বইসহ।',
        theme_color: '#0F1220',
        background_color: '#0F1220',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        lang: 'bn',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        // App has zero runtime network calls (no images, no APIs) — everything
        // needed is bundled, so precache handles full offline support.
        cleanupOutdatedCaches: true
      },
      devOptions: {
        enabled: false
      }
    })
  ]
})
