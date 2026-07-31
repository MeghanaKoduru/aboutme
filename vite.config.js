import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://meghanakoduru.github.io/aboutme/
  base: '/aboutme/',
  plugins: [react()],
})
