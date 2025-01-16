import type { Whatsapp } from '@wppconnect-team/wppconnect'

import type { OrderStatus } from '@/config/enums.js'

export class NotificationService {
  constructor(private client: Whatsapp) {}

  async sendOrderStatusUpdate(
    phoneNumber: string,
    status: OrderStatus,
    orderId: number,
  ) {
    const statusMessages: Record<OrderStatus, string> = {
      pending: `Seu pedido #${orderId} chegou ao restaurante! 🍴`,
      confirmed: `Pedido #${orderId} confirmado! Iniciando o preparo. 👨‍🍳`,
      preparing: `Seu pedido #${orderId} está sendo preparado com muito carinho! 🔥`,
      delivering: `Pedido #${orderId} saiu para entrega! 🛵`,
      completed: `Pedido #${orderId} entregue! Agradecemos a preferência! ⭐`,
      cancelled: `Pedido #${orderId} foi cancelado. 😢`,
    }

    const message = statusMessages[status]
    if (message) {
      await this.client.sendText(phoneNumber, message)
    }
  }

  async sendDeliveryTime(
    phoneNumber: string,
    orderId: number,
    deliveryTime: number,
  ) {
    const message = `
     🕒 Tempo estimado de entrega para o pedido #${orderId}:
    ${Math.round(deliveryTime / 60)} minutos.

    Acompanhe o status do seu pedido digitando "3" no menu principal.
    `

    await this.client.sendText(phoneNumber, message)
  }
}
