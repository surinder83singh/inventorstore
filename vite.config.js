import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  root: 'src', // Set the project root to the src folder
  publicDir: '../public',// Ensure public assets are served correctly
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['images/*.png'],
      workbox: {
        // This pattern tells the PWA to cache EVERY file in your build
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'] 
      },
      manifest: {
        name: 'Inventor Store',
        short_name: 'IStore',
        theme_color: '#ffffff',
        icons: [
          { src: 'images/inventorstore-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'images/inventorstore-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  build: {
    outDir: '../dist', // Ensure build output goes to the actual project root
    emptyOutDir: true,
  }
})  