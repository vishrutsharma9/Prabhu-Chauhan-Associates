import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // `base: '/'` is correct when this site is served from a custom domain
  // at the root (e.g. https://yourfirm.com/), which is how this project is
  // meant to be deployed. If you instead publish to GitHub Pages WITHOUT a
  // custom domain (i.e. at https://<username>.github.io/<repo-name>/),
  // change this to '/<repo-name>/' — see README.md → "Deploying to GitHub Pages".
  base: '/',
})
