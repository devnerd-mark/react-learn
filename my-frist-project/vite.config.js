import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9000, // <-- your desired port
    open: true, // optional: opens the browser automatically
  },
})
