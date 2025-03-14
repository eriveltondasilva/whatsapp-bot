import { type CreateOptions, type Whatsapp, create } from '@wppconnect-team/wppconnect'
import { inject, singleton } from 'tsyringe'

import { PHONE_NUMBER, SESSION_NAME } from '@/config/constants.js'
import { LoggerProvider } from './logger.provider.js'

export interface ClientProviderI {
  getClient(): Promise<Whatsapp>
  closeClient(): Promise<void>
}

@singleton()
export class ClientProvider implements ClientProviderI {
  private client: Whatsapp | null = null
  private readonly clientOptions: CreateOptions = {
    session: SESSION_NAME,
    phoneNumber: PHONE_NUMBER,
  }

  constructor(@inject(LoggerProvider) private logger: LoggerProvider) {}

  private async createClient(): Promise<Whatsapp> {
    try {
      const client = await create(this.clientOptions)
      this.logger.debug('Client initialized successfully')

      return client
    } catch (error) {
      this.logger.error('Failed to initialize client', error)
      throw error
    }
  }

  public async getClient(): Promise<Whatsapp> {
    if (!this.client) {
      this.client = await this.createClient()
    }

    this.logger.debug('Client retrieved successfully')
    return this.client
  }

  public async closeClient(): Promise<void> {
    if (!this.client) {
      this.logger.warn('No client to close - client not initialized')
      return
    }

    await this.client.close()
  }
}
