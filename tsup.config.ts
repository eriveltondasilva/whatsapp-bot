import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src', '!src/**/*.{test,spec}.ts'],
  format: 'esm',
  splitting: false,
  // minify: true,
  sourcemap: true,
  clean: true,
  tsconfig: 'tsconfig.json',
})
