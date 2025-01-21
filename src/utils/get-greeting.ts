import { dayjs } from './dayjs.js'

export function getGreeting(): string {
  const hour = dayjs().hour()

  if (hour >= 6 && hour < 12) return 'Bom dia'
  if (hour >= 12 && hour < 18) return 'Boa tarde'
  return 'Boa noite'
}
