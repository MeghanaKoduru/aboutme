import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://meghanakoduru.github.io/ (user site — root path)
  base: '/',
  plugins: [react()],
})
