import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from "vite-plugin-vuetify";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'altcha-widget',
        }
      }
    }),
    vueDevTools(),
    vuetify({
      styles: { configFile: 'src/styles/settings.scss' },
      autoImport: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vuetify: ['vuetify'],
          vue: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
        },
      },
    },
    // Augmenter la limite d'avertissement si nécessaire
    chunkSizeWarningLimit: 1000, // kB
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
