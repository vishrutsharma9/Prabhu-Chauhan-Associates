import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Serving from the custom domain https://prabhuca.in/ (root), via the
  // public/CNAME file. If that domain is ever disconnected and the site
  // falls back to https://vishrutsharma9.github.io/Prabhu-Chauhan-Associates/,
  // change this back to '/Prabhu-Chauhan-Associates/'.
  base: '/',
})
