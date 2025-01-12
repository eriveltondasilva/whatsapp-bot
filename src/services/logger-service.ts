import {
  type Logger as WinstonLogger,
  createLogger,
  format,
  transports,
} from 'winston'
import { SESSION_NAME } from '../config/env.js'

export class LoggerService {
  private logger: WinstonLogger

  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
      ),
      defaultMeta: { service: SESSION_NAME },
      transports: [
        new transports.File({
          filename: 'logs/error.log',
          level: 'error',
        }),
        new transports.File({
          filename: 'logs/combined.log',
        }),
      ],
    })

    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(
        new transports.Console({
          format: format.combine(format.colorize(), format.simple()),
        }),
      )
    }
  }

  public info(message: string, meta?: any): void {
    this.logger.info(message, meta)
  }

  public error(message: string, meta?: any): void {
    this.logger.error(message, meta)
  }

  public warn(message: string, meta?: any): void {
    this.logger.warn(message, meta)
  }

  public debug(message: string, meta?: any): void {
    this.logger.debug(message, meta)
  }
}
