// services/state/CartManager.ts
import { inject, injectable } from 'tsyringe'

import { StateManager } from '@/core/state-manager.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { CartItem } from '@/types/entities.js'
import type { FlowState } from '@/types/flows.js'

@injectable()
export class CartService {
  constructor(
    @inject(StateManager) private readonly stateManager: StateManager,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  //#
  public addToCart(phone: string, currentState: FlowState, item: CartItem): FlowState {
    const updatedState = {
      ...currentState,
      cart: [...currentState.cart, item],
    }

    this.stateManager.set(phone, updatedState)
    this.logger.debug('Item adicionado ao carrinho', { item })

    return updatedState
  }

  public removeFromCart(phone: string, currentState: FlowState, index: number): FlowState {
    if (index < 0 || index >= currentState.cart.length) {
      this.logger.warn('Tentativa de remover item do carrinho com índice inválido', { index })
      return currentState
    }

    const newCart = [...currentState.cart]
    newCart.splice(index, 1)

    const updatedState = {
      ...currentState,
      cart: newCart,
    }

    this.stateManager.set(phone, updatedState)
    this.logger.debug('Item removido do carrinho', { index })

    return updatedState
  }

  public clearCart(phone: string, currentState: FlowState): FlowState {
    const updatedState = {
      ...currentState,
      cart: [],
    }

    this.stateManager.set(phone, updatedState)
    this.logger.debug('Carrinho limpo')

    return updatedState
  }

  //   public getCartTotal(state: FlowState): number {
  //     return state.cart.reduce((total, item) => {
  //       const itemTotal = (item.price || 0) * (item.quantity || 1)
  //       const extrasTotal = item.extras?.reduce((sum, extra) => sum + (extra.price || 0), 0) || 0
  //       return total + itemTotal + extrasTotal
  //     }, 0)
  //   }
}
