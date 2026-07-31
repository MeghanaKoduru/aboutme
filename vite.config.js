import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://meghanakoduru.github.io/portifolio_project/
  base: '/portifolio_project/',
  plugins: [react()],
})
