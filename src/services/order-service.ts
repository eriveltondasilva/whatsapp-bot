import { LoggerService } from '@/services/logger-service.js'
import { inject, injectable } from 'tsyringe'

import { OrderRepository } from '@/repositories/index.js'

import type { OrderItem, OrderStatus, PaymentMethod } from '@/types.js'

@injectable()
export class OrderService {
  constructor(
    @inject(LoggerService) private logger: LoggerService,
    @inject(OrderRepository) private orderRepository: OrderRepository,
    // @inject(ProductService) private productService: ProductService,
  ) {}

  public async createOrder(address = '') {
    // return await this.orderRepository.createOrder({
    //   deliveryAddress: address,
    //   customer: '',
    // })
  }

  public getOrder(orderId: number) {
    // return this.orders.get(orderId) || null
  }

  public addItemToOrder(orderId: number, item: OrderItem) {
    // const order = this.getOrder(orderId)
    // if (!order) return null
    // order.items.push(item)
    // order.totalPrice = this.calculateTotalPrice(order.items)
    // return order
  }

  public updateOrderStatus(orderId: number, status: OrderStatus) {
    // const order = this.getOrder(orderId)
    // if (!order) return null
    // order.status = status
    // return order
  }

  public setPaymentMethod(orderId: number, method: PaymentMethod, change?: number) {
    // const order = this.getOrder(orderId)
    // if (!order) return null
    // order.paymentMethod = method
    // if (change) {
    //   order.change = change
    // }
    // return order
  }

  // ###
  private calculateTotalPrice(items: OrderItem[]) {
    // return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }
}
