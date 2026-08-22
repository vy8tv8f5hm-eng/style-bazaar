import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'StyleBazaar - ستايل بازار',
        short_name: 'StyleBazaar',
        description: 'تطبيق التسوق الأنيق للموضة السعودية',
        theme_color: '#6E2A3C',
        background_color: '#FBF6F1',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        dir: 'rtl',
        lang: 'ar-SA',
        categories: ['shopping', 'lifestyle'],
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  server: {
    port: 5173,
    open: true
  }
});
