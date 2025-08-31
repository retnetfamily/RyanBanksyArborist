import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  base: '/RyanBanksyArborist/', // keep for GitHub Pages
  build: {
    target: 'es2018',       // modern
    sourcemap: false,       // smaller output
    cssCodeSplit: true,     // split CSS by chunk
  },
  esbuild: {
    drop: ['console', 'debugger'], // trim debug statements
  },
  
})
