import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Serving from https://vishrutsharma9.github.io/Prabhu-Chauhan-Associates/
  // (a GitHub Pages project site, no custom domain yet), so assets need this
  // subpath — otherwise they 404. If a custom domain is added later (e.g.
  // https://yourfirm.com/), change this back to '/'.
  base: '/Prabhu-Chauhan-Associates/',
})
