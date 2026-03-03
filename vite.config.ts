import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Relative asset paths make project-site deployment resilient to URL/path changes.
  base: command === 'build' ? './' : '/',
}))
