import { inject, singleton } from 'tsyringe'

import { StateStorage } from '@/core/state-storage.js'
import { CartService } from '@/services/state/cart.service.js'
import { ContextService } from '@/services/state/context.service.js'
import { CustomerService } from '@/services/state/customer.service.js'

import type { CartItem, Customer } from '@/types/entities.js'
import type { FlowContext, FlowState } from '@/types/flows.js'

@singleton()
export class StateFacade {
  constructor(
    @inject(CartService) private readonly cartService: CartService,
    @inject(ContextService) private readonly contextService: ContextService,
    @inject(CustomerService) private readonly customerService: CustomerService,
    @inject(StateStorage) private readonly storage: StateStorage,
  ) {}

  //#
  public getState(phone: string): FlowState {
    return this.storage.get(phone)
  }

  public updateContext(phone: string, context: Partial<FlowContext>): FlowState {
    const state = this.getState(phone)
    return this.contextService.updateContext(phone, state, context)
  }

  public updateStep(phone: string, step: string): FlowState {
    const state = this.getState(phone)
    return this.contextService.updateStep(phone, state, step)
  }

  public updateData(phone: string, data: FlowContext['data']): FlowState {
    const state = this.getState(phone)
    return this.contextService.updateData(phone, state, data)
  }

  public clearData(phone: string): FlowState {
    const state = this.getState(phone)
    return this.contextService.clearData(phone, state)
  }

  //*
  public updateCustomer(phone: string, customer: Partial<Customer>): FlowState {
    const state = this.getState(phone)
    return this.customerService.updateCustomer(phone, state, customer)
  }

  //*
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

  //*
  public resetState(phone: string): FlowState {
    return this.storage.reset(phone)
  }

  public deleteState(phone: string): boolean {
    return this.storage.delete(phone)
  }

  public clearAllStates(): void {
    this.storage.clear()
  }
}
