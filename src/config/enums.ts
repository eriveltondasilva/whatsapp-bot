export enum MessageType {
  TEXT = 'text',
  LIST = 'list',
}

export enum PizzaType {
  FULL = 'full',
  HALF = 'half',
}

export enum ItemType {
  PIZZA = 'pizza',
  DRINK = 'bebida',
}

export enum PaymentMethods {
  CREDIT = 'cartão de crédito',
  DEBIT = 'cartão de débito',
  CASH = 'dinheiro',
}

export enum OrderStatus {
  PENDING = 'pendente',
  PREPARING = 'preparando',
  DELIVERING = 'entregando',
  COMPLETED = 'completo',
  CANCELLED = 'cancelado',
}

export enum Validation {
  MIN_LENGTH = 1,
  MAX_LENGTH = 100,
  QUANTITY_MIN = 1,
  QUANTITY_MAX = 10,
}

// ###
export enum MenuOptions {
  ORDER_MENU = '1',
  ORDER_TRACKING = '2',
  ORDER_HISTORY = '3',
  PROFILE = '4',
  SUPPORT = '5',
  EXIT = '0',
}

export enum OrderOptions {
  ONE_PIZZA = '1',
  TWO_PIZZA = '2',
  DRINK = '3',
  CHECKOUT = '4',
  CANCEL = '0',
}

// ###
export enum FLOWS {
  //* Fluxos de registro do usuário
  REGISTRATION_START = 'registration_start',
  REGISTRATION_NAME = 'registration_name',
  REGISTRATION_ADDRESS = 'registration_address',

  //* Fluxos de navegação principal
  WELCOME = 'welcome',
  MENU = 'menu',
  ORDER = 'order',

  //* Fluxos relacionados a pedidos de pizza
  PIZZA_START = 'pizza_start',
  PIZZA_FLAVOR = 'pizza_flavor',
  PIZZA_QUANTITY = 'pizza_quantity',
  PIZZA_CRUST = 'pizza_crust',
  PIZZA_NOTE = 'pizza_note',
  PIZZA_FINISH = 'pizza_finish',

  //* Fluxos relacionados a pedidos de bebidas
  DRINK_START = 'drink_start',
  DRINK_SELECTION = 'drink_selection',
  DRINK_QUANTITY = 'drink_quantity',
  DRINK_FINISH = 'drink_finish',

  //* Fluxos de pagamento
  CHECKOUT_START = 'checkout_start',
  CHECKOUT_PAYMENT = 'checkout_payment',
  CHECKOUT_FINISH = 'checkout_finish',
}
