import { LoggerProvider } from '@/providers/logger.provider.js'
import { container } from 'tsyringe'

export function Logger() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    descriptor.value = async function (...args: any[]) {
      const logger = container.resolve(LoggerProvider)
      const result = await originalMethod.apply(this, args)
      logger.info(`📌 ${propertyKey} returned: ${JSON.stringify(result)}`)
      return result
    }
  }
}
