export const OrderStatus = {
  PENDING: 'pending',
  PREPARING: 'preparing',
  DELIVERING: 'delivering',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

export const Category = {
  FOOD: 'pizza',
  DRINK: 'bebida',
} as const
export type Category = (typeof Category)[keyof typeof Category]

export const PaymentMethod = {
  CREDIT: 'crédito',
  DEBIT: 'débito',
  CASH: 'dinheiro',
  // PIX: 'pix', // TODO: Added pix payment method
} as const
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

export const Delay = {
  PREPARATION: 2 * 60 * 1_000, // 2 minutes
  DELIVERY: 5 * 60 * 1_000, // 5 minutes
} as const
export type Delay = (typeof Delay)[keyof typeof Delay]

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
  MAIN_MENU: 'main-menu',
  ORDER: 'order',
  PIZZA: 'pizza',
  DRINK: 'drink',
  PAYMENT: 'payment',
} as const
export type FlowKeys = (typeof FlowKeys)[keyof typeof FlowKeys]
