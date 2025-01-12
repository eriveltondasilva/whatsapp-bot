import { OrderStatus, PaymentMethod } from '../config/enums.js'
import type { Customer, Order, OrderItem, Product } from '../types/index.js'

export function formatCurrency(value: number): string {
  return `R$ ${value.toFixed(2).replace('.', ',')}`
}

function formatPaymentMethod(method?: PaymentMethod) {
  if (method === undefined) return 'Não definido'

  if (Object.values(PaymentMethod).includes(method)) {
    return method
  }

  return 'Método de pagamento inválido'
}

function formatOrderStatus(status: OrderStatus): string {
  const statusDescriptions: Record<OrderStatus, string> = {
    [OrderStatus.PENDING]: '🕒 Pendente',
    [OrderStatus.CONFIRMED]: '✅ Confirmado',
    [OrderStatus.PREPARING]: '👨‍🍳 Preparando',
    [OrderStatus.DELIVERING]: '🛵 Em entrega',
    [OrderStatus.COMPLETED]: '🎉 Entregue',
    [OrderStatus.CANCELLED]: '❌ Cancelado',
  } as const

  return statusDescriptions[status as OrderStatus] ?? 'Status desconhecido'
}

function formatOrderItem(item: OrderItem) {
  const totalItemPrice = item.price * item.quantity
  return `${item.quantity}x ${item.name} - ${formatCurrency(totalItemPrice)}`
}

export function formatOrderSummary(order: Order, customer: Customer) {
  const formattedItems = order.items.map(formatOrderItem).join('\n')

  return `
  📝 Resumo do Pedido #${order.id}

  Cliente: ${customer.name}
  Endereço: ${customer.address}

  Itens do Pedido:
  ${formattedItems}

  Total: ${formatCurrency(order.totalPrice)}
  Forma de Pagamento: ${formatPaymentMethod(order.paymentMethod)}
  ${order.change ? `Troco para: ${formatCurrency(order.change)}` : ''}

  Status: ${formatOrderStatus(order.status)}
  `
}

export function formatProductList(items: Product[]) {
  const formattedItems = items
    .map((item) => {
      const description = item.description || 'Sem descrição'
      const unavailable = !item.isAvailable ? '❌ Indisponível no momento' : ''

      return `
        ${item.id}. *${item.name}* - ${formatCurrency(item.price)}
        ${description}
        ${unavailable}
      `
    })
    .join('\n')

  return `
  🍕 *Cardápio*:

  ${formattedItems}

  Digite o número da item desejada para adicionar ao seu pedido.
  Para ver mais detalhes de uma item específica,
  digite "info" seguido do número (exemplo: "info 1").
`
}
