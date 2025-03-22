// import { OrderStatus, PaymentMethod } from '@/config/enums.js'
// import type { Drink, Flavor, Order, Prisma } from '@prisma/client'

// interface IOrderBuilder {
//   addItem(item: Flavor | Drink): void
//   setDeliveryAddress(shippingAddress: string): void
//   addPaymentMethod(paymentMethod: PaymentMethod): void
//   build(): Order
// }

// export class OrderBuilder implements IOrderBuilder {
//   private order: Prisma.OrderCreateInput | undefined

//   constructor() {
//     this.reset()
//   }

//   addItem(item: Flavor | Drink): void {
//     throw new Error('Method not implemented.')
//   }

//   // ###
//   //   public addPizza(): this {
//   //     this.order.items.push()
//   //     return this
//   //   }

//   public setDeliveryAddress(deliveryAddress: string): this {
//     this.order.deliveryAddress = deliveryAddress
//     return this
//   }

//   public addPaymentMethod(paymentMethod: PaymentMethod): this {
//     this.order.paymentMethod = paymentMethod
//     return this
//   }

//   public build(): Order {
//     const order = this.order
//     this.reset()
//     return order
//   }

//   // ###
//   private reset(): void {
//     this.order = {
//       items: [],
//       shippingAddress: '',
//       paymentMethod: PaymentMethod.CASH,
//       deliveryAddress: '',
//       totalAmount: 0,
//       status: OrderStatus.PENDING,
//     }
//   }

//   private calculateTotalPrice(): void {
//     if (!this.order.items) return

//     this.order.totalAmount = this.order.items.reduce((total, item) => total + item.price, 0)
//   }
// }
