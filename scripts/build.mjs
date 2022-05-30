import { build } from 'vite'

await build({ configFile: 'src/main/vite.config.ts' })
await build({ configFile: 'src/preload/vite.config.ts' })
await build({ configFile: 'src/render/vite.config.ts' })
