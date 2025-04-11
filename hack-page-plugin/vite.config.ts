import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { crx } from '@crxjs/vite-plugin'
import { fileURLToPath } from 'node:url'
import manifest from './manifest.json' assert {type: 'json'}
export default defineConfig({
  legacy: {
    skipWebSocketTokenCheck: true
  },
  plugins: [vue(), Unocss({}), crx({ manifest, contentScripts: { injectCss: true } })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
