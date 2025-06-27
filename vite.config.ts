import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',           // Use jsdom for React tests
    globals: true,                  // Allow global test API (describe, it, expect)
    setupFiles: './src/setupTests.ts',
    alias: {
      // Ensure imports of @testing-library/react resolve correctly
      '@testing-library/react': join(__dirname, 'node_modules/@testing-library/react'),
    },
  },
})
