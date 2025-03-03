export function getDelay(min = 1_000, max = 5_000): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
