export const MessageType = {
  TEXT: 'text',
  LIST: 'list',
  IMAGE: 'image',
} as const
export type MessageType = (typeof MessageType)[keyof typeof MessageType]

export const PizzaType = {
  FULL: 'full',
  HALF: 'half',
} as const
export type PizzaType = (typeof PizzaType)[keyof typeof PizzaType]

export const ItemType = {
  PIZZA: 'pizza',
  DRINK: 'bebida',
} as const
export type ItemType = (typeof ItemType)[keyof typeof ItemType]

export const PaymentMethod = {
  CASH: 'dinheiro',
  CREDIT: 'cartão',
  DEBIT: 'débito',
} as const
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

export const OrderStatus = {
  PENDING: 'pendente',
  PREPARING: 'preparando',
  DELIVERING: 'entregando',
  COMPLETED: 'completo',
  CANCELLED: 'cancelado',
} as const
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

export const Validation = {
  NAME_MIN_LENGTH: 3,
  ADDRESS_MIN_LENGTH: 10,
  //
  MESSAGE_MIN_LENGTH: 1,
  MESSAGE_MAX_LENGTH: 100,
  //
  QUANTITY_MIN: 1,
  QUANTITY_MAX: 10,
} as const
export type Validation = (typeof Validation)[keyof typeof Validation]


export enum MenuOption {
  ORDER = '1',
  // ORDER_HISTORY = '2',
  // UPDATE_PROFILE = '3',
  EXIT = '0',
}

export enum OrderOption {
  FULL_PIZZA = '1',
  HALF_PIZZA = '2',
  DRINK = '3',
  COMPLETE = '4',
  CANCEL = '0',
}

export const FlowStep = {
  WELCOME: 'welcome',
  //
  REGISTRATION: 'registration',
  COLLECT_NAME: 'registration::collect-name',
  COLLECT_ADDRESS: 'registration::collect-address',
  //
  MAIN_MENU: 'main-menu',
  //
  ORDER: 'order',
  //
  PIZZA_TYPE: 'pizza::type',
  PIZZA_FLAVOR: 'pizza::flavor',
  PIZZA_CRUST: 'pizza::crust',
  PIZZA_QUANTITY: 'pizza::quantity',
  PIZZA_NOTES: 'pizza::notes',
  //
  DRINK: 'drink',
  DRINK_TYPE: 'drink::type',
  DRINK_QUANTITY: 'drink::quantity',
  //
  CONFIRM_ORDER: 'order::confirm-order',
  //
  PAYMENT: 'payment',
  PAYMENT_METHOD: 'payment::method',
  AWAITING_CHANGE: 'payment::await-change',
  PAYMENT_CONFIRMATION: 'payment::confirmation',
  //
  SEPARATOR: '::',
} as const
export type FlowStep = (typeof FlowStep)[keyof typeof FlowStep]

export const FlowKeys = {
  WELCOME: 'welcome',
  REGISTRATION: 'registration',
  MENU: 'menu',
  ORDER: 'order',
  PIZZA: 'pizza',
  DRINK: 'drink',
  PAYMENT: 'payment',
} as const
export type FlowKeys = (typeof FlowKeys)[keyof typeof FlowKeys]
