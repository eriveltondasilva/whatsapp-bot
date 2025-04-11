const MILLISECONDS_IN_SECOND = 1_000

export function getDelay(min = 2, max = 6): number {
  if (min > max) throw new Error('min must be less than max')

  const minMs = min * MILLISECONDS_IN_SECOND
  const maxMs = max * MILLISECONDS_IN_SECOND

  return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs
}
