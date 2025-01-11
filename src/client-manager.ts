// TODO: implement client manager

// import { type Whatsapp, create } from '@wppconnect-team/wppconnect'
// import { PHONE_NUMBER, SESSION_NAME } from './config/constants.js'

// export class ClientManager {
//   private static instance: ClientManager
//   private client: Whatsapp | null = null

//   private constructor() {}

//   getInstance(): ClientManager {
//     if (!ClientManager.instance) {
//       ClientManager.instance = new ClientManager()
//     }
//     return ClientManager.instance
//   }

//   async getClient() {
//     if (!this.client) {
//       this.client = await create({
//         session: SESSION_NAME,
//         phoneNumber: PHONE_NUMBER,
//       })
//     }
//     return this.client
//   }
// }
