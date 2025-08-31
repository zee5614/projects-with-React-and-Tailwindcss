   import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // In dev, proxy /api to the local backend to avoid CORS.
    export default defineConfig({
      plugins: [react()],
      server: {
        proxy: {
          '/api': {
            target: 'http://localhost:5000',
            changeOrigin: true,
            secure: false
          }
        }
      }
    })
