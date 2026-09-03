import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // TEMPORARY fallback: prabhuca.in's DNS isn't live yet, so this is set
  // back to the GitHub Pages subpath for now. Once prabhuca.in resolves and
  // the custom domain is confirmed working, switch this back to '/' and
  // restore public/CNAME (see git history around the "Connect custom
  // domain prabhuca.in" commit for the exact custom-domain values).
  base: '/Prabhu-Chauhan-Associates/',
})
