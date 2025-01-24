import {
  type Logger as WinstonLogger,
  createLogger,
  format,
  transports,
} from 'winston'

import { SESSION_NAME } from '@/config/env.js'

export class LoggerService {
  private logger: WinstonLogger

  constructor() {
    this.logger = createLogger({
      level: 'debug',
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.splat(),
        format.cli(),
        format.colorize(),
      ),
      defaultMeta: { service: SESSION_NAME },
      transports: [new transports.Console()],
    })
  }

  public info(message: string, ...meta: any): void {
    this.logger.info(message, meta)
  }

  public error(message: string, ...meta: any): void {
    this.logger.error(message, ...meta)
  }

  public warn(message: string, ...meta: any): void {
    this.logger.warn(message, ...meta)
  }

  public debug(message: string, ...meta: any): void {
    this.logger.debug(message, ...meta)
  }
}
