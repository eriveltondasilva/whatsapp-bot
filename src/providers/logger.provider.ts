import { join } from 'node:path'
import { env } from 'node:process'
import { singleton } from 'tsyringe'
import { type Logger as WinstonLogger, createLogger, format, transports } from 'winston'

import { LOG_LEVEL } from '@/config/constants.js'

type LogMeta = Record<string, unknown>

interface ILogger {
  info(message: string, meta?: LogMeta): void
  ok(message: string, meta?: LogMeta): void
  warn(message: string, meta?: LogMeta): void
  debug(message: string, meta?: LogMeta): void
  error(message: string, meta?: unknown): void
}

@singleton()
export class LoggerProvider implements ILogger {
  private readonly logger: WinstonLogger
  private readonly logDir: string = 'logs'
  private readonly maxFiles: number = 5
  private readonly maxSize: number = 5 * 1_024 * 1_024 // 5MB
  private readonly isProduction: boolean = env.NODE_ENV === 'production'

  constructor() {
    this.logger = this.createLogger()
  }

  // ###
  info(message: string, meta?: LogMeta): void {
    this.logger.info(message, meta)
  }

  ok(message: string, meta?: LogMeta): void {
    this.logger.info(`✅ ${message}`, meta)
  }

  warn(message: string, meta?: LogMeta): void {
    this.logger.warn(`⚠️ ${message}`, meta)
  }

  debug(message: string, meta?: LogMeta): void {
    this.logger.warn(`⚙️ ${message}`, meta)
  }

  error(message: string, meta?: unknown): void {
    this.logger.error(`❌ ${message}`, meta)
  }

  // ###
  private createLogger(): WinstonLogger {
    const logger = createLogger({
      level: this.isProduction ? LOG_LEVEL : 'debug',
      // defaultMeta: { service: SESSION_NAME },
      transports: this.createFileTransports(),
    })

    if (!this.isProduction) logger.add(this.createConsoleTransport())

    return logger
  }

  private createFileTransports() {
    const logFormat = format.combine(
      format.errors(),
      format.timestamp(),
      format.metadata({
        key: 'meta',
        fillExcept: ['level', 'message', 'timestamp'],
      }),
      format.prettyPrint(),
    )

    return [
      new transports.File({
        level: 'error',
        filename: join(this.logDir, 'error.log'),
        format: logFormat,
        maxsize: this.maxSize,
        maxFiles: this.maxFiles,
      }),
      new transports.File({
        level: 'info',
        filename: join(this.logDir, 'combined.log'),
        format: logFormat,
        maxsize: this.maxSize,
        maxFiles: this.maxFiles,
      }),
    ]
  }

  private createConsoleTransport() {
    return new transports.Console({
      format: format.combine(
        format.colorize({ all: true }),
        format.errors(),
        format.align(),
        format.simple(),
      ),
    })
  }
}
