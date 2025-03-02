export function getDelay() {
  const min = 1_000 // 1 sec
  const max = 10_000 // 10 sec

  return Math.floor(Math.random() * (max - min + 1)) + min
}
