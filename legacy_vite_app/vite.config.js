import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { partytownVite } from '@builder.io/partytown/utils'
import { join } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    partytownVite({
      dest: join(process.cwd(), 'dist', '~partytown')
    })
  ],
  build: {
    cssMinify: true
  }
})
