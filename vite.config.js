import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/publictest2/',
  define: {
    'process.env': {},
  },
})