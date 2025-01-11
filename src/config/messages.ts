export const Message = {
  WELCOME: `
    🍕 Bem-vindo à nossa Pizzaria!
    Para fazer seu pedido, primeiro preciso de algumas informações.
  `,
  ASK_NAME: 'Qual é o seu nome?',
  INVALID_OPTION: '❌ Opção inválida. Por favor, tente novamente.',
  ERROR: '❌ Desculpe, ocorreu um erro. Por favor, tente novamente.',
} as const

export const RegistrationMessage = {
  INVALID_NAME: 'Por favor, digite um nome válido:',
  INVALID_ADDRESS:
    'Por favor, digite um endereço completo com rua, número e bairro:',
  ASK_FOR_ADDRESS:
    'Ótimo! Agora preciso do seu endereço completo para entrega:',
} as const

export const OrderMessage = {
  PLACED: '🍕 Pedido realizado com sucesso!',
  CONFIRMED: '✅ Pedido confirmado com sucesso!',
  PREPARING: '👨‍🍳 Seu pedido está sendo preparado!',
  DELIVERING: '🛵 Seu pedido está a caminho!',
  COMPLETED: '🎉 Pedido entregue! Agradecemos a preferência!',
  CANCELLED: '❌ Pedido cancelado.',
  DELIVERY_TIME: '🕒 Tempo estimado de entrega:',
  NO_AVAILABLE_PIZZAS: '❌ Nenhuma pizza disponível para essa quantidade.',
} as const

export const MenuMessage = {
  MAIN: `
  🍕 Menu Principal:
  1 - Ver cardápio de pizzas
  2 - Ver cardápio de bebidas
  3 - Acompanhar pedido
  4 - Falar com atendente

  Digite o número da opção desejada:`,
  PIZZAS: '🍕 Cardápio de Pizzas',
  DRINKS: '🍻 Cardápio de Bebidas',
} as const
