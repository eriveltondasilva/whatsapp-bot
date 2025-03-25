export function parseIndex(message: string): number {
  const index = Number.parseInt(message, 10)
  return index > 0 ? index - 1 : -1
}
