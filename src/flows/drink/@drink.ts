import type { Drink } from '@/types/entities.js'

export type ContextData = {
  selectedDrink: Drink
  quantity: number
  subtotal: number
  unitPrice: number
}

export const MESSAGES = {
  CANCELED: '❌ PEDIDO CANCELADO',
  SUCCESS: '✅ Bebida adicionada ao carrinho com sucesso.',
} as const

export const STEP_INDICATORS = {
  DRINK: 'Etapa: 1/3',
  QUANTITY: 'Etapa: 2/3',
  FINISH: 'Etapa: 3/3',
} as const