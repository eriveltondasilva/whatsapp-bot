// services/state/CartManager.ts
import { inject, injectable } from 'tsyringe'

import { StateStorage } from '@/managers/state-storage.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { CartItem, FlowState } from '@/types/index.js'

@injectable()
export class CartService {
  constructor(
    @inject(StateStorage) private readonly storage: StateStorage,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  //#
  public addToCart(phone: string, currentState: FlowState, item: CartItem): FlowState {
    const updatedState = {
      ...currentState,
      cart: [...currentState.cart, item],
    }

    this.storage.set(phone, updatedState)
    this.logger.debug('Item adicionado ao carrinho', { item })

    return updatedState
  }

  //   public updateCartItem(
  //     phone: string,
  //     state: FlowState,
  //     index: number,
  //     updates: Partial<PizzaItem>,
  //   ): FlowState {
  //     if (index < 0 || index >= state.cart.length) {
  //       this.logger.warn('Tentativa de atualizar item do carrinho com índice inválido', { index })
  //       return state
  //     }

  //     const newCart = [...state.cart]
  //     newCart[index] = {
  //       ...newCart[index],
  //       ...updates,
  //     }

  //     const updatedState = {
  //       ...state,
  //       cart: newCart,
  //     }

  //     this.storage.set(phone, updatedState)
  //     this.logger.debug('Item do carrinho atualizado', { index, updates })

  //     return updatedState
  //   }

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

    this.storage.set(phone, updatedState)
    this.logger.debug('Item removido do carrinho', { index })

    return updatedState
  }

  public clearCart(phone: string, currentState: FlowState): FlowState {
    const updatedState = {
      ...currentState,
      cart: [],
    }

    this.storage.set(phone, updatedState)
    this.logger.debug('Carrinho limpo')

    return updatedState
  }

  //   public getCartTotal(state: FlowState): number {
  //     return state.cart.reduce((total, item) => {
  //       const itemTotal = item.price * item.quantity
  //       const extrasTotal = item.extras?.reduce((sum, extra) => sum + extra.price, 0) || 0
  //       return total + itemTotal + extrasTotal
  //     }, 0)
  //   }
}
