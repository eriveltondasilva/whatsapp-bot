import { type CreateOptions, type Whatsapp, create } from '@wppconnect-team/wppconnect'
import { singleton } from 'tsyringe'

import { PHONE_NUMBER, SESSION_NAME } from '@/config/constants.js'
import { logger } from '@/utils/index.js'

interface ClientServiceI {
  getClient(): Promise<Whatsapp>
  closeClient(): Promise<void>
}

@singleton()
export class ClientService implements ClientServiceI {
  private client: Whatsapp | null = null
  private readonly clientOptions: CreateOptions = {
    session: SESSION_NAME,
    phoneNumber: PHONE_NUMBER,
  }

  private async createClient(): Promise<Whatsapp> {
    try {
      const client = await create(this.clientOptions)
      logger.ok('Client initialized successfully')

      return client
    } catch (error) {
      logger.error('Failed to initialize client: %o', error)
      throw error
    }
  }

  public async getClient(): Promise<Whatsapp> {
    if (!this.client) {
      this.client = await this.createClient()
    }

    return this.client
  }

  public async closeClient(): Promise<void> {
    if (!this.client) {
      logger.warn('Client not initialized')
      return
    }

    try {
      await this.client.close()
      logger.ok('Client closed successfully')

      this.client = null
    } catch (error) {
      logger.error('Failed to close client: %o', error)
      throw error
    }
  }
}
