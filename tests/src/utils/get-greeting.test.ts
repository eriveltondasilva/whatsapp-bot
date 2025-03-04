// import { describe, beforeEach, afterEach, vi, it, expect } from 'vitest'

// import { getGreeting } from '../../../src/utils/index.js'

// describe('getGreeting:', () => {
//   beforeEach(() => {
//     vi.useFakeTimers()
//   })
//   afterEach(() => {
//     vi.useRealTimers()
//   })

//   it.each([
//     ['2023-01-01T06:00:00', 'Bom dia'],
//     ['2023-01-01T12:00:00', 'Boa tarde'],
//     ['2023-01-01T18:00:00', 'Boa noite'],
//   ])('should return a greeting based on the current time (%s)', (time, expected) => {
//     vi.setSystemTime(new Date(time))

//     const result = getGreeting()
//     expect(result).toBe(expected)
//   })
// })
