import { type Whatsapp, create } from '@wppconnect-team/wppconnect'
import { singleton } from 'tsyringe'

import { PHONE_NUMBER, SESSION_NAME } from '@/config/env.js'

@singleton()
export class ClientManager {
  private client: Whatsapp | null = null

  async getClient(): Promise<Whatsapp> {
    if (!this.client) {
      this.client = await create({
        session: SESSION_NAME,
        phoneNumber: PHONE_NUMBER,
      })
    }
    return this.client
  }
}
