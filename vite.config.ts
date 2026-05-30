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
    rolldownOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('vuetify')) {
            return 'vuetify';
          }
          if (id.includes('node_modules/vue') || id.includes('node_modules/vue-router') || id.includes('node_modules/pinia') || id.includes('node_modules/vue-i18n')) {
            return 'vue-core';
          }
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
