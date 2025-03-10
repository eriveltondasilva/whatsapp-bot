import { join } from 'node:path'
import { singleton } from 'tsyringe'
import { type Logger as WinstonLogger, createLogger, format, transports } from 'winston'

import { LOG_LEVEL } from '@/config/constants.js'

type LogMeta = Record<string, unknown>

interface LoggerI {
  info(message: string, meta?: LogMeta): void
  ok(message: string, meta?: LogMeta): void
  warn(message: string, meta?: LogMeta): void
  error(message: string, meta?: unknown): void
}

@singleton()
export class LoggerProvider implements LoggerI {
  private readonly logger: WinstonLogger
  private readonly logDir: string = 'logs'
  private readonly maxFiles: number = 5
  private readonly maxSize: number = 5 * 1_024 * 1_024 // 5MB

  constructor() {
    this.logger = this.createLogger()
  }

  private createLogger(): WinstonLogger {
    const logger = createLogger({
      level: LOG_LEVEL,
      // defaultMeta: { service: SESSION_NAME },
      transports: this.createFileTransports(),
    })

    if (process.env.NODE_ENV !== 'production') logger.add(this.createConsoleTransport())

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
        format: logFormat,
        filename: join(this.logDir, 'error.log'),
        level: 'error',
        maxsize: this.maxSize,
        maxFiles: this.maxFiles,
      }),
      new transports.File({
        format: logFormat,
        filename: join(this.logDir, 'combined.log'),
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

  // ###
  public info(message: string, meta?: LogMeta): void {
    this.logger.info(message, meta)
  }

  public ok(message: string, meta?: LogMeta): void {
    this.logger.info(`✅ ${message}`, meta)
  }

  public warn(message: string, meta?: LogMeta): void {
    this.logger.warn(`⚠️ ${message}`, meta)
  }

  public error(message: string, meta?: unknown): void {
    this.logger.error(`❌ ${message}`, meta)
  }
}
