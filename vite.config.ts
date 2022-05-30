import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import electron from 'vite-plugin-electron'
const root = resolve(__dirname, 'src/render')
const outDir = resolve(__dirname, 'dist/render')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: './',
  build: {
    outDir,
    emptyOutDir: true,
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/render'),
    },
  },
})
