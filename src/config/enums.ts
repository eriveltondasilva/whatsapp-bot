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
  INITIAL: 'initial',
  AWAITING_NAME: 'awaiting_name',
  AWAITING_ADDRESS: 'awaiting_address',
  AWAITING_BIRTHDAY: 'awaiting_birthday',
  MENU: 'menu',
  SELECTING_PIZZA: 'selecting_pizza',
  SELECTING_DRINK: 'selecting_drink',
  SELECTING_QUANTITY: 'selecting_quantity',
  SELECTING_PAYMENT: 'selecting_payment',
  AWAITING_PAYMENT: 'awaiting_payment',
  AWAITING_CHANGE: 'awaiting_change',
  CONFIRMING_ORDER: 'confirming_order',
} as const
export type FlowStep = (typeof FlowStep)[keyof typeof FlowStep]

// export const XxxFlowStep = {
//   INITIAL: 'initial',
//   //
//   COLLECT_NAME: 'collect_name',
//   COLLECT_ADDRESS: 'collect_address',
//   COLLECT_BIRTHDAY: 'collect_birthday',
//   //
//   MENU: 'menu',
//   //
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
