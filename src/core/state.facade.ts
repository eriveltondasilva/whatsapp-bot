import { inject, singleton } from 'tsyringe'

import { StateManager } from '@/core/state-manager.js'
import { CartService } from '@/services/state/cart.service.js'
import { ContextService } from '@/services/state/context.service.js'
import { CustomerService } from '@/services/state/customer.service.js'

import type { Flows } from '@/config/enums.js'
import type { CartItem, Customer } from '@/types/entities.js'
import type { FlowContext, FlowState, FlowData } from '@/types/flows.js'

@singleton()
export class StateFacade {
  constructor(
    @inject(CartService) private readonly cartService: CartService,
    @inject(ContextService) private readonly contextService: ContextService,
    @inject(CustomerService) private readonly customerService: CustomerService,
    @inject(StateManager) private readonly stateManager: StateManager,
  ) {}

  //# CONTEXT METHODS
  public getState(phone: string): FlowState {
    return this.stateManager.get(phone)
  }

  public updateContext(phone: string, context: Partial<FlowContext>): FlowState {
    const state = this.getState(phone)
    return this.contextService.updateContext(phone, state, context)
  }

  public updateFlow(phone: string, flow: Flows): FlowState {
    const state = this.getState(phone)
    return this.contextService.updateFlow(phone, state, flow)
  }

  public updateData(phone: string, data: FlowData): FlowState {
    const state = this.getState(phone)
    return this.contextService.updateData(phone, state, data)
  }

  public clearData(phone: string): FlowState {
    const state = this.getState(phone)
    return this.contextService.clearData(phone, state)
  }

  //# CUSTOMER METHODS
  public updateCustomer(phone: string, customer: Partial<Customer>): FlowState {
    const state = this.getState(phone)
    return this.customerService.updateCustomer(phone, state, customer)
  }

  //# CART METHODS
  public addToCart(phone: string, item: CartItem): FlowState {
    const state = this.getState(phone)
    return this.cartService.addToCart(phone, state, item)
  }

  public removeFromCart(phone: string, index: number): FlowState {
    const state = this.getState(phone)
    return this.cartService.removeFromCart(phone, state, index)
  }

  public clearCart(phone: string): FlowState {
    const state = this.getState(phone)
    return this.cartService.clearCart(phone, state)
  }

  // public getCartTotal(phone: string): number {
  //   const state = this.getState(phone)
  //   return this.cartService.getCartTotal(state)
  // }

  //# STATE MANAGEMENT
  public hasState(phone: string): boolean {
    return this.stateManager.has(phone)
  }

  public resetState(phone: string): FlowState {
    return this.stateManager.reset(phone)
  }

  public deleteState(phone: string): boolean {
    return this.stateManager.delete(phone)
  }

  public clearAllStates(): void {
    this.stateManager.clearAllStates()
  }
}
