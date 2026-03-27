import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/phone-catalog/',
  resolve: {
    alias: {
      '@modules': resolve(__dirname, 'src/modules'),
      '@public': resolve(__dirname, 'public'),
      '@mocks': resolve(__dirname, 'src/mocks'),
    },
  },
})
