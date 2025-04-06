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
  ORDER = '1',
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
export enum FlowKeys {
  WELCOME = 'welcome',
  REGISTRATION = 'registration',
  MENU = 'menu',
  ORDER = 'order',
  PIZZA = 'pizza',
  DRINK = 'drink',
  // PAYMENT = 'payment',
}

export enum PizzaSteps {
  CONFIRM = 'pizza::confirm',
  CRUST = 'pizza::crust',
  FLAVOR = 'pizza::flavor',
  NOTE = 'pizza::note',
  QUANTITY = 'pizza::quantity',
  MENU = 'pizza::menu',
}

export enum DrinkSteps {
  MENU = 'drink::menu',
  QUANTITY = 'drink::quantity',
  TYPE = 'drink::type',
  // NAME = 'drink::name',
}

export enum RegistrationSteps {
  INITIAL = 'registration::initial',
  NAME = 'registration::name',
  ADDRESS = 'registration::address',
}

// export enum FlowStep {
//   WELCOME = 'welcome',
//   MAIN_MENU = 'main-menu',
//   ORDER = 'order',
//   CONFIRM_ORDER = 'order::confirm-order',
//   PAYMENT = 'payment',
//   PAYMENT_METHOD = 'payment::method',
//   AWAITING_CHANGE = 'payment::await-change',
//   PAYMENT_CONFIRMATION = 'payment::confirmation',
//   SEPARATOR = '::',
// }
