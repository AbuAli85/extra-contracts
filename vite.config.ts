import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',           // Use jsdom for React tests
    globals: true,                  // Allow global test API (describe, it, expect)
    setupFiles: './src/setupTests.ts'
  },
  // aliasing is not usually needed for @testing-library/react
  // but if you need to alias something, do it like this:
  // resolve: {
  //   alias: {
  //     'my-alias': '/actual/path',
  //   },
  // },
})
