import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { crx } from '@crxjs/vite-plugin'
import { fileURLToPath } from 'node:url'
import manifest from './manifest.json' assert {type: 'json'}
// https://vite.dev/config/
export default defineConfig({
  legacy: {
    skipWebSocketTokenCheck: true
  },
  plugins: [vue(), Unocss({}), crx({ manifest })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
