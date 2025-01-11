// import type { CustomerService } from '../services/customer-service.js'
// import type { LoggerService } from '../services/logger-service.js'
// import type { OrderService } from '../services/order-service.js'
// import type { ProductService } from '../services/product-service.js'
// import type { FlowStateManager } from '../states/flow-state-manager.js'
// import type { FlowState } from '../types/index.js'

// export abstract class AbstractFlow {
//   constructor(
//     @inject('FlowStateManager') protected flowState: FlowStateManager,
//     @inject('CustomerService') protected customer: CustomerService,
//     @inject('LoggerService') protected logger: LoggerService,
//     @inject('OrderService') protected order: OrderService,
//     @inject('ProductService') protected product: ProductService,
//   ) {}

//   abstract handle(
//     phoneNumber: string,
//     message: string,
//     state: FlowState,
//   ): string
// }
