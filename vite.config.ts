import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages repo deployment serves files under /PortfolioWebsite/.
  base: command === 'build' ? '/PortfolioWebsite/' : '/',
}))
