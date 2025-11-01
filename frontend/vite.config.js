import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  // Provide a minimal shim for `process.env` so libraries that reference
  // `process` at runtime in the browser don't throw `process is not defined`.
  // For real environment variables use `import.meta.env.VITE_*`.
  define: {
    'process.env': {}
  },
  plugins: [react(), tailwindcss()],
})
