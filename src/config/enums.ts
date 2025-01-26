export const OrderStatus = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  DELIVERING: 'delivering',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

export const Category = {
  FOOD: 'pizza',
  DRINK: 'bebida',
  DESSERT: 'sobremesa',
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
  DEFAULT: 2 * 1_000, // 2 seconds
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
  REGISTRATION: 'registration:index',
  COLLECT_NAME: 'registration:collect-name',
  COLLECT_ADDRESS: 'registration:collect-address',
  //
  WELCOME: 'welcome:index',
  MAIN_MENU: 'main-menu:index',
  //
  ORDER: 'order:index',
  //
  PIZZA: 'pizza:index',
  PIZZA_TYPE: 'pizza:pizza-type',
  FIRST_HALF: 'pizza:first-half',
  SECOND_HALF: 'pizza:second-half',
  PIZZA_FLAVOR: 'pizza:pizza-flavor',
  PIZZA_SIZE: 'pizza:pizza-size',
  PIZZA_QUANTITY: 'pizza:pizza-quantity',
  //
  DRINK: 'drink:index',
  DRINK_TYPE: 'drink:drink-type',
  DRINK_QUANTITY: 'drink:drink-quantity',
  //
  CONFIRM_ORDER: 'order:confirm-order',
  //
  SELECT_PAYMENT: 'payment:select-payment',
  AWAITING_CHANGE: 'payment:await-change',
  //
  SEPARATOR: ':',
} as const
export type FlowStep = (typeof FlowStep)[keyof typeof FlowStep]

export const FlowKeys = {
  REGISTRATION: 'registration',
  WELCOME: 'welcome',
  MAIN_MENU: 'main-menu',
  ORDER: 'order',
  PIZZA: 'pizza',
  DRINK: 'drink',
  PAYMENT: 'payment',
} as const
export type FlowKeys = (typeof FlowKeys)[keyof typeof FlowKeys]

// export const XxxFlowStep = {
//   SELECT_PIZZA_TYPE: 'select_pizza_type',
//   SELECT_FIRST_HALF: 'select_first_half',
//   SELECT_SECOND_HALF: 'select_second_half',
//   SELECT_PIZZA_FLAVOR: 'select_pizza_flavor',
//   SELECT_PIZZA_SIZE: 'select_pizza_size',
//   SELECTING_PIZZA_QUANTITY: 'selecting_pizza_quantity',
//   //
//   SELECTING_DRINK: 'selecting_drink',
//   SELECTING_DRINK_QUANTITY: 'selecting_drink_quantity',
//   //
//   SELECTING_PAYMENT: 'selecting_payment',
//   AWAITING_PAYMENT: 'awaiting_payment',
//   AWAITING_CHANGE: 'awaiting_change',
//   CONFIRMING_ORDER: 'confirming_order',
//   //
//   TRACK_ORDER: 'track_order',
//   //
//   ORDER_HISTORY: 'order_history',
// } as const
