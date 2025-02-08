import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  format: 'esm',
  splitting: false,
  // minify: true,
  sourcemap: true,
  clean: true,
})
