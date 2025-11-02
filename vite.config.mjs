import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESM config file for Vite so ESM-only plugins load correctly
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
