import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Change from '/' to './' for GitHub Pages relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Adjust for CI environments
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'markdown-vendor': ['react-markdown', 'remark-gfm', 'rehype-raw', 'rehype-sanitize', 'rehype-highlight'],
        }
      }
    }
  },
  // Add optimizeDeps for better dependency handling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
