// import type { Customer, Order, OrderItem } from '@prisma/client'

// import { OrderStatus, PaymentMethod } from '@/config/enums.js'
// import { formatCurrency } from './format-currency.js'

// function formatPaymentMethod(method?: PaymentMethod) {
//   if (method === undefined) return 'Não definido'

//   if (Object.values(PaymentMethod).includes(method)) {
//     return method
//   }

//   return 'Método de pagamento inválido'
// }

// function formatOrderStatus(status: OrderStatus): string {
//   const statusDescriptions: Record<OrderStatus, string> = {
//     [OrderStatus.PENDING]: '🕒 Pendente',
//     // [OrderStatus.CONFIRMED]: '✅ Confirmado',
//     [OrderStatus.PREPARING]: '👨‍🍳 Preparando',
//     [OrderStatus.DELIVERING]: '🛵 Em entrega',
//     [OrderStatus.COMPLETED]: '🎉 Entregue',
//     [OrderStatus.CANCELLED]: '❌ Cancelado',
//   } as const

//   return statusDescriptions[status as OrderStatus] ?? 'Status desconhecido'
// }

// function formatOrderItem(item: OrderItem) {
//   const totalItemPrice = item.price * item.quantity
//   return `${item.quantity}x ${item.name} - ${formatCurrency(totalItemPrice)}`
// }

// export function formatOrderSummary(order: Order, customer: Customer) {
//   const formattedItems = order.items.map(formatOrderItem).join('\n')

//   return `
//   📝 Resumo do Pedido #${order.id}

//   Cliente: ${customer.name}
//   Endereço: ${customer.address}

//   Itens do Pedido:
//   ${formattedItems}

//   Total: ${formatCurrency(order.totalPrice)}
//   Forma de Pagamento: ${formatPaymentMethod(order.paymentMethod)}
//   ${order.change ? `Troco para: ${formatCurrency(order.change)}` : ''}

//   Status: ${formatOrderStatus(order.status)}
//   `
// }
