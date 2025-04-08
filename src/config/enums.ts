export enum MessageType {
  TEXT = 'text',
  LIST = 'list',
  // IMAGE = 'image',
}

export enum PizzaType {
  FULL = 'full',
  HALF = 'half',
}

export enum ItemType {
  PIZZA = 'pizza',
  DRINK = 'bebida',
}

export enum PaymentMethod {
  CASH = 'dinheiro',
  CREDIT = 'cartão',
  DEBIT = 'débito',
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
  COMPLETE = '4',
  CANCEL = '0',
}

// ###
export enum Flows {
  REGISTRATION_INITIAL = 'registration_initial',
  REGISTRATION_NAME = 'registration::name',
  REGISTRATION_ADDRESS = 'registration::address',
  //
  WELCOME = 'welcome',
  MENU = 'menu',
  ORDER = 'order',
  //
  PIZZA_MENU = 'pizza_menu',
  PIZZA_FLAVOR = 'pizza_flavor',
  PIZZA_QUANTITY = 'pizza_quantity',
  PIZZA_CRUST = 'pizza_crust',
  PIZZA_NOTE = 'pizza_note',
  PIZZA_CONFIRM = 'pizza_confirm',
  //
  DRINK_MENU = 'drink_menu',
  DRINK_TYPE = 'drink_type',
  DRINK_QUANTITY = 'drink_quantity',
  DRINK_CONFIRM = 'drink_confirm',
  //
  // PAYMENT = 'payment',
}
