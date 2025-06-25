import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {  // 👈 ADD this block
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts', // optional, but recommended
  },
})
