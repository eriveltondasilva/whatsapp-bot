import { singleton } from 'tsyringe'
import { type Logger as WinstonLogger, createLogger, format, transports } from 'winston'

import { SESSION_NAME } from '@/config/constants.js'

interface ILogger {
  info(message: string, ...meta: unknown[]): void
  debug(message: string, ...meta: unknown[]): void
  ok(message: string, ...meta: unknown[]): void
  error(message: string, ...meta: unknown[]): void
  warn(message: string, ...meta: unknown[]): void
}

@singleton()
export class LoggerProvider implements ILogger {
  private logger: WinstonLogger

  constructor() {
    this.logger = createLogger({
      level: 'debug',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.splat(),
        format.cli(),
        format.colorize(),
      ),
      defaultMeta: { service: SESSION_NAME },
      transports: [new transports.Console()],
    })
  }

  public info(message: string, ...meta: unknown[]): void {
    this.logger.info(message, ...meta)
  }

  public debug(message: string, ...meta: unknown[]): void {
    this.logger.debug(message, ...meta)
  }

  public ok(message: string, ...meta: unknown[]): void {
    this.logger.info(`✅ ${message}`, ...meta)
  }

  public error(message: string, ...meta: unknown[]): void {
    this.logger.error(`❌ ${message}`, ...meta)
  }

  public warn(message: string, ...meta: unknown[]): void {
    this.logger.warn(`⚠️ ${message}`, ...meta)
  }
}
