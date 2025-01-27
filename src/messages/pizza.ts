import type { Pizza } from '@/types.js'
import { formatCurrency } from '@/utils/format-currency.js'

export const PizzaMessages = {
  INVALID_TYPE: [
    '❌ Opção inválida! Por favor, escolha:',
    '1️⃣ - Pizza inteira 🍕',
    '2️⃣ - Pizza dois sabores 🍕🍕',
  ],

  NO_FLAVORS_AVAILABLE: [
    '❌ Desculpe, não encontramos sabores disponíveis no momento.',
  ],

  INVALID_FLAVOR: [
    '❌ OPÇÃO INVÁLIDA!',
    'Por favor, digite um número válido da opção desejada.\n',
    '✍️ *Digite o número da opção desejada:*',
  ],

  SELECT_QUANTITY: ['🔢 Digite a quantidade desejada (1-5):'],

  INVALID_QUANTITY: [
    '❌ Quantidade inválida!',
    'Por favor, digite um número entre 1 e 5.',
  ],

  INVALID_STEP: ['❌ Ocorreu um erro no fluxo. Por favor, tente novamente.'],

  SELECT_FLAVOR_FULL: '🍕 *ESCOLHA O SABOR DA PIZZA:*\n',
  SELECT_FLAVOR_HALF: '🍕 *ESCOLHA O PRIMEIRO SABOR DA PIZZA:*\n',
  SELECT_SECOND_FLAVOR: '🍕 *ESCOLHA O SEGUNDO SABOR DA PIZZA:*\n',

  TYPE_NUMBER: '\n✍️ *Digite o número da opção desejada:*',
  TYPE_SECOND_FLAVOR: '\n✍️ *Digite o número do segundo sabor:*',

  ORDER_OPTIONS: [
    '1️⃣ - Pizza inteira 🍕',
    '2️⃣ - Pizza dois sabores 🍕🍕',
    '3️⃣ - Bebidas 🍺',
    '4️⃣ - Finalizar pedido 🛒',
    '0️⃣ - Cancelar pedido ❌',
  ],

  buildProductList: (products: Pizza[]) => {
    return products.map((product) => {
      const ingredients = product.ingredients.join(', ') || 'Sem descrição'
      return `${product.id}️⃣ - ${product.name} - R$ ${product.price.toFixed(2)} - _${ingredients}_`
    })
  },
}

export function productList(items: Pizza[]): string[] {
  return items.map((item) => {
    const ingredients = item.ingredients.join(', ') || 'Sem descrição'
    return `${item.id}. ${item.name} - ${formatCurrency(item.price)} - _${ingredients}_\n`
  })
}
