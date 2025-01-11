import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  splitting: false,
  // minify: true,
  sourcemap: true,
  clean: true,
})
