import { OrderStatus, type PaymentMethod } from '../config/enums.js'
import type { Order, OrderItem } from '../types/index.js'

export class OrderService {
  private orders: Map<number, Order> = new Map()
  private currentOrderId = 1

  createOrder(customerId: number) {
    const order: Order = {
      id: this.currentOrderId++,
      customerId,
      items: [],
      status: OrderStatus.PENDING,
      totalPrice: 0,
      createdAt: new Date(),
    }

    this.orders.set(order.id, order)
    return order
  }

  getOrder(orderId: number) {
    return this.orders.get(orderId) || null
  }

  addItemToOrder(orderId: number, item: OrderItem) {
    const order = this.getOrder(orderId)
    if (!order) return null

    order.items.push(item)
    order.totalPrice = this.calculateTotalPrice(order.items)
    return order
  }

  updateOrderStatus(orderId: number, status: OrderStatus) {
    const order = this.getOrder(orderId)
    if (!order) return null

    order.status = status
    return order
  }

  setPaymentMethod(orderId: number, method: PaymentMethod, change?: number) {
    const order = this.getOrder(orderId)
    if (!order) return null

    order.paymentMethod = method

    if (change) {
      order.change = change
    }

    return order
  }

  private calculateTotalPrice(items: OrderItem[]) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }
}
