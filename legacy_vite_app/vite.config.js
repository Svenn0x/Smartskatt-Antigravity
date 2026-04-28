import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { partytownVite } from '@builder.io/partytown/utils'
import { compression } from 'vite-plugin-compression2'
import { join } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    partytownVite({
      dest: join(process.cwd(), 'dist', '~partytown')
    }),
    compression({ algorithm: 'brotliCompress', exclude: [/\.(br)$/, /\.(gz)$/], deleteOriginalAssets: false })
  ],
  build: {
    cssMinify: true
  }
})
