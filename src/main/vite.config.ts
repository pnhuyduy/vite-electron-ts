import { builtinModules } from 'module'
import { defineConfig } from 'vite'
import pkg from '../../package.json'

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../dist/main',
    emptyOutDir: true,
    minify: process.env.NODE_ENV === 'production',
    sourcemap: false,
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
      fileName: () => '[name].cjs',
    },
    rollupOptions: {
      external: [
        'electron',
        ...builtinModules,
        ...Object.keys(pkg.dependencies || {}),
      ],
    },
  },
})
