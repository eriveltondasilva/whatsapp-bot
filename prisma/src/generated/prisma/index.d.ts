
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model WorkingHour
 * 
 */
export type WorkingHour = $Result.DefaultSelection<Prisma.$WorkingHourPayload>
/**
 * Model Pizzeria
 * 
 */
export type Pizzeria = $Result.DefaultSelection<Prisma.$PizzeriaPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model OrderPizza
 * 
 */
export type OrderPizza = $Result.DefaultSelection<Prisma.$OrderPizzaPayload>
/**
 * Model Flavor
 * 
 */
export type Flavor = $Result.DefaultSelection<Prisma.$FlavorPayload>
/**
 * Model Crust
 * 
 */
export type Crust = $Result.DefaultSelection<Prisma.$CrustPayload>
/**
 * Model Drink
 * 
 */
export type Drink = $Result.DefaultSelection<Prisma.$DrinkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workingHour`: Exposes CRUD operations for the **WorkingHour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkingHours
    * const workingHours = await prisma.workingHour.findMany()
    * ```
    */
  get workingHour(): Prisma.WorkingHourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pizzeria`: Exposes CRUD operations for the **Pizzeria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pizzerias
    * const pizzerias = await prisma.pizzeria.findMany()
    * ```
    */
  get pizzeria(): Prisma.PizzeriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderPizza`: Exposes CRUD operations for the **OrderPizza** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderPizzas
    * const orderPizzas = await prisma.orderPizza.findMany()
    * ```
    */
  get orderPizza(): Prisma.OrderPizzaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flavor`: Exposes CRUD operations for the **Flavor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flavors
    * const flavors = await prisma.flavor.findMany()
    * ```
    */
  get flavor(): Prisma.FlavorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crust`: Exposes CRUD operations for the **Crust** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crusts
    * const crusts = await prisma.crust.findMany()
    * ```
    */
  get crust(): Prisma.CrustDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drink`: Exposes CRUD operations for the **Drink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drinks
    * const drinks = await prisma.drink.findMany()
    * ```
    */
  get drink(): Prisma.DrinkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql


  /**
   * Prisma.skip
   */
  export import skip = runtime.skip


  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    WorkingHour: 'WorkingHour',
    Pizzeria: 'Pizzeria',
    Order: 'Order',
    OrderItem: 'OrderItem',
    OrderPizza: 'OrderPizza',
    Flavor: 'Flavor',
    Crust: 'Crust',
    Drink: 'Drink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "workingHour" | "pizzeria" | "order" | "orderItem" | "orderPizza" | "flavor" | "crust" | "drink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      WorkingHour: {
        payload: Prisma.$WorkingHourPayload<ExtArgs>
        fields: Prisma.WorkingHourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkingHourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkingHourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          findFirst: {
            args: Prisma.WorkingHourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkingHourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          findMany: {
            args: Prisma.WorkingHourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>[]
          }
          create: {
            args: Prisma.WorkingHourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          createMany: {
            args: Prisma.WorkingHourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkingHourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>[]
          }
          delete: {
            args: Prisma.WorkingHourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          update: {
            args: Prisma.WorkingHourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          deleteMany: {
            args: Prisma.WorkingHourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkingHourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkingHourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>[]
          }
          upsert: {
            args: Prisma.WorkingHourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          aggregate: {
            args: Prisma.WorkingHourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkingHour>
          }
          groupBy: {
            args: Prisma.WorkingHourGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkingHourGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkingHourCountArgs<ExtArgs>
            result: $Utils.Optional<WorkingHourCountAggregateOutputType> | number
          }
        }
      }
      Pizzeria: {
        payload: Prisma.$PizzeriaPayload<ExtArgs>
        fields: Prisma.PizzeriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PizzeriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzeriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PizzeriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzeriaPayload>
          }
          findFirst: {
            args: Prisma.PizzeriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzeriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PizzeriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzeriaPayload>
          }
          findMany: {
            args: Prisma.PizzeriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzeriaPayload>[]
          }
          create: {
            args: Prisma.PizzeriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzeriaPayload>
          }
          createMany: {
            args: Prisma.PizzeriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PizzeriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzeriaPayload>[]
          }
          delete: {
            args: Prisma.PizzeriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzeriaPayload>
          }
          update: {
            args: Prisma.PizzeriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzeriaPayload>
          }
          deleteMany: {
            args: Prisma.PizzeriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PizzeriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PizzeriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzeriaPayload>[]
          }
          upsert: {
            args: Prisma.PizzeriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzeriaPayload>
          }
          aggregate: {
            args: Prisma.PizzeriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePizzeria>
          }
          groupBy: {
            args: Prisma.PizzeriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PizzeriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PizzeriaCountArgs<ExtArgs>
            result: $Utils.Optional<PizzeriaCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      OrderPizza: {
        payload: Prisma.$OrderPizzaPayload<ExtArgs>
        fields: Prisma.OrderPizzaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderPizzaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPizzaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderPizzaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPizzaPayload>
          }
          findFirst: {
            args: Prisma.OrderPizzaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPizzaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderPizzaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPizzaPayload>
          }
          findMany: {
            args: Prisma.OrderPizzaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPizzaPayload>[]
          }
          create: {
            args: Prisma.OrderPizzaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPizzaPayload>
          }
          createMany: {
            args: Prisma.OrderPizzaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderPizzaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPizzaPayload>[]
          }
          delete: {
            args: Prisma.OrderPizzaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPizzaPayload>
          }
          update: {
            args: Prisma.OrderPizzaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPizzaPayload>
          }
          deleteMany: {
            args: Prisma.OrderPizzaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderPizzaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderPizzaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPizzaPayload>[]
          }
          upsert: {
            args: Prisma.OrderPizzaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPizzaPayload>
          }
          aggregate: {
            args: Prisma.OrderPizzaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderPizza>
          }
          groupBy: {
            args: Prisma.OrderPizzaGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderPizzaGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderPizzaCountArgs<ExtArgs>
            result: $Utils.Optional<OrderPizzaCountAggregateOutputType> | number
          }
        }
      }
      Flavor: {
        payload: Prisma.$FlavorPayload<ExtArgs>
        fields: Prisma.FlavorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlavorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlavorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          findFirst: {
            args: Prisma.FlavorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlavorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          findMany: {
            args: Prisma.FlavorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>[]
          }
          create: {
            args: Prisma.FlavorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          createMany: {
            args: Prisma.FlavorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlavorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>[]
          }
          delete: {
            args: Prisma.FlavorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          update: {
            args: Prisma.FlavorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          deleteMany: {
            args: Prisma.FlavorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlavorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlavorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>[]
          }
          upsert: {
            args: Prisma.FlavorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlavorPayload>
          }
          aggregate: {
            args: Prisma.FlavorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlavor>
          }
          groupBy: {
            args: Prisma.FlavorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlavorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlavorCountArgs<ExtArgs>
            result: $Utils.Optional<FlavorCountAggregateOutputType> | number
          }
        }
      }
      Crust: {
        payload: Prisma.$CrustPayload<ExtArgs>
        fields: Prisma.CrustFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrustFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrustPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrustFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrustPayload>
          }
          findFirst: {
            args: Prisma.CrustFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrustPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrustFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrustPayload>
          }
          findMany: {
            args: Prisma.CrustFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrustPayload>[]
          }
          create: {
            args: Prisma.CrustCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrustPayload>
          }
          createMany: {
            args: Prisma.CrustCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrustCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrustPayload>[]
          }
          delete: {
            args: Prisma.CrustDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrustPayload>
          }
          update: {
            args: Prisma.CrustUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrustPayload>
          }
          deleteMany: {
            args: Prisma.CrustDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrustUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrustUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrustPayload>[]
          }
          upsert: {
            args: Prisma.CrustUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrustPayload>
          }
          aggregate: {
            args: Prisma.CrustAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrust>
          }
          groupBy: {
            args: Prisma.CrustGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrustGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrustCountArgs<ExtArgs>
            result: $Utils.Optional<CrustCountAggregateOutputType> | number
          }
        }
      }
      Drink: {
        payload: Prisma.$DrinkPayload<ExtArgs>
        fields: Prisma.DrinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          findFirst: {
            args: Prisma.DrinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          findMany: {
            args: Prisma.DrinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>[]
          }
          create: {
            args: Prisma.DrinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          createMany: {
            args: Prisma.DrinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>[]
          }
          delete: {
            args: Prisma.DrinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          update: {
            args: Prisma.DrinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          deleteMany: {
            args: Prisma.DrinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>[]
          }
          upsert: {
            args: Prisma.DrinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          aggregate: {
            args: Prisma.DrinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrink>
          }
          groupBy: {
            args: Prisma.DrinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrinkCountArgs<ExtArgs>
            result: $Utils.Optional<DrinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    workingHour?: WorkingHourOmit
    pizzeria?: PizzeriaOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    orderPizza?: OrderPizzaOmit
    flavor?: FlavorOmit
    crust?: CrustOmit
    drink?: DrinkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    orders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput | $Types.Skip
  }


  /**
   * Count Type PizzeriaCountOutputType
   */

  export type PizzeriaCountOutputType = {
    workingHours: number
  }

  export type PizzeriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workingHours?: boolean | PizzeriaCountOutputTypeCountWorkingHoursArgs
  }

  // Custom InputTypes
  /**
   * PizzeriaCountOutputType without action
   */
  export type PizzeriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzeriaCountOutputType
     */
    select?: PizzeriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PizzeriaCountOutputType without action
   */
  export type PizzeriaCountOutputTypeCountWorkingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingHourWhereInput | $Types.Skip
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput | $Types.Skip
  }


  /**
   * Count Type FlavorCountOutputType
   */

  export type FlavorCountOutputType = {
    firstPizzas: number
    secondPizzas: number
  }

  export type FlavorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    firstPizzas?: boolean | FlavorCountOutputTypeCountFirstPizzasArgs
    secondPizzas?: boolean | FlavorCountOutputTypeCountSecondPizzasArgs
  }

  // Custom InputTypes
  /**
   * FlavorCountOutputType without action
   */
  export type FlavorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlavorCountOutputType
     */
    select?: FlavorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlavorCountOutputType without action
   */
  export type FlavorCountOutputTypeCountFirstPizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderPizzaWhereInput | $Types.Skip
  }

  /**
   * FlavorCountOutputType without action
   */
  export type FlavorCountOutputTypeCountSecondPizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderPizzaWhereInput | $Types.Skip
  }


  /**
   * Count Type CrustCountOutputType
   */

  export type CrustCountOutputType = {
    pizzas: number
  }

  export type CrustCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzas?: boolean | CrustCountOutputTypeCountPizzasArgs
  }

  // Custom InputTypes
  /**
   * CrustCountOutputType without action
   */
  export type CrustCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrustCountOutputType
     */
    select?: CrustCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CrustCountOutputType without action
   */
  export type CrustCountOutputTypeCountPizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderPizzaWhereInput | $Types.Skip
  }


  /**
   * Count Type DrinkCountOutputType
   */

  export type DrinkCountOutputType = {
    order: number
  }

  export type DrinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | DrinkCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * DrinkCountOutputType without action
   */
  export type DrinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkCountOutputType
     */
    select?: DrinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrinkCountOutputType without action
   */
  export type DrinkCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput | $Types.Skip
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    address: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type CustomerSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type CustomerMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    phone?: true | $Types.Skip
    address?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CustomerMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    phone?: true | $Types.Skip
    address?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CustomerCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    phone?: true | $Types.Skip
    address?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput | $Types.Skip
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[] | $Types.Skip
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    phone: string
    address: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    address?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    orders?: boolean | Customer$ordersArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    address?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    address?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    address?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "address" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"], $Types.Skip>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Customer$ordersArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      address: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly isActive: FieldRef<"Customer", 'Boolean'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number | $Types.Skip
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * Limit how many Customers to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * Limit how many Customers to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * Limit how many Customers to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput | $Types.Skip
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model WorkingHour
   */

  export type AggregateWorkingHour = {
    _count: WorkingHourCountAggregateOutputType | null
    _avg: WorkingHourAvgAggregateOutputType | null
    _sum: WorkingHourSumAggregateOutputType | null
    _min: WorkingHourMinAggregateOutputType | null
    _max: WorkingHourMaxAggregateOutputType | null
  }

  export type WorkingHourAvgAggregateOutputType = {
    id: number | null
    pizzeriaId: number | null
    dayOfWeek: number | null
  }

  export type WorkingHourSumAggregateOutputType = {
    id: number | null
    pizzeriaId: number | null
    dayOfWeek: number | null
  }

  export type WorkingHourMinAggregateOutputType = {
    id: number | null
    pizzeriaId: number | null
    dayOfWeek: number | null
    openingTime: string | null
    closingTime: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkingHourMaxAggregateOutputType = {
    id: number | null
    pizzeriaId: number | null
    dayOfWeek: number | null
    openingTime: string | null
    closingTime: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkingHourCountAggregateOutputType = {
    id: number
    pizzeriaId: number
    dayOfWeek: number
    openingTime: number
    closingTime: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkingHourAvgAggregateInputType = {
    id?: true | $Types.Skip
    pizzeriaId?: true | $Types.Skip
    dayOfWeek?: true | $Types.Skip
  }

  export type WorkingHourSumAggregateInputType = {
    id?: true | $Types.Skip
    pizzeriaId?: true | $Types.Skip
    dayOfWeek?: true | $Types.Skip
  }

  export type WorkingHourMinAggregateInputType = {
    id?: true | $Types.Skip
    pizzeriaId?: true | $Types.Skip
    dayOfWeek?: true | $Types.Skip
    openingTime?: true | $Types.Skip
    closingTime?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type WorkingHourMaxAggregateInputType = {
    id?: true | $Types.Skip
    pizzeriaId?: true | $Types.Skip
    dayOfWeek?: true | $Types.Skip
    openingTime?: true | $Types.Skip
    closingTime?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type WorkingHourCountAggregateInputType = {
    id?: true | $Types.Skip
    pizzeriaId?: true | $Types.Skip
    dayOfWeek?: true | $Types.Skip
    openingTime?: true | $Types.Skip
    closingTime?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type WorkingHourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingHour to aggregate.
     */
    where?: WorkingHourWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHourOrderByWithRelationInput | WorkingHourOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkingHourWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkingHours
    **/
    _count?: true | WorkingHourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkingHourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkingHourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkingHourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkingHourMaxAggregateInputType
  }

  export type GetWorkingHourAggregateType<T extends WorkingHourAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkingHour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkingHour[P]>
      : GetScalarType<T[P], AggregateWorkingHour[P]>
  }




  export type WorkingHourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingHourWhereInput | $Types.Skip
    orderBy?: WorkingHourOrderByWithAggregationInput | WorkingHourOrderByWithAggregationInput[] | $Types.Skip
    by: WorkingHourScalarFieldEnum[] | WorkingHourScalarFieldEnum
    having?: WorkingHourScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: WorkingHourCountAggregateInputType | true
    _avg?: WorkingHourAvgAggregateInputType
    _sum?: WorkingHourSumAggregateInputType
    _min?: WorkingHourMinAggregateInputType
    _max?: WorkingHourMaxAggregateInputType
  }

  export type WorkingHourGroupByOutputType = {
    id: number
    pizzeriaId: number
    dayOfWeek: number
    openingTime: string
    closingTime: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkingHourCountAggregateOutputType | null
    _avg: WorkingHourAvgAggregateOutputType | null
    _sum: WorkingHourSumAggregateOutputType | null
    _min: WorkingHourMinAggregateOutputType | null
    _max: WorkingHourMaxAggregateOutputType | null
  }

  type GetWorkingHourGroupByPayload<T extends WorkingHourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkingHourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkingHourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkingHourGroupByOutputType[P]>
            : GetScalarType<T[P], WorkingHourGroupByOutputType[P]>
        }
      >
    >


  export type WorkingHourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    pizzeriaId?: boolean | $Types.Skip
    dayOfWeek?: boolean | $Types.Skip
    openingTime?: boolean | $Types.Skip
    closingTime?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    pizzeria?: boolean | PizzeriaDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["workingHour"]>

  export type WorkingHourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    pizzeriaId?: boolean | $Types.Skip
    dayOfWeek?: boolean | $Types.Skip
    openingTime?: boolean | $Types.Skip
    closingTime?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    pizzeria?: boolean | PizzeriaDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["workingHour"]>

  export type WorkingHourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    pizzeriaId?: boolean | $Types.Skip
    dayOfWeek?: boolean | $Types.Skip
    openingTime?: boolean | $Types.Skip
    closingTime?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    pizzeria?: boolean | PizzeriaDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["workingHour"]>

  export type WorkingHourSelectScalar = {
    id?: boolean | $Types.Skip
    pizzeriaId?: boolean | $Types.Skip
    dayOfWeek?: boolean | $Types.Skip
    openingTime?: boolean | $Types.Skip
    closingTime?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type WorkingHourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pizzeriaId" | "dayOfWeek" | "openingTime" | "closingTime" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["workingHour"], $Types.Skip>
  export type WorkingHourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzeria?: boolean | PizzeriaDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type WorkingHourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzeria?: boolean | PizzeriaDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type WorkingHourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzeria?: boolean | PizzeriaDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $WorkingHourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkingHour"
    objects: {
      pizzeria: Prisma.$PizzeriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pizzeriaId: number
      dayOfWeek: number
      openingTime: string
      closingTime: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workingHour"]>
    composites: {}
  }

  type WorkingHourGetPayload<S extends boolean | null | undefined | WorkingHourDefaultArgs> = $Result.GetResult<Prisma.$WorkingHourPayload, S>

  type WorkingHourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkingHourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkingHourCountAggregateInputType | true
    }

  export interface WorkingHourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkingHour'], meta: { name: 'WorkingHour' } }
    /**
     * Find zero or one WorkingHour that matches the filter.
     * @param {WorkingHourFindUniqueArgs} args - Arguments to find a WorkingHour
     * @example
     * // Get one WorkingHour
     * const workingHour = await prisma.workingHour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkingHourFindUniqueArgs>(args: SelectSubset<T, WorkingHourFindUniqueArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkingHour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkingHourFindUniqueOrThrowArgs} args - Arguments to find a WorkingHour
     * @example
     * // Get one WorkingHour
     * const workingHour = await prisma.workingHour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkingHourFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkingHourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingHour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourFindFirstArgs} args - Arguments to find a WorkingHour
     * @example
     * // Get one WorkingHour
     * const workingHour = await prisma.workingHour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkingHourFindFirstArgs>(args?: SelectSubset<T, WorkingHourFindFirstArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingHour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourFindFirstOrThrowArgs} args - Arguments to find a WorkingHour
     * @example
     * // Get one WorkingHour
     * const workingHour = await prisma.workingHour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkingHourFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkingHourFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkingHours
     * const workingHours = await prisma.workingHour.findMany()
     * 
     * // Get first 10 WorkingHours
     * const workingHours = await prisma.workingHour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workingHourWithIdOnly = await prisma.workingHour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkingHourFindManyArgs>(args?: SelectSubset<T, WorkingHourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkingHour.
     * @param {WorkingHourCreateArgs} args - Arguments to create a WorkingHour.
     * @example
     * // Create one WorkingHour
     * const WorkingHour = await prisma.workingHour.create({
     *   data: {
     *     // ... data to create a WorkingHour
     *   }
     * })
     * 
     */
    create<T extends WorkingHourCreateArgs>(args: SelectSubset<T, WorkingHourCreateArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkingHours.
     * @param {WorkingHourCreateManyArgs} args - Arguments to create many WorkingHours.
     * @example
     * // Create many WorkingHours
     * const workingHour = await prisma.workingHour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkingHourCreateManyArgs>(args?: SelectSubset<T, WorkingHourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkingHours and returns the data saved in the database.
     * @param {WorkingHourCreateManyAndReturnArgs} args - Arguments to create many WorkingHours.
     * @example
     * // Create many WorkingHours
     * const workingHour = await prisma.workingHour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkingHours and only return the `id`
     * const workingHourWithIdOnly = await prisma.workingHour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkingHourCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkingHourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkingHour.
     * @param {WorkingHourDeleteArgs} args - Arguments to delete one WorkingHour.
     * @example
     * // Delete one WorkingHour
     * const WorkingHour = await prisma.workingHour.delete({
     *   where: {
     *     // ... filter to delete one WorkingHour
     *   }
     * })
     * 
     */
    delete<T extends WorkingHourDeleteArgs>(args: SelectSubset<T, WorkingHourDeleteArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkingHour.
     * @param {WorkingHourUpdateArgs} args - Arguments to update one WorkingHour.
     * @example
     * // Update one WorkingHour
     * const workingHour = await prisma.workingHour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkingHourUpdateArgs>(args: SelectSubset<T, WorkingHourUpdateArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkingHours.
     * @param {WorkingHourDeleteManyArgs} args - Arguments to filter WorkingHours to delete.
     * @example
     * // Delete a few WorkingHours
     * const { count } = await prisma.workingHour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkingHourDeleteManyArgs>(args?: SelectSubset<T, WorkingHourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkingHours
     * const workingHour = await prisma.workingHour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkingHourUpdateManyArgs>(args: SelectSubset<T, WorkingHourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingHours and returns the data updated in the database.
     * @param {WorkingHourUpdateManyAndReturnArgs} args - Arguments to update many WorkingHours.
     * @example
     * // Update many WorkingHours
     * const workingHour = await prisma.workingHour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkingHours and only return the `id`
     * const workingHourWithIdOnly = await prisma.workingHour.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkingHourUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkingHourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkingHour.
     * @param {WorkingHourUpsertArgs} args - Arguments to update or create a WorkingHour.
     * @example
     * // Update or create a WorkingHour
     * const workingHour = await prisma.workingHour.upsert({
     *   create: {
     *     // ... data to create a WorkingHour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkingHour we want to update
     *   }
     * })
     */
    upsert<T extends WorkingHourUpsertArgs>(args: SelectSubset<T, WorkingHourUpsertArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourCountArgs} args - Arguments to filter WorkingHours to count.
     * @example
     * // Count the number of WorkingHours
     * const count = await prisma.workingHour.count({
     *   where: {
     *     // ... the filter for the WorkingHours we want to count
     *   }
     * })
    **/
    count<T extends WorkingHourCountArgs>(
      args?: Subset<T, WorkingHourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkingHourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkingHourAggregateArgs>(args: Subset<T, WorkingHourAggregateArgs>): Prisma.PrismaPromise<GetWorkingHourAggregateType<T>>

    /**
     * Group by WorkingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkingHourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkingHourGroupByArgs['orderBy'] }
        : { orderBy?: WorkingHourGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkingHourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkingHourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkingHour model
   */
  readonly fields: WorkingHourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkingHour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkingHourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pizzeria<T extends PizzeriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PizzeriaDefaultArgs<ExtArgs>>): Prisma__PizzeriaClient<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkingHour model
   */
  interface WorkingHourFieldRefs {
    readonly id: FieldRef<"WorkingHour", 'Int'>
    readonly pizzeriaId: FieldRef<"WorkingHour", 'Int'>
    readonly dayOfWeek: FieldRef<"WorkingHour", 'Int'>
    readonly openingTime: FieldRef<"WorkingHour", 'String'>
    readonly closingTime: FieldRef<"WorkingHour", 'String'>
    readonly isActive: FieldRef<"WorkingHour", 'Boolean'>
    readonly createdAt: FieldRef<"WorkingHour", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkingHour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkingHour findUnique
   */
  export type WorkingHourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHour to fetch.
     */
    where: WorkingHourWhereUniqueInput
  }

  /**
   * WorkingHour findUniqueOrThrow
   */
  export type WorkingHourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHour to fetch.
     */
    where: WorkingHourWhereUniqueInput
  }

  /**
   * WorkingHour findFirst
   */
  export type WorkingHourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHour to fetch.
     */
    where?: WorkingHourWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHourOrderByWithRelationInput | WorkingHourOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingHours.
     */
    cursor?: WorkingHourWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingHours.
     */
    distinct?: WorkingHourScalarFieldEnum | WorkingHourScalarFieldEnum[] | $Types.Skip
  }

  /**
   * WorkingHour findFirstOrThrow
   */
  export type WorkingHourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHour to fetch.
     */
    where?: WorkingHourWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHourOrderByWithRelationInput | WorkingHourOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingHours.
     */
    cursor?: WorkingHourWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingHours.
     */
    distinct?: WorkingHourScalarFieldEnum | WorkingHourScalarFieldEnum[] | $Types.Skip
  }

  /**
   * WorkingHour findMany
   */
  export type WorkingHourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where?: WorkingHourWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHourOrderByWithRelationInput | WorkingHourOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkingHours.
     */
    cursor?: WorkingHourWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number | $Types.Skip
    distinct?: WorkingHourScalarFieldEnum | WorkingHourScalarFieldEnum[] | $Types.Skip
  }

  /**
   * WorkingHour create
   */
  export type WorkingHourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkingHour.
     */
    data: XOR<WorkingHourCreateInput, WorkingHourUncheckedCreateInput>
  }

  /**
   * WorkingHour createMany
   */
  export type WorkingHourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkingHours.
     */
    data: WorkingHourCreateManyInput | WorkingHourCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * WorkingHour createManyAndReturn
   */
  export type WorkingHourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * The data used to create many WorkingHours.
     */
    data: WorkingHourCreateManyInput | WorkingHourCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingHour update
   */
  export type WorkingHourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkingHour.
     */
    data: XOR<WorkingHourUpdateInput, WorkingHourUncheckedUpdateInput>
    /**
     * Choose, which WorkingHour to update.
     */
    where: WorkingHourWhereUniqueInput
  }

  /**
   * WorkingHour updateMany
   */
  export type WorkingHourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkingHours.
     */
    data: XOR<WorkingHourUpdateManyMutationInput, WorkingHourUncheckedUpdateManyInput>
    /**
     * Filter which WorkingHours to update
     */
    where?: WorkingHourWhereInput | $Types.Skip
    /**
     * Limit how many WorkingHours to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * WorkingHour updateManyAndReturn
   */
  export type WorkingHourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * The data used to update WorkingHours.
     */
    data: XOR<WorkingHourUpdateManyMutationInput, WorkingHourUncheckedUpdateManyInput>
    /**
     * Filter which WorkingHours to update
     */
    where?: WorkingHourWhereInput | $Types.Skip
    /**
     * Limit how many WorkingHours to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingHour upsert
   */
  export type WorkingHourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkingHour to update in case it exists.
     */
    where: WorkingHourWhereUniqueInput
    /**
     * In case the WorkingHour found by the `where` argument doesn't exist, create a new WorkingHour with this data.
     */
    create: XOR<WorkingHourCreateInput, WorkingHourUncheckedCreateInput>
    /**
     * In case the WorkingHour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkingHourUpdateInput, WorkingHourUncheckedUpdateInput>
  }

  /**
   * WorkingHour delete
   */
  export type WorkingHourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter which WorkingHour to delete.
     */
    where: WorkingHourWhereUniqueInput
  }

  /**
   * WorkingHour deleteMany
   */
  export type WorkingHourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingHours to delete
     */
    where?: WorkingHourWhereInput | $Types.Skip
    /**
     * Limit how many WorkingHours to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * WorkingHour without action
   */
  export type WorkingHourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
  }


  /**
   * Model Pizzeria
   */

  export type AggregatePizzeria = {
    _count: PizzeriaCountAggregateOutputType | null
    _avg: PizzeriaAvgAggregateOutputType | null
    _sum: PizzeriaSumAggregateOutputType | null
    _min: PizzeriaMinAggregateOutputType | null
    _max: PizzeriaMaxAggregateOutputType | null
  }

  export type PizzeriaAvgAggregateOutputType = {
    id: number | null
    deliveryTax: Decimal | null
    minOrderValue: Decimal | null
  }

  export type PizzeriaSumAggregateOutputType = {
    id: number | null
    deliveryTax: Decimal | null
    minOrderValue: Decimal | null
  }

  export type PizzeriaMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    cnpj: string | null
    address: string | null
    phone: string | null
    isActive: boolean | null
    deliveryTax: Decimal | null
    minOrderValue: Decimal | null
    website: string | null
    instagram: string | null
    facebook: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PizzeriaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    cnpj: string | null
    address: string | null
    phone: string | null
    isActive: boolean | null
    deliveryTax: Decimal | null
    minOrderValue: Decimal | null
    website: string | null
    instagram: string | null
    facebook: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PizzeriaCountAggregateOutputType = {
    id: number
    name: number
    description: number
    cnpj: number
    address: number
    phone: number
    isActive: number
    deliveryTax: number
    minOrderValue: number
    website: number
    instagram: number
    facebook: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PizzeriaAvgAggregateInputType = {
    id?: true | $Types.Skip
    deliveryTax?: true | $Types.Skip
    minOrderValue?: true | $Types.Skip
  }

  export type PizzeriaSumAggregateInputType = {
    id?: true | $Types.Skip
    deliveryTax?: true | $Types.Skip
    minOrderValue?: true | $Types.Skip
  }

  export type PizzeriaMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    cnpj?: true | $Types.Skip
    address?: true | $Types.Skip
    phone?: true | $Types.Skip
    isActive?: true | $Types.Skip
    deliveryTax?: true | $Types.Skip
    minOrderValue?: true | $Types.Skip
    website?: true | $Types.Skip
    instagram?: true | $Types.Skip
    facebook?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type PizzeriaMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    cnpj?: true | $Types.Skip
    address?: true | $Types.Skip
    phone?: true | $Types.Skip
    isActive?: true | $Types.Skip
    deliveryTax?: true | $Types.Skip
    minOrderValue?: true | $Types.Skip
    website?: true | $Types.Skip
    instagram?: true | $Types.Skip
    facebook?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type PizzeriaCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    cnpj?: true | $Types.Skip
    address?: true | $Types.Skip
    phone?: true | $Types.Skip
    isActive?: true | $Types.Skip
    deliveryTax?: true | $Types.Skip
    minOrderValue?: true | $Types.Skip
    website?: true | $Types.Skip
    instagram?: true | $Types.Skip
    facebook?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type PizzeriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pizzeria to aggregate.
     */
    where?: PizzeriaWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzerias to fetch.
     */
    orderBy?: PizzeriaOrderByWithRelationInput | PizzeriaOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PizzeriaWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzerias from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzerias.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pizzerias
    **/
    _count?: true | PizzeriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PizzeriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PizzeriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PizzeriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PizzeriaMaxAggregateInputType
  }

  export type GetPizzeriaAggregateType<T extends PizzeriaAggregateArgs> = {
        [P in keyof T & keyof AggregatePizzeria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePizzeria[P]>
      : GetScalarType<T[P], AggregatePizzeria[P]>
  }




  export type PizzeriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzeriaWhereInput | $Types.Skip
    orderBy?: PizzeriaOrderByWithAggregationInput | PizzeriaOrderByWithAggregationInput[] | $Types.Skip
    by: PizzeriaScalarFieldEnum[] | PizzeriaScalarFieldEnum
    having?: PizzeriaScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: PizzeriaCountAggregateInputType | true
    _avg?: PizzeriaAvgAggregateInputType
    _sum?: PizzeriaSumAggregateInputType
    _min?: PizzeriaMinAggregateInputType
    _max?: PizzeriaMaxAggregateInputType
  }

  export type PizzeriaGroupByOutputType = {
    id: number
    name: string
    description: string | null
    cnpj: string | null
    address: string | null
    phone: string | null
    isActive: boolean
    deliveryTax: Decimal
    minOrderValue: Decimal
    website: string | null
    instagram: string | null
    facebook: string | null
    createdAt: Date
    updatedAt: Date
    _count: PizzeriaCountAggregateOutputType | null
    _avg: PizzeriaAvgAggregateOutputType | null
    _sum: PizzeriaSumAggregateOutputType | null
    _min: PizzeriaMinAggregateOutputType | null
    _max: PizzeriaMaxAggregateOutputType | null
  }

  type GetPizzeriaGroupByPayload<T extends PizzeriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PizzeriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PizzeriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PizzeriaGroupByOutputType[P]>
            : GetScalarType<T[P], PizzeriaGroupByOutputType[P]>
        }
      >
    >


  export type PizzeriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    cnpj?: boolean | $Types.Skip
    address?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    deliveryTax?: boolean | $Types.Skip
    minOrderValue?: boolean | $Types.Skip
    website?: boolean | $Types.Skip
    instagram?: boolean | $Types.Skip
    facebook?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    workingHours?: boolean | Pizzeria$workingHoursArgs<ExtArgs> | $Types.Skip
    _count?: boolean | PizzeriaCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["pizzeria"]>

  export type PizzeriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    cnpj?: boolean | $Types.Skip
    address?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    deliveryTax?: boolean | $Types.Skip
    minOrderValue?: boolean | $Types.Skip
    website?: boolean | $Types.Skip
    instagram?: boolean | $Types.Skip
    facebook?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["pizzeria"]>

  export type PizzeriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    cnpj?: boolean | $Types.Skip
    address?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    deliveryTax?: boolean | $Types.Skip
    minOrderValue?: boolean | $Types.Skip
    website?: boolean | $Types.Skip
    instagram?: boolean | $Types.Skip
    facebook?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["pizzeria"]>

  export type PizzeriaSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    cnpj?: boolean | $Types.Skip
    address?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    deliveryTax?: boolean | $Types.Skip
    minOrderValue?: boolean | $Types.Skip
    website?: boolean | $Types.Skip
    instagram?: boolean | $Types.Skip
    facebook?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type PizzeriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "cnpj" | "address" | "phone" | "isActive" | "deliveryTax" | "minOrderValue" | "website" | "instagram" | "facebook" | "createdAt" | "updatedAt", ExtArgs["result"]["pizzeria"], $Types.Skip>
  export type PizzeriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workingHours?: boolean | Pizzeria$workingHoursArgs<ExtArgs> | $Types.Skip
    _count?: boolean | PizzeriaCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type PizzeriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PizzeriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PizzeriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pizzeria"
    objects: {
      workingHours: Prisma.$WorkingHourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      cnpj: string | null
      address: string | null
      phone: string | null
      isActive: boolean
      deliveryTax: Prisma.Decimal
      minOrderValue: Prisma.Decimal
      website: string | null
      instagram: string | null
      facebook: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pizzeria"]>
    composites: {}
  }

  type PizzeriaGetPayload<S extends boolean | null | undefined | PizzeriaDefaultArgs> = $Result.GetResult<Prisma.$PizzeriaPayload, S>

  type PizzeriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PizzeriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PizzeriaCountAggregateInputType | true
    }

  export interface PizzeriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pizzeria'], meta: { name: 'Pizzeria' } }
    /**
     * Find zero or one Pizzeria that matches the filter.
     * @param {PizzeriaFindUniqueArgs} args - Arguments to find a Pizzeria
     * @example
     * // Get one Pizzeria
     * const pizzeria = await prisma.pizzeria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PizzeriaFindUniqueArgs>(args: SelectSubset<T, PizzeriaFindUniqueArgs<ExtArgs>>): Prisma__PizzeriaClient<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pizzeria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PizzeriaFindUniqueOrThrowArgs} args - Arguments to find a Pizzeria
     * @example
     * // Get one Pizzeria
     * const pizzeria = await prisma.pizzeria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PizzeriaFindUniqueOrThrowArgs>(args: SelectSubset<T, PizzeriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PizzeriaClient<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pizzeria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzeriaFindFirstArgs} args - Arguments to find a Pizzeria
     * @example
     * // Get one Pizzeria
     * const pizzeria = await prisma.pizzeria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PizzeriaFindFirstArgs>(args?: SelectSubset<T, PizzeriaFindFirstArgs<ExtArgs>>): Prisma__PizzeriaClient<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pizzeria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzeriaFindFirstOrThrowArgs} args - Arguments to find a Pizzeria
     * @example
     * // Get one Pizzeria
     * const pizzeria = await prisma.pizzeria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PizzeriaFindFirstOrThrowArgs>(args?: SelectSubset<T, PizzeriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PizzeriaClient<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pizzerias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzeriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pizzerias
     * const pizzerias = await prisma.pizzeria.findMany()
     * 
     * // Get first 10 Pizzerias
     * const pizzerias = await prisma.pizzeria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pizzeriaWithIdOnly = await prisma.pizzeria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PizzeriaFindManyArgs>(args?: SelectSubset<T, PizzeriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pizzeria.
     * @param {PizzeriaCreateArgs} args - Arguments to create a Pizzeria.
     * @example
     * // Create one Pizzeria
     * const Pizzeria = await prisma.pizzeria.create({
     *   data: {
     *     // ... data to create a Pizzeria
     *   }
     * })
     * 
     */
    create<T extends PizzeriaCreateArgs>(args: SelectSubset<T, PizzeriaCreateArgs<ExtArgs>>): Prisma__PizzeriaClient<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pizzerias.
     * @param {PizzeriaCreateManyArgs} args - Arguments to create many Pizzerias.
     * @example
     * // Create many Pizzerias
     * const pizzeria = await prisma.pizzeria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PizzeriaCreateManyArgs>(args?: SelectSubset<T, PizzeriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pizzerias and returns the data saved in the database.
     * @param {PizzeriaCreateManyAndReturnArgs} args - Arguments to create many Pizzerias.
     * @example
     * // Create many Pizzerias
     * const pizzeria = await prisma.pizzeria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pizzerias and only return the `id`
     * const pizzeriaWithIdOnly = await prisma.pizzeria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PizzeriaCreateManyAndReturnArgs>(args?: SelectSubset<T, PizzeriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pizzeria.
     * @param {PizzeriaDeleteArgs} args - Arguments to delete one Pizzeria.
     * @example
     * // Delete one Pizzeria
     * const Pizzeria = await prisma.pizzeria.delete({
     *   where: {
     *     // ... filter to delete one Pizzeria
     *   }
     * })
     * 
     */
    delete<T extends PizzeriaDeleteArgs>(args: SelectSubset<T, PizzeriaDeleteArgs<ExtArgs>>): Prisma__PizzeriaClient<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pizzeria.
     * @param {PizzeriaUpdateArgs} args - Arguments to update one Pizzeria.
     * @example
     * // Update one Pizzeria
     * const pizzeria = await prisma.pizzeria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PizzeriaUpdateArgs>(args: SelectSubset<T, PizzeriaUpdateArgs<ExtArgs>>): Prisma__PizzeriaClient<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pizzerias.
     * @param {PizzeriaDeleteManyArgs} args - Arguments to filter Pizzerias to delete.
     * @example
     * // Delete a few Pizzerias
     * const { count } = await prisma.pizzeria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PizzeriaDeleteManyArgs>(args?: SelectSubset<T, PizzeriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pizzerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzeriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pizzerias
     * const pizzeria = await prisma.pizzeria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PizzeriaUpdateManyArgs>(args: SelectSubset<T, PizzeriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pizzerias and returns the data updated in the database.
     * @param {PizzeriaUpdateManyAndReturnArgs} args - Arguments to update many Pizzerias.
     * @example
     * // Update many Pizzerias
     * const pizzeria = await prisma.pizzeria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pizzerias and only return the `id`
     * const pizzeriaWithIdOnly = await prisma.pizzeria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PizzeriaUpdateManyAndReturnArgs>(args: SelectSubset<T, PizzeriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pizzeria.
     * @param {PizzeriaUpsertArgs} args - Arguments to update or create a Pizzeria.
     * @example
     * // Update or create a Pizzeria
     * const pizzeria = await prisma.pizzeria.upsert({
     *   create: {
     *     // ... data to create a Pizzeria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pizzeria we want to update
     *   }
     * })
     */
    upsert<T extends PizzeriaUpsertArgs>(args: SelectSubset<T, PizzeriaUpsertArgs<ExtArgs>>): Prisma__PizzeriaClient<$Result.GetResult<Prisma.$PizzeriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pizzerias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzeriaCountArgs} args - Arguments to filter Pizzerias to count.
     * @example
     * // Count the number of Pizzerias
     * const count = await prisma.pizzeria.count({
     *   where: {
     *     // ... the filter for the Pizzerias we want to count
     *   }
     * })
    **/
    count<T extends PizzeriaCountArgs>(
      args?: Subset<T, PizzeriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PizzeriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pizzeria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzeriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PizzeriaAggregateArgs>(args: Subset<T, PizzeriaAggregateArgs>): Prisma.PrismaPromise<GetPizzeriaAggregateType<T>>

    /**
     * Group by Pizzeria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzeriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PizzeriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PizzeriaGroupByArgs['orderBy'] }
        : { orderBy?: PizzeriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PizzeriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPizzeriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pizzeria model
   */
  readonly fields: PizzeriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pizzeria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PizzeriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workingHours<T extends Pizzeria$workingHoursArgs<ExtArgs> = {}>(args?: Subset<T, Pizzeria$workingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pizzeria model
   */
  interface PizzeriaFieldRefs {
    readonly id: FieldRef<"Pizzeria", 'Int'>
    readonly name: FieldRef<"Pizzeria", 'String'>
    readonly description: FieldRef<"Pizzeria", 'String'>
    readonly cnpj: FieldRef<"Pizzeria", 'String'>
    readonly address: FieldRef<"Pizzeria", 'String'>
    readonly phone: FieldRef<"Pizzeria", 'String'>
    readonly isActive: FieldRef<"Pizzeria", 'Boolean'>
    readonly deliveryTax: FieldRef<"Pizzeria", 'Decimal'>
    readonly minOrderValue: FieldRef<"Pizzeria", 'Decimal'>
    readonly website: FieldRef<"Pizzeria", 'String'>
    readonly instagram: FieldRef<"Pizzeria", 'String'>
    readonly facebook: FieldRef<"Pizzeria", 'String'>
    readonly createdAt: FieldRef<"Pizzeria", 'DateTime'>
    readonly updatedAt: FieldRef<"Pizzeria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pizzeria findUnique
   */
  export type PizzeriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzeriaInclude<ExtArgs> | null
    /**
     * Filter, which Pizzeria to fetch.
     */
    where: PizzeriaWhereUniqueInput
  }

  /**
   * Pizzeria findUniqueOrThrow
   */
  export type PizzeriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzeriaInclude<ExtArgs> | null
    /**
     * Filter, which Pizzeria to fetch.
     */
    where: PizzeriaWhereUniqueInput
  }

  /**
   * Pizzeria findFirst
   */
  export type PizzeriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzeriaInclude<ExtArgs> | null
    /**
     * Filter, which Pizzeria to fetch.
     */
    where?: PizzeriaWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzerias to fetch.
     */
    orderBy?: PizzeriaOrderByWithRelationInput | PizzeriaOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pizzerias.
     */
    cursor?: PizzeriaWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzerias from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzerias.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pizzerias.
     */
    distinct?: PizzeriaScalarFieldEnum | PizzeriaScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Pizzeria findFirstOrThrow
   */
  export type PizzeriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzeriaInclude<ExtArgs> | null
    /**
     * Filter, which Pizzeria to fetch.
     */
    where?: PizzeriaWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzerias to fetch.
     */
    orderBy?: PizzeriaOrderByWithRelationInput | PizzeriaOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pizzerias.
     */
    cursor?: PizzeriaWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzerias from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzerias.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pizzerias.
     */
    distinct?: PizzeriaScalarFieldEnum | PizzeriaScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Pizzeria findMany
   */
  export type PizzeriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzeriaInclude<ExtArgs> | null
    /**
     * Filter, which Pizzerias to fetch.
     */
    where?: PizzeriaWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzerias to fetch.
     */
    orderBy?: PizzeriaOrderByWithRelationInput | PizzeriaOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pizzerias.
     */
    cursor?: PizzeriaWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzerias from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzerias.
     */
    skip?: number | $Types.Skip
    distinct?: PizzeriaScalarFieldEnum | PizzeriaScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Pizzeria create
   */
  export type PizzeriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzeriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pizzeria.
     */
    data: XOR<PizzeriaCreateInput, PizzeriaUncheckedCreateInput>
  }

  /**
   * Pizzeria createMany
   */
  export type PizzeriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pizzerias.
     */
    data: PizzeriaCreateManyInput | PizzeriaCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Pizzeria createManyAndReturn
   */
  export type PizzeriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * The data used to create many Pizzerias.
     */
    data: PizzeriaCreateManyInput | PizzeriaCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Pizzeria update
   */
  export type PizzeriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzeriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pizzeria.
     */
    data: XOR<PizzeriaUpdateInput, PizzeriaUncheckedUpdateInput>
    /**
     * Choose, which Pizzeria to update.
     */
    where: PizzeriaWhereUniqueInput
  }

  /**
   * Pizzeria updateMany
   */
  export type PizzeriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pizzerias.
     */
    data: XOR<PizzeriaUpdateManyMutationInput, PizzeriaUncheckedUpdateManyInput>
    /**
     * Filter which Pizzerias to update
     */
    where?: PizzeriaWhereInput | $Types.Skip
    /**
     * Limit how many Pizzerias to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Pizzeria updateManyAndReturn
   */
  export type PizzeriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * The data used to update Pizzerias.
     */
    data: XOR<PizzeriaUpdateManyMutationInput, PizzeriaUncheckedUpdateManyInput>
    /**
     * Filter which Pizzerias to update
     */
    where?: PizzeriaWhereInput | $Types.Skip
    /**
     * Limit how many Pizzerias to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Pizzeria upsert
   */
  export type PizzeriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzeriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pizzeria to update in case it exists.
     */
    where: PizzeriaWhereUniqueInput
    /**
     * In case the Pizzeria found by the `where` argument doesn't exist, create a new Pizzeria with this data.
     */
    create: XOR<PizzeriaCreateInput, PizzeriaUncheckedCreateInput>
    /**
     * In case the Pizzeria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PizzeriaUpdateInput, PizzeriaUncheckedUpdateInput>
  }

  /**
   * Pizzeria delete
   */
  export type PizzeriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzeriaInclude<ExtArgs> | null
    /**
     * Filter which Pizzeria to delete.
     */
    where: PizzeriaWhereUniqueInput
  }

  /**
   * Pizzeria deleteMany
   */
  export type PizzeriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pizzerias to delete
     */
    where?: PizzeriaWhereInput | $Types.Skip
    /**
     * Limit how many Pizzerias to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Pizzeria.workingHours
   */
  export type Pizzeria$workingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    where?: WorkingHourWhereInput | $Types.Skip
    orderBy?: WorkingHourOrderByWithRelationInput | WorkingHourOrderByWithRelationInput[] | $Types.Skip
    cursor?: WorkingHourWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: WorkingHourScalarFieldEnum | WorkingHourScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Pizzeria without action
   */
  export type PizzeriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizzeria
     */
    select?: PizzeriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pizzeria
     */
    omit?: PizzeriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzeriaInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    totalAmount: Decimal | null
    deliveryTax: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    totalAmount: Decimal | null
    deliveryTax: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    deliveryAddress: string | null
    status: string | null
    totalAmount: Decimal | null
    paymentMethod: string | null
    deliveryTax: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    deliveryAddress: string | null
    status: string | null
    totalAmount: Decimal | null
    paymentMethod: string | null
    deliveryTax: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    customerId: number
    deliveryAddress: number
    status: number
    totalAmount: number
    paymentMethod: number
    deliveryTax: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true | $Types.Skip
    customerId?: true | $Types.Skip
    totalAmount?: true | $Types.Skip
    deliveryTax?: true | $Types.Skip
  }

  export type OrderSumAggregateInputType = {
    id?: true | $Types.Skip
    customerId?: true | $Types.Skip
    totalAmount?: true | $Types.Skip
    deliveryTax?: true | $Types.Skip
  }

  export type OrderMinAggregateInputType = {
    id?: true | $Types.Skip
    customerId?: true | $Types.Skip
    deliveryAddress?: true | $Types.Skip
    status?: true | $Types.Skip
    totalAmount?: true | $Types.Skip
    paymentMethod?: true | $Types.Skip
    deliveryTax?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type OrderMaxAggregateInputType = {
    id?: true | $Types.Skip
    customerId?: true | $Types.Skip
    deliveryAddress?: true | $Types.Skip
    status?: true | $Types.Skip
    totalAmount?: true | $Types.Skip
    paymentMethod?: true | $Types.Skip
    deliveryTax?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type OrderCountAggregateInputType = {
    id?: true | $Types.Skip
    customerId?: true | $Types.Skip
    deliveryAddress?: true | $Types.Skip
    status?: true | $Types.Skip
    totalAmount?: true | $Types.Skip
    paymentMethod?: true | $Types.Skip
    deliveryTax?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput | $Types.Skip
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[] | $Types.Skip
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    customerId: number
    deliveryAddress: string
    status: string
    totalAmount: Decimal
    paymentMethod: string
    deliveryTax: Decimal
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    customerId?: boolean | $Types.Skip
    deliveryAddress?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    totalAmount?: boolean | $Types.Skip
    paymentMethod?: boolean | $Types.Skip
    deliveryTax?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
    items?: boolean | Order$itemsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    customerId?: boolean | $Types.Skip
    deliveryAddress?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    totalAmount?: boolean | $Types.Skip
    paymentMethod?: boolean | $Types.Skip
    deliveryTax?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    customerId?: boolean | $Types.Skip
    deliveryAddress?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    totalAmount?: boolean | $Types.Skip
    paymentMethod?: boolean | $Types.Skip
    deliveryTax?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean | $Types.Skip
    customerId?: boolean | $Types.Skip
    deliveryAddress?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    totalAmount?: boolean | $Types.Skip
    paymentMethod?: boolean | $Types.Skip
    deliveryTax?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "deliveryAddress" | "status" | "totalAmount" | "paymentMethod" | "deliveryTax" | "createdAt" | "updatedAt", ExtArgs["result"]["order"], $Types.Skip>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
    items?: boolean | Order$itemsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      deliveryAddress: string
      status: string
      totalAmount: Prisma.Decimal
      paymentMethod: string
      deliveryTax: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly customerId: FieldRef<"Order", 'Int'>
    readonly deliveryAddress: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly totalAmount: FieldRef<"Order", 'Decimal'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly deliveryTax: FieldRef<"Order", 'Decimal'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * Limit how many Orders to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * Limit how many Orders to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * Limit how many Orders to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput | $Types.Skip
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    drinkId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    drinkId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    drinkId: number | null
    itemType: string | null
    quantity: number | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    drinkId: number | null
    itemType: string | null
    quantity: number | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    drinkId: number
    itemType: number
    quantity: number
    unitPrice: number
    subtotal: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true | $Types.Skip
    orderId?: true | $Types.Skip
    drinkId?: true | $Types.Skip
    quantity?: true | $Types.Skip
    unitPrice?: true | $Types.Skip
    subtotal?: true | $Types.Skip
  }

  export type OrderItemSumAggregateInputType = {
    id?: true | $Types.Skip
    orderId?: true | $Types.Skip
    drinkId?: true | $Types.Skip
    quantity?: true | $Types.Skip
    unitPrice?: true | $Types.Skip
    subtotal?: true | $Types.Skip
  }

  export type OrderItemMinAggregateInputType = {
    id?: true | $Types.Skip
    orderId?: true | $Types.Skip
    drinkId?: true | $Types.Skip
    itemType?: true | $Types.Skip
    quantity?: true | $Types.Skip
    unitPrice?: true | $Types.Skip
    subtotal?: true | $Types.Skip
    notes?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true | $Types.Skip
    orderId?: true | $Types.Skip
    drinkId?: true | $Types.Skip
    itemType?: true | $Types.Skip
    quantity?: true | $Types.Skip
    unitPrice?: true | $Types.Skip
    subtotal?: true | $Types.Skip
    notes?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type OrderItemCountAggregateInputType = {
    id?: true | $Types.Skip
    orderId?: true | $Types.Skip
    drinkId?: true | $Types.Skip
    itemType?: true | $Types.Skip
    quantity?: true | $Types.Skip
    unitPrice?: true | $Types.Skip
    subtotal?: true | $Types.Skip
    notes?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput | $Types.Skip
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[] | $Types.Skip
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    orderId: number
    drinkId: number | null
    itemType: string
    quantity: number
    unitPrice: Decimal
    subtotal: Decimal
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
    drinkId?: boolean | $Types.Skip
    itemType?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    unitPrice?: boolean | $Types.Skip
    subtotal?: boolean | $Types.Skip
    notes?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    pizza?: boolean | OrderItem$pizzaArgs<ExtArgs> | $Types.Skip
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    drink?: boolean | OrderItem$drinkArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
    drinkId?: boolean | $Types.Skip
    itemType?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    unitPrice?: boolean | $Types.Skip
    subtotal?: boolean | $Types.Skip
    notes?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    drink?: boolean | OrderItem$drinkArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
    drinkId?: boolean | $Types.Skip
    itemType?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    unitPrice?: boolean | $Types.Skip
    subtotal?: boolean | $Types.Skip
    notes?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    drink?: boolean | OrderItem$drinkArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
    drinkId?: boolean | $Types.Skip
    itemType?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    unitPrice?: boolean | $Types.Skip
    subtotal?: boolean | $Types.Skip
    notes?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "drinkId" | "itemType" | "quantity" | "unitPrice" | "subtotal" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["orderItem"], $Types.Skip>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizza?: boolean | OrderItem$pizzaArgs<ExtArgs> | $Types.Skip
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    drink?: boolean | OrderItem$drinkArgs<ExtArgs> | $Types.Skip
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    drink?: boolean | OrderItem$drinkArgs<ExtArgs> | $Types.Skip
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    drink?: boolean | OrderItem$drinkArgs<ExtArgs> | $Types.Skip
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      pizza: Prisma.$OrderPizzaPayload<ExtArgs> | null
      order: Prisma.$OrderPayload<ExtArgs>
      drink: Prisma.$DrinkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      drinkId: number | null
      itemType: string
      quantity: number
      unitPrice: Prisma.Decimal
      subtotal: Prisma.Decimal
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pizza<T extends OrderItem$pizzaArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$pizzaArgs<ExtArgs>>): Prisma__OrderPizzaClient<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    drink<T extends OrderItem$drinkArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$drinkArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly orderId: FieldRef<"OrderItem", 'Int'>
    readonly drinkId: FieldRef<"OrderItem", 'Int'>
    readonly itemType: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly subtotal: FieldRef<"OrderItem", 'Decimal'>
    readonly notes: FieldRef<"OrderItem", 'String'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number | $Types.Skip
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * OrderItem.pizza
   */
  export type OrderItem$pizzaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    where?: OrderPizzaWhereInput | $Types.Skip
  }

  /**
   * OrderItem.drink
   */
  export type OrderItem$drinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    where?: DrinkWhereInput | $Types.Skip
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model OrderPizza
   */

  export type AggregateOrderPizza = {
    _count: OrderPizzaCountAggregateOutputType | null
    _avg: OrderPizzaAvgAggregateOutputType | null
    _sum: OrderPizzaSumAggregateOutputType | null
    _min: OrderPizzaMinAggregateOutputType | null
    _max: OrderPizzaMaxAggregateOutputType | null
  }

  export type OrderPizzaAvgAggregateOutputType = {
    id: number | null
    orderItemId: number | null
    firstFlavorId: number | null
    secondFlavorId: number | null
    crustId: number | null
  }

  export type OrderPizzaSumAggregateOutputType = {
    id: number | null
    orderItemId: number | null
    firstFlavorId: number | null
    secondFlavorId: number | null
    crustId: number | null
  }

  export type OrderPizzaMinAggregateOutputType = {
    id: number | null
    orderItemId: number | null
    firstFlavorId: number | null
    secondFlavorId: number | null
    crustId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderPizzaMaxAggregateOutputType = {
    id: number | null
    orderItemId: number | null
    firstFlavorId: number | null
    secondFlavorId: number | null
    crustId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderPizzaCountAggregateOutputType = {
    id: number
    orderItemId: number
    firstFlavorId: number
    secondFlavorId: number
    crustId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderPizzaAvgAggregateInputType = {
    id?: true | $Types.Skip
    orderItemId?: true | $Types.Skip
    firstFlavorId?: true | $Types.Skip
    secondFlavorId?: true | $Types.Skip
    crustId?: true | $Types.Skip
  }

  export type OrderPizzaSumAggregateInputType = {
    id?: true | $Types.Skip
    orderItemId?: true | $Types.Skip
    firstFlavorId?: true | $Types.Skip
    secondFlavorId?: true | $Types.Skip
    crustId?: true | $Types.Skip
  }

  export type OrderPizzaMinAggregateInputType = {
    id?: true | $Types.Skip
    orderItemId?: true | $Types.Skip
    firstFlavorId?: true | $Types.Skip
    secondFlavorId?: true | $Types.Skip
    crustId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type OrderPizzaMaxAggregateInputType = {
    id?: true | $Types.Skip
    orderItemId?: true | $Types.Skip
    firstFlavorId?: true | $Types.Skip
    secondFlavorId?: true | $Types.Skip
    crustId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type OrderPizzaCountAggregateInputType = {
    id?: true | $Types.Skip
    orderItemId?: true | $Types.Skip
    firstFlavorId?: true | $Types.Skip
    secondFlavorId?: true | $Types.Skip
    crustId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type OrderPizzaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderPizza to aggregate.
     */
    where?: OrderPizzaWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPizzas to fetch.
     */
    orderBy?: OrderPizzaOrderByWithRelationInput | OrderPizzaOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderPizzaWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPizzas from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPizzas.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderPizzas
    **/
    _count?: true | OrderPizzaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderPizzaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderPizzaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderPizzaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderPizzaMaxAggregateInputType
  }

  export type GetOrderPizzaAggregateType<T extends OrderPizzaAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderPizza]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderPizza[P]>
      : GetScalarType<T[P], AggregateOrderPizza[P]>
  }




  export type OrderPizzaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderPizzaWhereInput | $Types.Skip
    orderBy?: OrderPizzaOrderByWithAggregationInput | OrderPizzaOrderByWithAggregationInput[] | $Types.Skip
    by: OrderPizzaScalarFieldEnum[] | OrderPizzaScalarFieldEnum
    having?: OrderPizzaScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: OrderPizzaCountAggregateInputType | true
    _avg?: OrderPizzaAvgAggregateInputType
    _sum?: OrderPizzaSumAggregateInputType
    _min?: OrderPizzaMinAggregateInputType
    _max?: OrderPizzaMaxAggregateInputType
  }

  export type OrderPizzaGroupByOutputType = {
    id: number
    orderItemId: number
    firstFlavorId: number
    secondFlavorId: number | null
    crustId: number
    createdAt: Date
    updatedAt: Date
    _count: OrderPizzaCountAggregateOutputType | null
    _avg: OrderPizzaAvgAggregateOutputType | null
    _sum: OrderPizzaSumAggregateOutputType | null
    _min: OrderPizzaMinAggregateOutputType | null
    _max: OrderPizzaMaxAggregateOutputType | null
  }

  type GetOrderPizzaGroupByPayload<T extends OrderPizzaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderPizzaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderPizzaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderPizzaGroupByOutputType[P]>
            : GetScalarType<T[P], OrderPizzaGroupByOutputType[P]>
        }
      >
    >


  export type OrderPizzaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    orderItemId?: boolean | $Types.Skip
    firstFlavorId?: boolean | $Types.Skip
    secondFlavorId?: boolean | $Types.Skip
    crustId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs> | $Types.Skip
    firstFlavor?: boolean | FlavorDefaultArgs<ExtArgs> | $Types.Skip
    secondFlavor?: boolean | OrderPizza$secondFlavorArgs<ExtArgs> | $Types.Skip
    crust?: boolean | CrustDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderPizza"]>

  export type OrderPizzaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    orderItemId?: boolean | $Types.Skip
    firstFlavorId?: boolean | $Types.Skip
    secondFlavorId?: boolean | $Types.Skip
    crustId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs> | $Types.Skip
    firstFlavor?: boolean | FlavorDefaultArgs<ExtArgs> | $Types.Skip
    secondFlavor?: boolean | OrderPizza$secondFlavorArgs<ExtArgs> | $Types.Skip
    crust?: boolean | CrustDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderPizza"]>

  export type OrderPizzaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    orderItemId?: boolean | $Types.Skip
    firstFlavorId?: boolean | $Types.Skip
    secondFlavorId?: boolean | $Types.Skip
    crustId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs> | $Types.Skip
    firstFlavor?: boolean | FlavorDefaultArgs<ExtArgs> | $Types.Skip
    secondFlavor?: boolean | OrderPizza$secondFlavorArgs<ExtArgs> | $Types.Skip
    crust?: boolean | CrustDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderPizza"]>

  export type OrderPizzaSelectScalar = {
    id?: boolean | $Types.Skip
    orderItemId?: boolean | $Types.Skip
    firstFlavorId?: boolean | $Types.Skip
    secondFlavorId?: boolean | $Types.Skip
    crustId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type OrderPizzaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderItemId" | "firstFlavorId" | "secondFlavorId" | "crustId" | "createdAt" | "updatedAt", ExtArgs["result"]["orderPizza"], $Types.Skip>
  export type OrderPizzaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs> | $Types.Skip
    firstFlavor?: boolean | FlavorDefaultArgs<ExtArgs> | $Types.Skip
    secondFlavor?: boolean | OrderPizza$secondFlavorArgs<ExtArgs> | $Types.Skip
    crust?: boolean | CrustDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OrderPizzaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs> | $Types.Skip
    firstFlavor?: boolean | FlavorDefaultArgs<ExtArgs> | $Types.Skip
    secondFlavor?: boolean | OrderPizza$secondFlavorArgs<ExtArgs> | $Types.Skip
    crust?: boolean | CrustDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OrderPizzaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs> | $Types.Skip
    firstFlavor?: boolean | FlavorDefaultArgs<ExtArgs> | $Types.Skip
    secondFlavor?: boolean | OrderPizza$secondFlavorArgs<ExtArgs> | $Types.Skip
    crust?: boolean | CrustDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $OrderPizzaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderPizza"
    objects: {
      orderItem: Prisma.$OrderItemPayload<ExtArgs>
      firstFlavor: Prisma.$FlavorPayload<ExtArgs>
      secondFlavor: Prisma.$FlavorPayload<ExtArgs> | null
      crust: Prisma.$CrustPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderItemId: number
      firstFlavorId: number
      secondFlavorId: number | null
      crustId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderPizza"]>
    composites: {}
  }

  type OrderPizzaGetPayload<S extends boolean | null | undefined | OrderPizzaDefaultArgs> = $Result.GetResult<Prisma.$OrderPizzaPayload, S>

  type OrderPizzaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderPizzaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderPizzaCountAggregateInputType | true
    }

  export interface OrderPizzaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderPizza'], meta: { name: 'OrderPizza' } }
    /**
     * Find zero or one OrderPizza that matches the filter.
     * @param {OrderPizzaFindUniqueArgs} args - Arguments to find a OrderPizza
     * @example
     * // Get one OrderPizza
     * const orderPizza = await prisma.orderPizza.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderPizzaFindUniqueArgs>(args: SelectSubset<T, OrderPizzaFindUniqueArgs<ExtArgs>>): Prisma__OrderPizzaClient<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderPizza that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderPizzaFindUniqueOrThrowArgs} args - Arguments to find a OrderPizza
     * @example
     * // Get one OrderPizza
     * const orderPizza = await prisma.orderPizza.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderPizzaFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderPizzaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderPizzaClient<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderPizza that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPizzaFindFirstArgs} args - Arguments to find a OrderPizza
     * @example
     * // Get one OrderPizza
     * const orderPizza = await prisma.orderPizza.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderPizzaFindFirstArgs>(args?: SelectSubset<T, OrderPizzaFindFirstArgs<ExtArgs>>): Prisma__OrderPizzaClient<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderPizza that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPizzaFindFirstOrThrowArgs} args - Arguments to find a OrderPizza
     * @example
     * // Get one OrderPizza
     * const orderPizza = await prisma.orderPizza.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderPizzaFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderPizzaFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderPizzaClient<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderPizzas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPizzaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderPizzas
     * const orderPizzas = await prisma.orderPizza.findMany()
     * 
     * // Get first 10 OrderPizzas
     * const orderPizzas = await prisma.orderPizza.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderPizzaWithIdOnly = await prisma.orderPizza.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderPizzaFindManyArgs>(args?: SelectSubset<T, OrderPizzaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderPizza.
     * @param {OrderPizzaCreateArgs} args - Arguments to create a OrderPizza.
     * @example
     * // Create one OrderPizza
     * const OrderPizza = await prisma.orderPizza.create({
     *   data: {
     *     // ... data to create a OrderPizza
     *   }
     * })
     * 
     */
    create<T extends OrderPizzaCreateArgs>(args: SelectSubset<T, OrderPizzaCreateArgs<ExtArgs>>): Prisma__OrderPizzaClient<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderPizzas.
     * @param {OrderPizzaCreateManyArgs} args - Arguments to create many OrderPizzas.
     * @example
     * // Create many OrderPizzas
     * const orderPizza = await prisma.orderPizza.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderPizzaCreateManyArgs>(args?: SelectSubset<T, OrderPizzaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderPizzas and returns the data saved in the database.
     * @param {OrderPizzaCreateManyAndReturnArgs} args - Arguments to create many OrderPizzas.
     * @example
     * // Create many OrderPizzas
     * const orderPizza = await prisma.orderPizza.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderPizzas and only return the `id`
     * const orderPizzaWithIdOnly = await prisma.orderPizza.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderPizzaCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderPizzaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderPizza.
     * @param {OrderPizzaDeleteArgs} args - Arguments to delete one OrderPizza.
     * @example
     * // Delete one OrderPizza
     * const OrderPizza = await prisma.orderPizza.delete({
     *   where: {
     *     // ... filter to delete one OrderPizza
     *   }
     * })
     * 
     */
    delete<T extends OrderPizzaDeleteArgs>(args: SelectSubset<T, OrderPizzaDeleteArgs<ExtArgs>>): Prisma__OrderPizzaClient<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderPizza.
     * @param {OrderPizzaUpdateArgs} args - Arguments to update one OrderPizza.
     * @example
     * // Update one OrderPizza
     * const orderPizza = await prisma.orderPizza.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderPizzaUpdateArgs>(args: SelectSubset<T, OrderPizzaUpdateArgs<ExtArgs>>): Prisma__OrderPizzaClient<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderPizzas.
     * @param {OrderPizzaDeleteManyArgs} args - Arguments to filter OrderPizzas to delete.
     * @example
     * // Delete a few OrderPizzas
     * const { count } = await prisma.orderPizza.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderPizzaDeleteManyArgs>(args?: SelectSubset<T, OrderPizzaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderPizzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPizzaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderPizzas
     * const orderPizza = await prisma.orderPizza.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderPizzaUpdateManyArgs>(args: SelectSubset<T, OrderPizzaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderPizzas and returns the data updated in the database.
     * @param {OrderPizzaUpdateManyAndReturnArgs} args - Arguments to update many OrderPizzas.
     * @example
     * // Update many OrderPizzas
     * const orderPizza = await prisma.orderPizza.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderPizzas and only return the `id`
     * const orderPizzaWithIdOnly = await prisma.orderPizza.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderPizzaUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderPizzaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderPizza.
     * @param {OrderPizzaUpsertArgs} args - Arguments to update or create a OrderPizza.
     * @example
     * // Update or create a OrderPizza
     * const orderPizza = await prisma.orderPizza.upsert({
     *   create: {
     *     // ... data to create a OrderPizza
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderPizza we want to update
     *   }
     * })
     */
    upsert<T extends OrderPizzaUpsertArgs>(args: SelectSubset<T, OrderPizzaUpsertArgs<ExtArgs>>): Prisma__OrderPizzaClient<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderPizzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPizzaCountArgs} args - Arguments to filter OrderPizzas to count.
     * @example
     * // Count the number of OrderPizzas
     * const count = await prisma.orderPizza.count({
     *   where: {
     *     // ... the filter for the OrderPizzas we want to count
     *   }
     * })
    **/
    count<T extends OrderPizzaCountArgs>(
      args?: Subset<T, OrderPizzaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderPizzaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderPizza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPizzaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderPizzaAggregateArgs>(args: Subset<T, OrderPizzaAggregateArgs>): Prisma.PrismaPromise<GetOrderPizzaAggregateType<T>>

    /**
     * Group by OrderPizza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderPizzaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderPizzaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderPizzaGroupByArgs['orderBy'] }
        : { orderBy?: OrderPizzaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderPizzaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderPizzaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderPizza model
   */
  readonly fields: OrderPizzaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderPizza.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderPizzaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItem<T extends OrderItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderItemDefaultArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    firstFlavor<T extends FlavorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlavorDefaultArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    secondFlavor<T extends OrderPizza$secondFlavorArgs<ExtArgs> = {}>(args?: Subset<T, OrderPizza$secondFlavorArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    crust<T extends CrustDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrustDefaultArgs<ExtArgs>>): Prisma__CrustClient<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderPizza model
   */
  interface OrderPizzaFieldRefs {
    readonly id: FieldRef<"OrderPizza", 'Int'>
    readonly orderItemId: FieldRef<"OrderPizza", 'Int'>
    readonly firstFlavorId: FieldRef<"OrderPizza", 'Int'>
    readonly secondFlavorId: FieldRef<"OrderPizza", 'Int'>
    readonly crustId: FieldRef<"OrderPizza", 'Int'>
    readonly createdAt: FieldRef<"OrderPizza", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderPizza", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderPizza findUnique
   */
  export type OrderPizzaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    /**
     * Filter, which OrderPizza to fetch.
     */
    where: OrderPizzaWhereUniqueInput
  }

  /**
   * OrderPizza findUniqueOrThrow
   */
  export type OrderPizzaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    /**
     * Filter, which OrderPizza to fetch.
     */
    where: OrderPizzaWhereUniqueInput
  }

  /**
   * OrderPizza findFirst
   */
  export type OrderPizzaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    /**
     * Filter, which OrderPizza to fetch.
     */
    where?: OrderPizzaWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPizzas to fetch.
     */
    orderBy?: OrderPizzaOrderByWithRelationInput | OrderPizzaOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderPizzas.
     */
    cursor?: OrderPizzaWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPizzas from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPizzas.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderPizzas.
     */
    distinct?: OrderPizzaScalarFieldEnum | OrderPizzaScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderPizza findFirstOrThrow
   */
  export type OrderPizzaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    /**
     * Filter, which OrderPizza to fetch.
     */
    where?: OrderPizzaWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPizzas to fetch.
     */
    orderBy?: OrderPizzaOrderByWithRelationInput | OrderPizzaOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderPizzas.
     */
    cursor?: OrderPizzaWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPizzas from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPizzas.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderPizzas.
     */
    distinct?: OrderPizzaScalarFieldEnum | OrderPizzaScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderPizza findMany
   */
  export type OrderPizzaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    /**
     * Filter, which OrderPizzas to fetch.
     */
    where?: OrderPizzaWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderPizzas to fetch.
     */
    orderBy?: OrderPizzaOrderByWithRelationInput | OrderPizzaOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderPizzas.
     */
    cursor?: OrderPizzaWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderPizzas from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderPizzas.
     */
    skip?: number | $Types.Skip
    distinct?: OrderPizzaScalarFieldEnum | OrderPizzaScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderPizza create
   */
  export type OrderPizzaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderPizza.
     */
    data: XOR<OrderPizzaCreateInput, OrderPizzaUncheckedCreateInput>
  }

  /**
   * OrderPizza createMany
   */
  export type OrderPizzaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderPizzas.
     */
    data: OrderPizzaCreateManyInput | OrderPizzaCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * OrderPizza createManyAndReturn
   */
  export type OrderPizzaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * The data used to create many OrderPizzas.
     */
    data: OrderPizzaCreateManyInput | OrderPizzaCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderPizza update
   */
  export type OrderPizzaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderPizza.
     */
    data: XOR<OrderPizzaUpdateInput, OrderPizzaUncheckedUpdateInput>
    /**
     * Choose, which OrderPizza to update.
     */
    where: OrderPizzaWhereUniqueInput
  }

  /**
   * OrderPizza updateMany
   */
  export type OrderPizzaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderPizzas.
     */
    data: XOR<OrderPizzaUpdateManyMutationInput, OrderPizzaUncheckedUpdateManyInput>
    /**
     * Filter which OrderPizzas to update
     */
    where?: OrderPizzaWhereInput | $Types.Skip
    /**
     * Limit how many OrderPizzas to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * OrderPizza updateManyAndReturn
   */
  export type OrderPizzaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * The data used to update OrderPizzas.
     */
    data: XOR<OrderPizzaUpdateManyMutationInput, OrderPizzaUncheckedUpdateManyInput>
    /**
     * Filter which OrderPizzas to update
     */
    where?: OrderPizzaWhereInput | $Types.Skip
    /**
     * Limit how many OrderPizzas to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderPizza upsert
   */
  export type OrderPizzaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderPizza to update in case it exists.
     */
    where: OrderPizzaWhereUniqueInput
    /**
     * In case the OrderPizza found by the `where` argument doesn't exist, create a new OrderPizza with this data.
     */
    create: XOR<OrderPizzaCreateInput, OrderPizzaUncheckedCreateInput>
    /**
     * In case the OrderPizza was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderPizzaUpdateInput, OrderPizzaUncheckedUpdateInput>
  }

  /**
   * OrderPizza delete
   */
  export type OrderPizzaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    /**
     * Filter which OrderPizza to delete.
     */
    where: OrderPizzaWhereUniqueInput
  }

  /**
   * OrderPizza deleteMany
   */
  export type OrderPizzaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderPizzas to delete
     */
    where?: OrderPizzaWhereInput | $Types.Skip
    /**
     * Limit how many OrderPizzas to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * OrderPizza.secondFlavor
   */
  export type OrderPizza$secondFlavorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    where?: FlavorWhereInput | $Types.Skip
  }

  /**
   * OrderPizza without action
   */
  export type OrderPizzaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
  }


  /**
   * Model Flavor
   */

  export type AggregateFlavor = {
    _count: FlavorCountAggregateOutputType | null
    _avg: FlavorAvgAggregateOutputType | null
    _sum: FlavorSumAggregateOutputType | null
    _min: FlavorMinAggregateOutputType | null
    _max: FlavorMaxAggregateOutputType | null
  }

  export type FlavorAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type FlavorSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type FlavorMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    price: Decimal | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlavorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    price: Decimal | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlavorCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    price: number
    imageUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlavorAvgAggregateInputType = {
    id?: true | $Types.Skip
    price?: true | $Types.Skip
  }

  export type FlavorSumAggregateInputType = {
    id?: true | $Types.Skip
    price?: true | $Types.Skip
  }

  export type FlavorMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    category?: true | $Types.Skip
    price?: true | $Types.Skip
    imageUrl?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type FlavorMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    category?: true | $Types.Skip
    price?: true | $Types.Skip
    imageUrl?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type FlavorCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    category?: true | $Types.Skip
    price?: true | $Types.Skip
    imageUrl?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type FlavorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flavor to aggregate.
     */
    where?: FlavorWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flavors to fetch.
     */
    orderBy?: FlavorOrderByWithRelationInput | FlavorOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlavorWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flavors from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flavors.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flavors
    **/
    _count?: true | FlavorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlavorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlavorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlavorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlavorMaxAggregateInputType
  }

  export type GetFlavorAggregateType<T extends FlavorAggregateArgs> = {
        [P in keyof T & keyof AggregateFlavor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlavor[P]>
      : GetScalarType<T[P], AggregateFlavor[P]>
  }




  export type FlavorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlavorWhereInput | $Types.Skip
    orderBy?: FlavorOrderByWithAggregationInput | FlavorOrderByWithAggregationInput[] | $Types.Skip
    by: FlavorScalarFieldEnum[] | FlavorScalarFieldEnum
    having?: FlavorScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: FlavorCountAggregateInputType | true
    _avg?: FlavorAvgAggregateInputType
    _sum?: FlavorSumAggregateInputType
    _min?: FlavorMinAggregateInputType
    _max?: FlavorMaxAggregateInputType
  }

  export type FlavorGroupByOutputType = {
    id: number
    name: string
    description: string
    category: string
    price: Decimal
    imageUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: FlavorCountAggregateOutputType | null
    _avg: FlavorAvgAggregateOutputType | null
    _sum: FlavorSumAggregateOutputType | null
    _min: FlavorMinAggregateOutputType | null
    _max: FlavorMaxAggregateOutputType | null
  }

  type GetFlavorGroupByPayload<T extends FlavorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlavorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlavorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlavorGroupByOutputType[P]>
            : GetScalarType<T[P], FlavorGroupByOutputType[P]>
        }
      >
    >


  export type FlavorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    imageUrl?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    firstPizzas?: boolean | Flavor$firstPizzasArgs<ExtArgs> | $Types.Skip
    secondPizzas?: boolean | Flavor$secondPizzasArgs<ExtArgs> | $Types.Skip
    _count?: boolean | FlavorCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["flavor"]>

  export type FlavorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    imageUrl?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["flavor"]>

  export type FlavorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    imageUrl?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["flavor"]>

  export type FlavorSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    category?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    imageUrl?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type FlavorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "price" | "imageUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["flavor"], $Types.Skip>
  export type FlavorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    firstPizzas?: boolean | Flavor$firstPizzasArgs<ExtArgs> | $Types.Skip
    secondPizzas?: boolean | Flavor$secondPizzasArgs<ExtArgs> | $Types.Skip
    _count?: boolean | FlavorCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type FlavorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FlavorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FlavorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flavor"
    objects: {
      firstPizzas: Prisma.$OrderPizzaPayload<ExtArgs>[]
      secondPizzas: Prisma.$OrderPizzaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      category: string
      price: Prisma.Decimal
      imageUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flavor"]>
    composites: {}
  }

  type FlavorGetPayload<S extends boolean | null | undefined | FlavorDefaultArgs> = $Result.GetResult<Prisma.$FlavorPayload, S>

  type FlavorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlavorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlavorCountAggregateInputType | true
    }

  export interface FlavorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flavor'], meta: { name: 'Flavor' } }
    /**
     * Find zero or one Flavor that matches the filter.
     * @param {FlavorFindUniqueArgs} args - Arguments to find a Flavor
     * @example
     * // Get one Flavor
     * const flavor = await prisma.flavor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlavorFindUniqueArgs>(args: SelectSubset<T, FlavorFindUniqueArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flavor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlavorFindUniqueOrThrowArgs} args - Arguments to find a Flavor
     * @example
     * // Get one Flavor
     * const flavor = await prisma.flavor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlavorFindUniqueOrThrowArgs>(args: SelectSubset<T, FlavorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flavor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorFindFirstArgs} args - Arguments to find a Flavor
     * @example
     * // Get one Flavor
     * const flavor = await prisma.flavor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlavorFindFirstArgs>(args?: SelectSubset<T, FlavorFindFirstArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flavor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorFindFirstOrThrowArgs} args - Arguments to find a Flavor
     * @example
     * // Get one Flavor
     * const flavor = await prisma.flavor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlavorFindFirstOrThrowArgs>(args?: SelectSubset<T, FlavorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flavors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flavors
     * const flavors = await prisma.flavor.findMany()
     * 
     * // Get first 10 Flavors
     * const flavors = await prisma.flavor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flavorWithIdOnly = await prisma.flavor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlavorFindManyArgs>(args?: SelectSubset<T, FlavorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flavor.
     * @param {FlavorCreateArgs} args - Arguments to create a Flavor.
     * @example
     * // Create one Flavor
     * const Flavor = await prisma.flavor.create({
     *   data: {
     *     // ... data to create a Flavor
     *   }
     * })
     * 
     */
    create<T extends FlavorCreateArgs>(args: SelectSubset<T, FlavorCreateArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flavors.
     * @param {FlavorCreateManyArgs} args - Arguments to create many Flavors.
     * @example
     * // Create many Flavors
     * const flavor = await prisma.flavor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlavorCreateManyArgs>(args?: SelectSubset<T, FlavorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flavors and returns the data saved in the database.
     * @param {FlavorCreateManyAndReturnArgs} args - Arguments to create many Flavors.
     * @example
     * // Create many Flavors
     * const flavor = await prisma.flavor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flavors and only return the `id`
     * const flavorWithIdOnly = await prisma.flavor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlavorCreateManyAndReturnArgs>(args?: SelectSubset<T, FlavorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flavor.
     * @param {FlavorDeleteArgs} args - Arguments to delete one Flavor.
     * @example
     * // Delete one Flavor
     * const Flavor = await prisma.flavor.delete({
     *   where: {
     *     // ... filter to delete one Flavor
     *   }
     * })
     * 
     */
    delete<T extends FlavorDeleteArgs>(args: SelectSubset<T, FlavorDeleteArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flavor.
     * @param {FlavorUpdateArgs} args - Arguments to update one Flavor.
     * @example
     * // Update one Flavor
     * const flavor = await prisma.flavor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlavorUpdateArgs>(args: SelectSubset<T, FlavorUpdateArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flavors.
     * @param {FlavorDeleteManyArgs} args - Arguments to filter Flavors to delete.
     * @example
     * // Delete a few Flavors
     * const { count } = await prisma.flavor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlavorDeleteManyArgs>(args?: SelectSubset<T, FlavorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flavors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flavors
     * const flavor = await prisma.flavor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlavorUpdateManyArgs>(args: SelectSubset<T, FlavorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flavors and returns the data updated in the database.
     * @param {FlavorUpdateManyAndReturnArgs} args - Arguments to update many Flavors.
     * @example
     * // Update many Flavors
     * const flavor = await prisma.flavor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flavors and only return the `id`
     * const flavorWithIdOnly = await prisma.flavor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlavorUpdateManyAndReturnArgs>(args: SelectSubset<T, FlavorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flavor.
     * @param {FlavorUpsertArgs} args - Arguments to update or create a Flavor.
     * @example
     * // Update or create a Flavor
     * const flavor = await prisma.flavor.upsert({
     *   create: {
     *     // ... data to create a Flavor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flavor we want to update
     *   }
     * })
     */
    upsert<T extends FlavorUpsertArgs>(args: SelectSubset<T, FlavorUpsertArgs<ExtArgs>>): Prisma__FlavorClient<$Result.GetResult<Prisma.$FlavorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flavors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorCountArgs} args - Arguments to filter Flavors to count.
     * @example
     * // Count the number of Flavors
     * const count = await prisma.flavor.count({
     *   where: {
     *     // ... the filter for the Flavors we want to count
     *   }
     * })
    **/
    count<T extends FlavorCountArgs>(
      args?: Subset<T, FlavorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlavorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flavor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlavorAggregateArgs>(args: Subset<T, FlavorAggregateArgs>): Prisma.PrismaPromise<GetFlavorAggregateType<T>>

    /**
     * Group by Flavor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlavorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlavorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlavorGroupByArgs['orderBy'] }
        : { orderBy?: FlavorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlavorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlavorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flavor model
   */
  readonly fields: FlavorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flavor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlavorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    firstPizzas<T extends Flavor$firstPizzasArgs<ExtArgs> = {}>(args?: Subset<T, Flavor$firstPizzasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    secondPizzas<T extends Flavor$secondPizzasArgs<ExtArgs> = {}>(args?: Subset<T, Flavor$secondPizzasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flavor model
   */
  interface FlavorFieldRefs {
    readonly id: FieldRef<"Flavor", 'Int'>
    readonly name: FieldRef<"Flavor", 'String'>
    readonly description: FieldRef<"Flavor", 'String'>
    readonly category: FieldRef<"Flavor", 'String'>
    readonly price: FieldRef<"Flavor", 'Decimal'>
    readonly imageUrl: FieldRef<"Flavor", 'String'>
    readonly isActive: FieldRef<"Flavor", 'Boolean'>
    readonly createdAt: FieldRef<"Flavor", 'DateTime'>
    readonly updatedAt: FieldRef<"Flavor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flavor findUnique
   */
  export type FlavorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter, which Flavor to fetch.
     */
    where: FlavorWhereUniqueInput
  }

  /**
   * Flavor findUniqueOrThrow
   */
  export type FlavorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter, which Flavor to fetch.
     */
    where: FlavorWhereUniqueInput
  }

  /**
   * Flavor findFirst
   */
  export type FlavorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter, which Flavor to fetch.
     */
    where?: FlavorWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flavors to fetch.
     */
    orderBy?: FlavorOrderByWithRelationInput | FlavorOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flavors.
     */
    cursor?: FlavorWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flavors from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flavors.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flavors.
     */
    distinct?: FlavorScalarFieldEnum | FlavorScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Flavor findFirstOrThrow
   */
  export type FlavorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter, which Flavor to fetch.
     */
    where?: FlavorWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flavors to fetch.
     */
    orderBy?: FlavorOrderByWithRelationInput | FlavorOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flavors.
     */
    cursor?: FlavorWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flavors from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flavors.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flavors.
     */
    distinct?: FlavorScalarFieldEnum | FlavorScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Flavor findMany
   */
  export type FlavorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter, which Flavors to fetch.
     */
    where?: FlavorWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flavors to fetch.
     */
    orderBy?: FlavorOrderByWithRelationInput | FlavorOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flavors.
     */
    cursor?: FlavorWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flavors from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flavors.
     */
    skip?: number | $Types.Skip
    distinct?: FlavorScalarFieldEnum | FlavorScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Flavor create
   */
  export type FlavorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * The data needed to create a Flavor.
     */
    data: XOR<FlavorCreateInput, FlavorUncheckedCreateInput>
  }

  /**
   * Flavor createMany
   */
  export type FlavorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flavors.
     */
    data: FlavorCreateManyInput | FlavorCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Flavor createManyAndReturn
   */
  export type FlavorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * The data used to create many Flavors.
     */
    data: FlavorCreateManyInput | FlavorCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Flavor update
   */
  export type FlavorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * The data needed to update a Flavor.
     */
    data: XOR<FlavorUpdateInput, FlavorUncheckedUpdateInput>
    /**
     * Choose, which Flavor to update.
     */
    where: FlavorWhereUniqueInput
  }

  /**
   * Flavor updateMany
   */
  export type FlavorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flavors.
     */
    data: XOR<FlavorUpdateManyMutationInput, FlavorUncheckedUpdateManyInput>
    /**
     * Filter which Flavors to update
     */
    where?: FlavorWhereInput | $Types.Skip
    /**
     * Limit how many Flavors to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Flavor updateManyAndReturn
   */
  export type FlavorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * The data used to update Flavors.
     */
    data: XOR<FlavorUpdateManyMutationInput, FlavorUncheckedUpdateManyInput>
    /**
     * Filter which Flavors to update
     */
    where?: FlavorWhereInput | $Types.Skip
    /**
     * Limit how many Flavors to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Flavor upsert
   */
  export type FlavorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * The filter to search for the Flavor to update in case it exists.
     */
    where: FlavorWhereUniqueInput
    /**
     * In case the Flavor found by the `where` argument doesn't exist, create a new Flavor with this data.
     */
    create: XOR<FlavorCreateInput, FlavorUncheckedCreateInput>
    /**
     * In case the Flavor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlavorUpdateInput, FlavorUncheckedUpdateInput>
  }

  /**
   * Flavor delete
   */
  export type FlavorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
    /**
     * Filter which Flavor to delete.
     */
    where: FlavorWhereUniqueInput
  }

  /**
   * Flavor deleteMany
   */
  export type FlavorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flavors to delete
     */
    where?: FlavorWhereInput | $Types.Skip
    /**
     * Limit how many Flavors to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Flavor.firstPizzas
   */
  export type Flavor$firstPizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    where?: OrderPizzaWhereInput | $Types.Skip
    orderBy?: OrderPizzaOrderByWithRelationInput | OrderPizzaOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderPizzaWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderPizzaScalarFieldEnum | OrderPizzaScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Flavor.secondPizzas
   */
  export type Flavor$secondPizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    where?: OrderPizzaWhereInput | $Types.Skip
    orderBy?: OrderPizzaOrderByWithRelationInput | OrderPizzaOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderPizzaWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderPizzaScalarFieldEnum | OrderPizzaScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Flavor without action
   */
  export type FlavorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flavor
     */
    select?: FlavorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flavor
     */
    omit?: FlavorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlavorInclude<ExtArgs> | null
  }


  /**
   * Model Crust
   */

  export type AggregateCrust = {
    _count: CrustCountAggregateOutputType | null
    _avg: CrustAvgAggregateOutputType | null
    _sum: CrustSumAggregateOutputType | null
    _min: CrustMinAggregateOutputType | null
    _max: CrustMaxAggregateOutputType | null
  }

  export type CrustAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type CrustSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type CrustMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrustMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrustCountAggregateOutputType = {
    id: number
    name: number
    price: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CrustAvgAggregateInputType = {
    id?: true | $Types.Skip
    price?: true | $Types.Skip
  }

  export type CrustSumAggregateInputType = {
    id?: true | $Types.Skip
    price?: true | $Types.Skip
  }

  export type CrustMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    price?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CrustMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    price?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CrustCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    price?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CrustAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crust to aggregate.
     */
    where?: CrustWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crusts to fetch.
     */
    orderBy?: CrustOrderByWithRelationInput | CrustOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrustWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crusts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crusts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crusts
    **/
    _count?: true | CrustCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrustAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrustSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrustMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrustMaxAggregateInputType
  }

  export type GetCrustAggregateType<T extends CrustAggregateArgs> = {
        [P in keyof T & keyof AggregateCrust]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrust[P]>
      : GetScalarType<T[P], AggregateCrust[P]>
  }




  export type CrustGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrustWhereInput | $Types.Skip
    orderBy?: CrustOrderByWithAggregationInput | CrustOrderByWithAggregationInput[] | $Types.Skip
    by: CrustScalarFieldEnum[] | CrustScalarFieldEnum
    having?: CrustScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CrustCountAggregateInputType | true
    _avg?: CrustAvgAggregateInputType
    _sum?: CrustSumAggregateInputType
    _min?: CrustMinAggregateInputType
    _max?: CrustMaxAggregateInputType
  }

  export type CrustGroupByOutputType = {
    id: number
    name: string
    price: Decimal
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CrustCountAggregateOutputType | null
    _avg: CrustAvgAggregateOutputType | null
    _sum: CrustSumAggregateOutputType | null
    _min: CrustMinAggregateOutputType | null
    _max: CrustMaxAggregateOutputType | null
  }

  type GetCrustGroupByPayload<T extends CrustGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrustGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrustGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrustGroupByOutputType[P]>
            : GetScalarType<T[P], CrustGroupByOutputType[P]>
        }
      >
    >


  export type CrustSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    pizzas?: boolean | Crust$pizzasArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CrustCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["crust"]>

  export type CrustSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["crust"]>

  export type CrustSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["crust"]>

  export type CrustSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type CrustOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["crust"], $Types.Skip>
  export type CrustInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizzas?: boolean | Crust$pizzasArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CrustCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CrustIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CrustIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CrustPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crust"
    objects: {
      pizzas: Prisma.$OrderPizzaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crust"]>
    composites: {}
  }

  type CrustGetPayload<S extends boolean | null | undefined | CrustDefaultArgs> = $Result.GetResult<Prisma.$CrustPayload, S>

  type CrustCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrustFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrustCountAggregateInputType | true
    }

  export interface CrustDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crust'], meta: { name: 'Crust' } }
    /**
     * Find zero or one Crust that matches the filter.
     * @param {CrustFindUniqueArgs} args - Arguments to find a Crust
     * @example
     * // Get one Crust
     * const crust = await prisma.crust.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrustFindUniqueArgs>(args: SelectSubset<T, CrustFindUniqueArgs<ExtArgs>>): Prisma__CrustClient<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crust that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrustFindUniqueOrThrowArgs} args - Arguments to find a Crust
     * @example
     * // Get one Crust
     * const crust = await prisma.crust.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrustFindUniqueOrThrowArgs>(args: SelectSubset<T, CrustFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrustClient<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crust that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrustFindFirstArgs} args - Arguments to find a Crust
     * @example
     * // Get one Crust
     * const crust = await prisma.crust.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrustFindFirstArgs>(args?: SelectSubset<T, CrustFindFirstArgs<ExtArgs>>): Prisma__CrustClient<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crust that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrustFindFirstOrThrowArgs} args - Arguments to find a Crust
     * @example
     * // Get one Crust
     * const crust = await prisma.crust.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrustFindFirstOrThrowArgs>(args?: SelectSubset<T, CrustFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrustClient<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Crusts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrustFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crusts
     * const crusts = await prisma.crust.findMany()
     * 
     * // Get first 10 Crusts
     * const crusts = await prisma.crust.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crustWithIdOnly = await prisma.crust.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrustFindManyArgs>(args?: SelectSubset<T, CrustFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crust.
     * @param {CrustCreateArgs} args - Arguments to create a Crust.
     * @example
     * // Create one Crust
     * const Crust = await prisma.crust.create({
     *   data: {
     *     // ... data to create a Crust
     *   }
     * })
     * 
     */
    create<T extends CrustCreateArgs>(args: SelectSubset<T, CrustCreateArgs<ExtArgs>>): Prisma__CrustClient<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Crusts.
     * @param {CrustCreateManyArgs} args - Arguments to create many Crusts.
     * @example
     * // Create many Crusts
     * const crust = await prisma.crust.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrustCreateManyArgs>(args?: SelectSubset<T, CrustCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crusts and returns the data saved in the database.
     * @param {CrustCreateManyAndReturnArgs} args - Arguments to create many Crusts.
     * @example
     * // Create many Crusts
     * const crust = await prisma.crust.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crusts and only return the `id`
     * const crustWithIdOnly = await prisma.crust.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrustCreateManyAndReturnArgs>(args?: SelectSubset<T, CrustCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crust.
     * @param {CrustDeleteArgs} args - Arguments to delete one Crust.
     * @example
     * // Delete one Crust
     * const Crust = await prisma.crust.delete({
     *   where: {
     *     // ... filter to delete one Crust
     *   }
     * })
     * 
     */
    delete<T extends CrustDeleteArgs>(args: SelectSubset<T, CrustDeleteArgs<ExtArgs>>): Prisma__CrustClient<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crust.
     * @param {CrustUpdateArgs} args - Arguments to update one Crust.
     * @example
     * // Update one Crust
     * const crust = await prisma.crust.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrustUpdateArgs>(args: SelectSubset<T, CrustUpdateArgs<ExtArgs>>): Prisma__CrustClient<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Crusts.
     * @param {CrustDeleteManyArgs} args - Arguments to filter Crusts to delete.
     * @example
     * // Delete a few Crusts
     * const { count } = await prisma.crust.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrustDeleteManyArgs>(args?: SelectSubset<T, CrustDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crusts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrustUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crusts
     * const crust = await prisma.crust.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrustUpdateManyArgs>(args: SelectSubset<T, CrustUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crusts and returns the data updated in the database.
     * @param {CrustUpdateManyAndReturnArgs} args - Arguments to update many Crusts.
     * @example
     * // Update many Crusts
     * const crust = await prisma.crust.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Crusts and only return the `id`
     * const crustWithIdOnly = await prisma.crust.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CrustUpdateManyAndReturnArgs>(args: SelectSubset<T, CrustUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crust.
     * @param {CrustUpsertArgs} args - Arguments to update or create a Crust.
     * @example
     * // Update or create a Crust
     * const crust = await prisma.crust.upsert({
     *   create: {
     *     // ... data to create a Crust
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crust we want to update
     *   }
     * })
     */
    upsert<T extends CrustUpsertArgs>(args: SelectSubset<T, CrustUpsertArgs<ExtArgs>>): Prisma__CrustClient<$Result.GetResult<Prisma.$CrustPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Crusts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrustCountArgs} args - Arguments to filter Crusts to count.
     * @example
     * // Count the number of Crusts
     * const count = await prisma.crust.count({
     *   where: {
     *     // ... the filter for the Crusts we want to count
     *   }
     * })
    **/
    count<T extends CrustCountArgs>(
      args?: Subset<T, CrustCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrustCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crust.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrustAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CrustAggregateArgs>(args: Subset<T, CrustAggregateArgs>): Prisma.PrismaPromise<GetCrustAggregateType<T>>

    /**
     * Group by Crust.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrustGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CrustGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrustGroupByArgs['orderBy'] }
        : { orderBy?: CrustGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CrustGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrustGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crust model
   */
  readonly fields: CrustFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crust.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrustClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pizzas<T extends Crust$pizzasArgs<ExtArgs> = {}>(args?: Subset<T, Crust$pizzasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPizzaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Crust model
   */
  interface CrustFieldRefs {
    readonly id: FieldRef<"Crust", 'Int'>
    readonly name: FieldRef<"Crust", 'String'>
    readonly price: FieldRef<"Crust", 'Decimal'>
    readonly isActive: FieldRef<"Crust", 'Boolean'>
    readonly createdAt: FieldRef<"Crust", 'DateTime'>
    readonly updatedAt: FieldRef<"Crust", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Crust findUnique
   */
  export type CrustFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrustInclude<ExtArgs> | null
    /**
     * Filter, which Crust to fetch.
     */
    where: CrustWhereUniqueInput
  }

  /**
   * Crust findUniqueOrThrow
   */
  export type CrustFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrustInclude<ExtArgs> | null
    /**
     * Filter, which Crust to fetch.
     */
    where: CrustWhereUniqueInput
  }

  /**
   * Crust findFirst
   */
  export type CrustFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrustInclude<ExtArgs> | null
    /**
     * Filter, which Crust to fetch.
     */
    where?: CrustWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crusts to fetch.
     */
    orderBy?: CrustOrderByWithRelationInput | CrustOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crusts.
     */
    cursor?: CrustWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crusts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crusts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crusts.
     */
    distinct?: CrustScalarFieldEnum | CrustScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Crust findFirstOrThrow
   */
  export type CrustFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrustInclude<ExtArgs> | null
    /**
     * Filter, which Crust to fetch.
     */
    where?: CrustWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crusts to fetch.
     */
    orderBy?: CrustOrderByWithRelationInput | CrustOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crusts.
     */
    cursor?: CrustWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crusts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crusts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crusts.
     */
    distinct?: CrustScalarFieldEnum | CrustScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Crust findMany
   */
  export type CrustFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrustInclude<ExtArgs> | null
    /**
     * Filter, which Crusts to fetch.
     */
    where?: CrustWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crusts to fetch.
     */
    orderBy?: CrustOrderByWithRelationInput | CrustOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crusts.
     */
    cursor?: CrustWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crusts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crusts.
     */
    skip?: number | $Types.Skip
    distinct?: CrustScalarFieldEnum | CrustScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Crust create
   */
  export type CrustCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrustInclude<ExtArgs> | null
    /**
     * The data needed to create a Crust.
     */
    data: XOR<CrustCreateInput, CrustUncheckedCreateInput>
  }

  /**
   * Crust createMany
   */
  export type CrustCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crusts.
     */
    data: CrustCreateManyInput | CrustCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Crust createManyAndReturn
   */
  export type CrustCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * The data used to create many Crusts.
     */
    data: CrustCreateManyInput | CrustCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Crust update
   */
  export type CrustUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrustInclude<ExtArgs> | null
    /**
     * The data needed to update a Crust.
     */
    data: XOR<CrustUpdateInput, CrustUncheckedUpdateInput>
    /**
     * Choose, which Crust to update.
     */
    where: CrustWhereUniqueInput
  }

  /**
   * Crust updateMany
   */
  export type CrustUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Crusts.
     */
    data: XOR<CrustUpdateManyMutationInput, CrustUncheckedUpdateManyInput>
    /**
     * Filter which Crusts to update
     */
    where?: CrustWhereInput | $Types.Skip
    /**
     * Limit how many Crusts to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Crust updateManyAndReturn
   */
  export type CrustUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * The data used to update Crusts.
     */
    data: XOR<CrustUpdateManyMutationInput, CrustUncheckedUpdateManyInput>
    /**
     * Filter which Crusts to update
     */
    where?: CrustWhereInput | $Types.Skip
    /**
     * Limit how many Crusts to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Crust upsert
   */
  export type CrustUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrustInclude<ExtArgs> | null
    /**
     * The filter to search for the Crust to update in case it exists.
     */
    where: CrustWhereUniqueInput
    /**
     * In case the Crust found by the `where` argument doesn't exist, create a new Crust with this data.
     */
    create: XOR<CrustCreateInput, CrustUncheckedCreateInput>
    /**
     * In case the Crust was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrustUpdateInput, CrustUncheckedUpdateInput>
  }

  /**
   * Crust delete
   */
  export type CrustDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrustInclude<ExtArgs> | null
    /**
     * Filter which Crust to delete.
     */
    where: CrustWhereUniqueInput
  }

  /**
   * Crust deleteMany
   */
  export type CrustDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crusts to delete
     */
    where?: CrustWhereInput | $Types.Skip
    /**
     * Limit how many Crusts to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Crust.pizzas
   */
  export type Crust$pizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderPizza
     */
    select?: OrderPizzaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderPizza
     */
    omit?: OrderPizzaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderPizzaInclude<ExtArgs> | null
    where?: OrderPizzaWhereInput | $Types.Skip
    orderBy?: OrderPizzaOrderByWithRelationInput | OrderPizzaOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderPizzaWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderPizzaScalarFieldEnum | OrderPizzaScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Crust without action
   */
  export type CrustDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crust
     */
    select?: CrustSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crust
     */
    omit?: CrustOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrustInclude<ExtArgs> | null
  }


  /**
   * Model Drink
   */

  export type AggregateDrink = {
    _count: DrinkCountAggregateOutputType | null
    _avg: DrinkAvgAggregateOutputType | null
    _sum: DrinkSumAggregateOutputType | null
    _min: DrinkMinAggregateOutputType | null
    _max: DrinkMaxAggregateOutputType | null
  }

  export type DrinkAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type DrinkSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type DrinkMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrinkMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrinkCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DrinkAvgAggregateInputType = {
    id?: true | $Types.Skip
    price?: true | $Types.Skip
  }

  export type DrinkSumAggregateInputType = {
    id?: true | $Types.Skip
    price?: true | $Types.Skip
  }

  export type DrinkMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    price?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type DrinkMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    price?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type DrinkCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    description?: true | $Types.Skip
    price?: true | $Types.Skip
    isActive?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type DrinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drink to aggregate.
     */
    where?: DrinkWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drinks to fetch.
     */
    orderBy?: DrinkOrderByWithRelationInput | DrinkOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrinkWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drinks from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drinks.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drinks
    **/
    _count?: true | DrinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrinkMaxAggregateInputType
  }

  export type GetDrinkAggregateType<T extends DrinkAggregateArgs> = {
        [P in keyof T & keyof AggregateDrink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrink[P]>
      : GetScalarType<T[P], AggregateDrink[P]>
  }




  export type DrinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrinkWhereInput | $Types.Skip
    orderBy?: DrinkOrderByWithAggregationInput | DrinkOrderByWithAggregationInput[] | $Types.Skip
    by: DrinkScalarFieldEnum[] | DrinkScalarFieldEnum
    having?: DrinkScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: DrinkCountAggregateInputType | true
    _avg?: DrinkAvgAggregateInputType
    _sum?: DrinkSumAggregateInputType
    _min?: DrinkMinAggregateInputType
    _max?: DrinkMaxAggregateInputType
  }

  export type DrinkGroupByOutputType = {
    id: number
    name: string
    description: string
    price: Decimal
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DrinkCountAggregateOutputType | null
    _avg: DrinkAvgAggregateOutputType | null
    _sum: DrinkSumAggregateOutputType | null
    _min: DrinkMinAggregateOutputType | null
    _max: DrinkMaxAggregateOutputType | null
  }

  type GetDrinkGroupByPayload<T extends DrinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrinkGroupByOutputType[P]>
            : GetScalarType<T[P], DrinkGroupByOutputType[P]>
        }
      >
    >


  export type DrinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    order?: boolean | Drink$orderArgs<ExtArgs> | $Types.Skip
    _count?: boolean | DrinkCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["drink"]>

  export type DrinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["drink"]>

  export type DrinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["drink"]>

  export type DrinkSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type DrinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["drink"], $Types.Skip>
  export type DrinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | Drink$orderArgs<ExtArgs> | $Types.Skip
    _count?: boolean | DrinkCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type DrinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DrinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DrinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drink"
    objects: {
      order: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      price: Prisma.Decimal
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["drink"]>
    composites: {}
  }

  type DrinkGetPayload<S extends boolean | null | undefined | DrinkDefaultArgs> = $Result.GetResult<Prisma.$DrinkPayload, S>

  type DrinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrinkCountAggregateInputType | true
    }

  export interface DrinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drink'], meta: { name: 'Drink' } }
    /**
     * Find zero or one Drink that matches the filter.
     * @param {DrinkFindUniqueArgs} args - Arguments to find a Drink
     * @example
     * // Get one Drink
     * const drink = await prisma.drink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrinkFindUniqueArgs>(args: SelectSubset<T, DrinkFindUniqueArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrinkFindUniqueOrThrowArgs} args - Arguments to find a Drink
     * @example
     * // Get one Drink
     * const drink = await prisma.drink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrinkFindUniqueOrThrowArgs>(args: SelectSubset<T, DrinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkFindFirstArgs} args - Arguments to find a Drink
     * @example
     * // Get one Drink
     * const drink = await prisma.drink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrinkFindFirstArgs>(args?: SelectSubset<T, DrinkFindFirstArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkFindFirstOrThrowArgs} args - Arguments to find a Drink
     * @example
     * // Get one Drink
     * const drink = await prisma.drink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrinkFindFirstOrThrowArgs>(args?: SelectSubset<T, DrinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drinks
     * const drinks = await prisma.drink.findMany()
     * 
     * // Get first 10 Drinks
     * const drinks = await prisma.drink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drinkWithIdOnly = await prisma.drink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrinkFindManyArgs>(args?: SelectSubset<T, DrinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drink.
     * @param {DrinkCreateArgs} args - Arguments to create a Drink.
     * @example
     * // Create one Drink
     * const Drink = await prisma.drink.create({
     *   data: {
     *     // ... data to create a Drink
     *   }
     * })
     * 
     */
    create<T extends DrinkCreateArgs>(args: SelectSubset<T, DrinkCreateArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drinks.
     * @param {DrinkCreateManyArgs} args - Arguments to create many Drinks.
     * @example
     * // Create many Drinks
     * const drink = await prisma.drink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrinkCreateManyArgs>(args?: SelectSubset<T, DrinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drinks and returns the data saved in the database.
     * @param {DrinkCreateManyAndReturnArgs} args - Arguments to create many Drinks.
     * @example
     * // Create many Drinks
     * const drink = await prisma.drink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drinks and only return the `id`
     * const drinkWithIdOnly = await prisma.drink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrinkCreateManyAndReturnArgs>(args?: SelectSubset<T, DrinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drink.
     * @param {DrinkDeleteArgs} args - Arguments to delete one Drink.
     * @example
     * // Delete one Drink
     * const Drink = await prisma.drink.delete({
     *   where: {
     *     // ... filter to delete one Drink
     *   }
     * })
     * 
     */
    delete<T extends DrinkDeleteArgs>(args: SelectSubset<T, DrinkDeleteArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drink.
     * @param {DrinkUpdateArgs} args - Arguments to update one Drink.
     * @example
     * // Update one Drink
     * const drink = await prisma.drink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrinkUpdateArgs>(args: SelectSubset<T, DrinkUpdateArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drinks.
     * @param {DrinkDeleteManyArgs} args - Arguments to filter Drinks to delete.
     * @example
     * // Delete a few Drinks
     * const { count } = await prisma.drink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrinkDeleteManyArgs>(args?: SelectSubset<T, DrinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drinks
     * const drink = await prisma.drink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrinkUpdateManyArgs>(args: SelectSubset<T, DrinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drinks and returns the data updated in the database.
     * @param {DrinkUpdateManyAndReturnArgs} args - Arguments to update many Drinks.
     * @example
     * // Update many Drinks
     * const drink = await prisma.drink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drinks and only return the `id`
     * const drinkWithIdOnly = await prisma.drink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DrinkUpdateManyAndReturnArgs>(args: SelectSubset<T, DrinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drink.
     * @param {DrinkUpsertArgs} args - Arguments to update or create a Drink.
     * @example
     * // Update or create a Drink
     * const drink = await prisma.drink.upsert({
     *   create: {
     *     // ... data to create a Drink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drink we want to update
     *   }
     * })
     */
    upsert<T extends DrinkUpsertArgs>(args: SelectSubset<T, DrinkUpsertArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkCountArgs} args - Arguments to filter Drinks to count.
     * @example
     * // Count the number of Drinks
     * const count = await prisma.drink.count({
     *   where: {
     *     // ... the filter for the Drinks we want to count
     *   }
     * })
    **/
    count<T extends DrinkCountArgs>(
      args?: Subset<T, DrinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DrinkAggregateArgs>(args: Subset<T, DrinkAggregateArgs>): Prisma.PrismaPromise<GetDrinkAggregateType<T>>

    /**
     * Group by Drink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DrinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrinkGroupByArgs['orderBy'] }
        : { orderBy?: DrinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DrinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drink model
   */
  readonly fields: DrinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends Drink$orderArgs<ExtArgs> = {}>(args?: Subset<T, Drink$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Drink model
   */
  interface DrinkFieldRefs {
    readonly id: FieldRef<"Drink", 'Int'>
    readonly name: FieldRef<"Drink", 'String'>
    readonly description: FieldRef<"Drink", 'String'>
    readonly price: FieldRef<"Drink", 'Decimal'>
    readonly isActive: FieldRef<"Drink", 'Boolean'>
    readonly createdAt: FieldRef<"Drink", 'DateTime'>
    readonly updatedAt: FieldRef<"Drink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Drink findUnique
   */
  export type DrinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter, which Drink to fetch.
     */
    where: DrinkWhereUniqueInput
  }

  /**
   * Drink findUniqueOrThrow
   */
  export type DrinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter, which Drink to fetch.
     */
    where: DrinkWhereUniqueInput
  }

  /**
   * Drink findFirst
   */
  export type DrinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter, which Drink to fetch.
     */
    where?: DrinkWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drinks to fetch.
     */
    orderBy?: DrinkOrderByWithRelationInput | DrinkOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drinks.
     */
    cursor?: DrinkWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drinks from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drinks.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drinks.
     */
    distinct?: DrinkScalarFieldEnum | DrinkScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Drink findFirstOrThrow
   */
  export type DrinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter, which Drink to fetch.
     */
    where?: DrinkWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drinks to fetch.
     */
    orderBy?: DrinkOrderByWithRelationInput | DrinkOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drinks.
     */
    cursor?: DrinkWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drinks from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drinks.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drinks.
     */
    distinct?: DrinkScalarFieldEnum | DrinkScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Drink findMany
   */
  export type DrinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter, which Drinks to fetch.
     */
    where?: DrinkWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drinks to fetch.
     */
    orderBy?: DrinkOrderByWithRelationInput | DrinkOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drinks.
     */
    cursor?: DrinkWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drinks from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drinks.
     */
    skip?: number | $Types.Skip
    distinct?: DrinkScalarFieldEnum | DrinkScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Drink create
   */
  export type DrinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Drink.
     */
    data: XOR<DrinkCreateInput, DrinkUncheckedCreateInput>
  }

  /**
   * Drink createMany
   */
  export type DrinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drinks.
     */
    data: DrinkCreateManyInput | DrinkCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Drink createManyAndReturn
   */
  export type DrinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * The data used to create many Drinks.
     */
    data: DrinkCreateManyInput | DrinkCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Drink update
   */
  export type DrinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Drink.
     */
    data: XOR<DrinkUpdateInput, DrinkUncheckedUpdateInput>
    /**
     * Choose, which Drink to update.
     */
    where: DrinkWhereUniqueInput
  }

  /**
   * Drink updateMany
   */
  export type DrinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drinks.
     */
    data: XOR<DrinkUpdateManyMutationInput, DrinkUncheckedUpdateManyInput>
    /**
     * Filter which Drinks to update
     */
    where?: DrinkWhereInput | $Types.Skip
    /**
     * Limit how many Drinks to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Drink updateManyAndReturn
   */
  export type DrinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * The data used to update Drinks.
     */
    data: XOR<DrinkUpdateManyMutationInput, DrinkUncheckedUpdateManyInput>
    /**
     * Filter which Drinks to update
     */
    where?: DrinkWhereInput | $Types.Skip
    /**
     * Limit how many Drinks to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Drink upsert
   */
  export type DrinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Drink to update in case it exists.
     */
    where: DrinkWhereUniqueInput
    /**
     * In case the Drink found by the `where` argument doesn't exist, create a new Drink with this data.
     */
    create: XOR<DrinkCreateInput, DrinkUncheckedCreateInput>
    /**
     * In case the Drink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrinkUpdateInput, DrinkUncheckedUpdateInput>
  }

  /**
   * Drink delete
   */
  export type DrinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter which Drink to delete.
     */
    where: DrinkWhereUniqueInput
  }

  /**
   * Drink deleteMany
   */
  export type DrinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drinks to delete
     */
    where?: DrinkWhereInput | $Types.Skip
    /**
     * Limit how many Drinks to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Drink.order
   */
  export type Drink$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput | $Types.Skip
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Drink without action
   */
  export type DrinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const WorkingHourScalarFieldEnum: {
    id: 'id',
    pizzeriaId: 'pizzeriaId',
    dayOfWeek: 'dayOfWeek',
    openingTime: 'openingTime',
    closingTime: 'closingTime',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkingHourScalarFieldEnum = (typeof WorkingHourScalarFieldEnum)[keyof typeof WorkingHourScalarFieldEnum]


  export const PizzeriaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    cnpj: 'cnpj',
    address: 'address',
    phone: 'phone',
    isActive: 'isActive',
    deliveryTax: 'deliveryTax',
    minOrderValue: 'minOrderValue',
    website: 'website',
    instagram: 'instagram',
    facebook: 'facebook',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PizzeriaScalarFieldEnum = (typeof PizzeriaScalarFieldEnum)[keyof typeof PizzeriaScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    deliveryAddress: 'deliveryAddress',
    status: 'status',
    totalAmount: 'totalAmount',
    paymentMethod: 'paymentMethod',
    deliveryTax: 'deliveryTax',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    drinkId: 'drinkId',
    itemType: 'itemType',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subtotal: 'subtotal',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderPizzaScalarFieldEnum: {
    id: 'id',
    orderItemId: 'orderItemId',
    firstFlavorId: 'firstFlavorId',
    secondFlavorId: 'secondFlavorId',
    crustId: 'crustId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderPizzaScalarFieldEnum = (typeof OrderPizzaScalarFieldEnum)[keyof typeof OrderPizzaScalarFieldEnum]


  export const FlavorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    price: 'price',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlavorScalarFieldEnum = (typeof FlavorScalarFieldEnum)[keyof typeof FlavorScalarFieldEnum]


  export const CrustScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CrustScalarFieldEnum = (typeof CrustScalarFieldEnum)[keyof typeof CrustScalarFieldEnum]


  export const DrinkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DrinkScalarFieldEnum = (typeof DrinkScalarFieldEnum)[keyof typeof DrinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[] | $Types.Skip
    OR?: CustomerWhereInput[] | $Types.Skip
    NOT?: CustomerWhereInput | CustomerWhereInput[] | $Types.Skip
    id?: IntFilter<"Customer"> | number | $Types.Skip
    name?: StringFilter<"Customer"> | string | $Types.Skip
    phone?: StringFilter<"Customer"> | string | $Types.Skip
    address?: StringFilter<"Customer"> | string | $Types.Skip
    isActive?: BoolFilter<"Customer"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"Customer"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Customer"> | Date | string | $Types.Skip
    orders?: OrderListRelationFilter | $Types.Skip
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    address?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    orders?: OrderOrderByRelationAggregateInput | $Types.Skip
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    phone?: string | $Types.Skip
    AND?: CustomerWhereInput | CustomerWhereInput[] | $Types.Skip
    OR?: CustomerWhereInput[] | $Types.Skip
    NOT?: CustomerWhereInput | CustomerWhereInput[] | $Types.Skip
    name?: StringFilter<"Customer"> | string | $Types.Skip
    address?: StringFilter<"Customer"> | string | $Types.Skip
    isActive?: BoolFilter<"Customer"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"Customer"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Customer"> | Date | string | $Types.Skip
    orders?: OrderListRelationFilter | $Types.Skip
  }, "id" | "phone">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    address?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: CustomerCountOrderByAggregateInput | $Types.Skip
    _avg?: CustomerAvgOrderByAggregateInput | $Types.Skip
    _max?: CustomerMaxOrderByAggregateInput | $Types.Skip
    _min?: CustomerMinOrderByAggregateInput | $Types.Skip
    _sum?: CustomerSumOrderByAggregateInput | $Types.Skip
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CustomerScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Customer"> | number | $Types.Skip
    name?: StringWithAggregatesFilter<"Customer"> | string | $Types.Skip
    phone?: StringWithAggregatesFilter<"Customer"> | string | $Types.Skip
    address?: StringWithAggregatesFilter<"Customer"> | string | $Types.Skip
    isActive?: BoolWithAggregatesFilter<"Customer"> | boolean | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string | $Types.Skip
  }

  export type WorkingHourWhereInput = {
    AND?: WorkingHourWhereInput | WorkingHourWhereInput[] | $Types.Skip
    OR?: WorkingHourWhereInput[] | $Types.Skip
    NOT?: WorkingHourWhereInput | WorkingHourWhereInput[] | $Types.Skip
    id?: IntFilter<"WorkingHour"> | number | $Types.Skip
    pizzeriaId?: IntFilter<"WorkingHour"> | number | $Types.Skip
    dayOfWeek?: IntFilter<"WorkingHour"> | number | $Types.Skip
    openingTime?: StringFilter<"WorkingHour"> | string | $Types.Skip
    closingTime?: StringFilter<"WorkingHour"> | string | $Types.Skip
    isActive?: BoolFilter<"WorkingHour"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"WorkingHour"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"WorkingHour"> | Date | string | $Types.Skip
    pizzeria?: XOR<PizzeriaScalarRelationFilter, PizzeriaWhereInput> | $Types.Skip
  }

  export type WorkingHourOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    pizzeriaId?: SortOrder | $Types.Skip
    dayOfWeek?: SortOrder | $Types.Skip
    openingTime?: SortOrder | $Types.Skip
    closingTime?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    pizzeria?: PizzeriaOrderByWithRelationInput | $Types.Skip
  }

  export type WorkingHourWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    dayOfWeek?: number | $Types.Skip
    AND?: WorkingHourWhereInput | WorkingHourWhereInput[] | $Types.Skip
    OR?: WorkingHourWhereInput[] | $Types.Skip
    NOT?: WorkingHourWhereInput | WorkingHourWhereInput[] | $Types.Skip
    pizzeriaId?: IntFilter<"WorkingHour"> | number | $Types.Skip
    openingTime?: StringFilter<"WorkingHour"> | string | $Types.Skip
    closingTime?: StringFilter<"WorkingHour"> | string | $Types.Skip
    isActive?: BoolFilter<"WorkingHour"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"WorkingHour"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"WorkingHour"> | Date | string | $Types.Skip
    pizzeria?: XOR<PizzeriaScalarRelationFilter, PizzeriaWhereInput> | $Types.Skip
  }, "id" | "dayOfWeek">

  export type WorkingHourOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    pizzeriaId?: SortOrder | $Types.Skip
    dayOfWeek?: SortOrder | $Types.Skip
    openingTime?: SortOrder | $Types.Skip
    closingTime?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: WorkingHourCountOrderByAggregateInput | $Types.Skip
    _avg?: WorkingHourAvgOrderByAggregateInput | $Types.Skip
    _max?: WorkingHourMaxOrderByAggregateInput | $Types.Skip
    _min?: WorkingHourMinOrderByAggregateInput | $Types.Skip
    _sum?: WorkingHourSumOrderByAggregateInput | $Types.Skip
  }

  export type WorkingHourScalarWhereWithAggregatesInput = {
    AND?: WorkingHourScalarWhereWithAggregatesInput | WorkingHourScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: WorkingHourScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: WorkingHourScalarWhereWithAggregatesInput | WorkingHourScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"WorkingHour"> | number | $Types.Skip
    pizzeriaId?: IntWithAggregatesFilter<"WorkingHour"> | number | $Types.Skip
    dayOfWeek?: IntWithAggregatesFilter<"WorkingHour"> | number | $Types.Skip
    openingTime?: StringWithAggregatesFilter<"WorkingHour"> | string | $Types.Skip
    closingTime?: StringWithAggregatesFilter<"WorkingHour"> | string | $Types.Skip
    isActive?: BoolWithAggregatesFilter<"WorkingHour"> | boolean | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"WorkingHour"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"WorkingHour"> | Date | string | $Types.Skip
  }

  export type PizzeriaWhereInput = {
    AND?: PizzeriaWhereInput | PizzeriaWhereInput[] | $Types.Skip
    OR?: PizzeriaWhereInput[] | $Types.Skip
    NOT?: PizzeriaWhereInput | PizzeriaWhereInput[] | $Types.Skip
    id?: IntFilter<"Pizzeria"> | number | $Types.Skip
    name?: StringFilter<"Pizzeria"> | string | $Types.Skip
    description?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    cnpj?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    address?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    phone?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    isActive?: BoolFilter<"Pizzeria"> | boolean | $Types.Skip
    deliveryTax?: DecimalFilter<"Pizzeria"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: DecimalFilter<"Pizzeria"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    instagram?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    facebook?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Pizzeria"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Pizzeria"> | Date | string | $Types.Skip
    workingHours?: WorkingHourListRelationFilter | $Types.Skip
  }

  export type PizzeriaOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    cnpj?: SortOrderInput | SortOrder | $Types.Skip
    address?: SortOrderInput | SortOrder | $Types.Skip
    phone?: SortOrderInput | SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    minOrderValue?: SortOrder | $Types.Skip
    website?: SortOrderInput | SortOrder | $Types.Skip
    instagram?: SortOrderInput | SortOrder | $Types.Skip
    facebook?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    workingHours?: WorkingHourOrderByRelationAggregateInput | $Types.Skip
  }

  export type PizzeriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    cnpj?: string | $Types.Skip
    phone?: string | $Types.Skip
    AND?: PizzeriaWhereInput | PizzeriaWhereInput[] | $Types.Skip
    OR?: PizzeriaWhereInput[] | $Types.Skip
    NOT?: PizzeriaWhereInput | PizzeriaWhereInput[] | $Types.Skip
    name?: StringFilter<"Pizzeria"> | string | $Types.Skip
    description?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    address?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    isActive?: BoolFilter<"Pizzeria"> | boolean | $Types.Skip
    deliveryTax?: DecimalFilter<"Pizzeria"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: DecimalFilter<"Pizzeria"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    instagram?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    facebook?: StringNullableFilter<"Pizzeria"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Pizzeria"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Pizzeria"> | Date | string | $Types.Skip
    workingHours?: WorkingHourListRelationFilter | $Types.Skip
  }, "id" | "cnpj" | "phone">

  export type PizzeriaOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    cnpj?: SortOrderInput | SortOrder | $Types.Skip
    address?: SortOrderInput | SortOrder | $Types.Skip
    phone?: SortOrderInput | SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    minOrderValue?: SortOrder | $Types.Skip
    website?: SortOrderInput | SortOrder | $Types.Skip
    instagram?: SortOrderInput | SortOrder | $Types.Skip
    facebook?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: PizzeriaCountOrderByAggregateInput | $Types.Skip
    _avg?: PizzeriaAvgOrderByAggregateInput | $Types.Skip
    _max?: PizzeriaMaxOrderByAggregateInput | $Types.Skip
    _min?: PizzeriaMinOrderByAggregateInput | $Types.Skip
    _sum?: PizzeriaSumOrderByAggregateInput | $Types.Skip
  }

  export type PizzeriaScalarWhereWithAggregatesInput = {
    AND?: PizzeriaScalarWhereWithAggregatesInput | PizzeriaScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: PizzeriaScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: PizzeriaScalarWhereWithAggregatesInput | PizzeriaScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Pizzeria"> | number | $Types.Skip
    name?: StringWithAggregatesFilter<"Pizzeria"> | string | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Pizzeria"> | string | null | $Types.Skip
    cnpj?: StringNullableWithAggregatesFilter<"Pizzeria"> | string | null | $Types.Skip
    address?: StringNullableWithAggregatesFilter<"Pizzeria"> | string | null | $Types.Skip
    phone?: StringNullableWithAggregatesFilter<"Pizzeria"> | string | null | $Types.Skip
    isActive?: BoolWithAggregatesFilter<"Pizzeria"> | boolean | $Types.Skip
    deliveryTax?: DecimalWithAggregatesFilter<"Pizzeria"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: DecimalWithAggregatesFilter<"Pizzeria"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: StringNullableWithAggregatesFilter<"Pizzeria"> | string | null | $Types.Skip
    instagram?: StringNullableWithAggregatesFilter<"Pizzeria"> | string | null | $Types.Skip
    facebook?: StringNullableWithAggregatesFilter<"Pizzeria"> | string | null | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Pizzeria"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Pizzeria"> | Date | string | $Types.Skip
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[] | $Types.Skip
    OR?: OrderWhereInput[] | $Types.Skip
    NOT?: OrderWhereInput | OrderWhereInput[] | $Types.Skip
    id?: IntFilter<"Order"> | number | $Types.Skip
    customerId?: IntFilter<"Order"> | number | $Types.Skip
    deliveryAddress?: StringFilter<"Order"> | string | $Types.Skip
    status?: StringFilter<"Order"> | string | $Types.Skip
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFilter<"Order"> | string | $Types.Skip
    deliveryTax?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput> | $Types.Skip
    items?: OrderItemListRelationFilter | $Types.Skip
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    deliveryAddress?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    totalAmount?: SortOrder | $Types.Skip
    paymentMethod?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    customer?: CustomerOrderByWithRelationInput | $Types.Skip
    items?: OrderItemOrderByRelationAggregateInput | $Types.Skip
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: OrderWhereInput | OrderWhereInput[] | $Types.Skip
    OR?: OrderWhereInput[] | $Types.Skip
    NOT?: OrderWhereInput | OrderWhereInput[] | $Types.Skip
    customerId?: IntFilter<"Order"> | number | $Types.Skip
    deliveryAddress?: StringFilter<"Order"> | string | $Types.Skip
    status?: StringFilter<"Order"> | string | $Types.Skip
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFilter<"Order"> | string | $Types.Skip
    deliveryTax?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput> | $Types.Skip
    items?: OrderItemListRelationFilter | $Types.Skip
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    deliveryAddress?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    totalAmount?: SortOrder | $Types.Skip
    paymentMethod?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: OrderCountOrderByAggregateInput | $Types.Skip
    _avg?: OrderAvgOrderByAggregateInput | $Types.Skip
    _max?: OrderMaxOrderByAggregateInput | $Types.Skip
    _min?: OrderMinOrderByAggregateInput | $Types.Skip
    _sum?: OrderSumOrderByAggregateInput | $Types.Skip
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: OrderScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Order"> | number | $Types.Skip
    customerId?: IntWithAggregatesFilter<"Order"> | number | $Types.Skip
    deliveryAddress?: StringWithAggregatesFilter<"Order"> | string | $Types.Skip
    status?: StringWithAggregatesFilter<"Order"> | string | $Types.Skip
    totalAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringWithAggregatesFilter<"Order"> | string | $Types.Skip
    deliveryTax?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string | $Types.Skip
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[] | $Types.Skip
    OR?: OrderItemWhereInput[] | $Types.Skip
    NOT?: OrderItemWhereInput | OrderItemWhereInput[] | $Types.Skip
    id?: IntFilter<"OrderItem"> | number | $Types.Skip
    orderId?: IntFilter<"OrderItem"> | number | $Types.Skip
    drinkId?: IntNullableFilter<"OrderItem"> | number | null | $Types.Skip
    itemType?: StringFilter<"OrderItem"> | string | $Types.Skip
    quantity?: IntFilter<"OrderItem"> | number | $Types.Skip
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: StringNullableFilter<"OrderItem"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string | $Types.Skip
    pizza?: XOR<OrderPizzaNullableScalarRelationFilter, OrderPizzaWhereInput> | null | $Types.Skip
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput> | $Types.Skip
    drink?: XOR<DrinkNullableScalarRelationFilter, DrinkWhereInput> | null | $Types.Skip
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    drinkId?: SortOrderInput | SortOrder | $Types.Skip
    itemType?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    unitPrice?: SortOrder | $Types.Skip
    subtotal?: SortOrder | $Types.Skip
    notes?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    pizza?: OrderPizzaOrderByWithRelationInput | $Types.Skip
    order?: OrderOrderByWithRelationInput | $Types.Skip
    drink?: DrinkOrderByWithRelationInput | $Types.Skip
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: OrderItemWhereInput | OrderItemWhereInput[] | $Types.Skip
    OR?: OrderItemWhereInput[] | $Types.Skip
    NOT?: OrderItemWhereInput | OrderItemWhereInput[] | $Types.Skip
    orderId?: IntFilter<"OrderItem"> | number | $Types.Skip
    drinkId?: IntNullableFilter<"OrderItem"> | number | null | $Types.Skip
    itemType?: StringFilter<"OrderItem"> | string | $Types.Skip
    quantity?: IntFilter<"OrderItem"> | number | $Types.Skip
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: StringNullableFilter<"OrderItem"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string | $Types.Skip
    pizza?: XOR<OrderPizzaNullableScalarRelationFilter, OrderPizzaWhereInput> | null | $Types.Skip
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput> | $Types.Skip
    drink?: XOR<DrinkNullableScalarRelationFilter, DrinkWhereInput> | null | $Types.Skip
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    drinkId?: SortOrderInput | SortOrder | $Types.Skip
    itemType?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    unitPrice?: SortOrder | $Types.Skip
    subtotal?: SortOrder | $Types.Skip
    notes?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: OrderItemCountOrderByAggregateInput | $Types.Skip
    _avg?: OrderItemAvgOrderByAggregateInput | $Types.Skip
    _max?: OrderItemMaxOrderByAggregateInput | $Types.Skip
    _min?: OrderItemMinOrderByAggregateInput | $Types.Skip
    _sum?: OrderItemSumOrderByAggregateInput | $Types.Skip
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: OrderItemScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"OrderItem"> | number | $Types.Skip
    orderId?: IntWithAggregatesFilter<"OrderItem"> | number | $Types.Skip
    drinkId?: IntNullableWithAggregatesFilter<"OrderItem"> | number | null | $Types.Skip
    itemType?: StringWithAggregatesFilter<"OrderItem"> | string | $Types.Skip
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number | $Types.Skip
    unitPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string | $Types.Skip
  }

  export type OrderPizzaWhereInput = {
    AND?: OrderPizzaWhereInput | OrderPizzaWhereInput[] | $Types.Skip
    OR?: OrderPizzaWhereInput[] | $Types.Skip
    NOT?: OrderPizzaWhereInput | OrderPizzaWhereInput[] | $Types.Skip
    id?: IntFilter<"OrderPizza"> | number | $Types.Skip
    orderItemId?: IntFilter<"OrderPizza"> | number | $Types.Skip
    firstFlavorId?: IntFilter<"OrderPizza"> | number | $Types.Skip
    secondFlavorId?: IntNullableFilter<"OrderPizza"> | number | null | $Types.Skip
    crustId?: IntFilter<"OrderPizza"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"OrderPizza"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"OrderPizza"> | Date | string | $Types.Skip
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput> | $Types.Skip
    firstFlavor?: XOR<FlavorScalarRelationFilter, FlavorWhereInput> | $Types.Skip
    secondFlavor?: XOR<FlavorNullableScalarRelationFilter, FlavorWhereInput> | null | $Types.Skip
    crust?: XOR<CrustScalarRelationFilter, CrustWhereInput> | $Types.Skip
  }

  export type OrderPizzaOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    orderItemId?: SortOrder | $Types.Skip
    firstFlavorId?: SortOrder | $Types.Skip
    secondFlavorId?: SortOrderInput | SortOrder | $Types.Skip
    crustId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    orderItem?: OrderItemOrderByWithRelationInput | $Types.Skip
    firstFlavor?: FlavorOrderByWithRelationInput | $Types.Skip
    secondFlavor?: FlavorOrderByWithRelationInput | $Types.Skip
    crust?: CrustOrderByWithRelationInput | $Types.Skip
  }

  export type OrderPizzaWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    orderItemId?: number | $Types.Skip
    AND?: OrderPizzaWhereInput | OrderPizzaWhereInput[] | $Types.Skip
    OR?: OrderPizzaWhereInput[] | $Types.Skip
    NOT?: OrderPizzaWhereInput | OrderPizzaWhereInput[] | $Types.Skip
    firstFlavorId?: IntFilter<"OrderPizza"> | number | $Types.Skip
    secondFlavorId?: IntNullableFilter<"OrderPizza"> | number | null | $Types.Skip
    crustId?: IntFilter<"OrderPizza"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"OrderPizza"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"OrderPizza"> | Date | string | $Types.Skip
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput> | $Types.Skip
    firstFlavor?: XOR<FlavorScalarRelationFilter, FlavorWhereInput> | $Types.Skip
    secondFlavor?: XOR<FlavorNullableScalarRelationFilter, FlavorWhereInput> | null | $Types.Skip
    crust?: XOR<CrustScalarRelationFilter, CrustWhereInput> | $Types.Skip
  }, "id" | "orderItemId">

  export type OrderPizzaOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    orderItemId?: SortOrder | $Types.Skip
    firstFlavorId?: SortOrder | $Types.Skip
    secondFlavorId?: SortOrderInput | SortOrder | $Types.Skip
    crustId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: OrderPizzaCountOrderByAggregateInput | $Types.Skip
    _avg?: OrderPizzaAvgOrderByAggregateInput | $Types.Skip
    _max?: OrderPizzaMaxOrderByAggregateInput | $Types.Skip
    _min?: OrderPizzaMinOrderByAggregateInput | $Types.Skip
    _sum?: OrderPizzaSumOrderByAggregateInput | $Types.Skip
  }

  export type OrderPizzaScalarWhereWithAggregatesInput = {
    AND?: OrderPizzaScalarWhereWithAggregatesInput | OrderPizzaScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: OrderPizzaScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: OrderPizzaScalarWhereWithAggregatesInput | OrderPizzaScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"OrderPizza"> | number | $Types.Skip
    orderItemId?: IntWithAggregatesFilter<"OrderPizza"> | number | $Types.Skip
    firstFlavorId?: IntWithAggregatesFilter<"OrderPizza"> | number | $Types.Skip
    secondFlavorId?: IntNullableWithAggregatesFilter<"OrderPizza"> | number | null | $Types.Skip
    crustId?: IntWithAggregatesFilter<"OrderPizza"> | number | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"OrderPizza"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"OrderPizza"> | Date | string | $Types.Skip
  }

  export type FlavorWhereInput = {
    AND?: FlavorWhereInput | FlavorWhereInput[] | $Types.Skip
    OR?: FlavorWhereInput[] | $Types.Skip
    NOT?: FlavorWhereInput | FlavorWhereInput[] | $Types.Skip
    id?: IntFilter<"Flavor"> | number | $Types.Skip
    name?: StringFilter<"Flavor"> | string | $Types.Skip
    description?: StringFilter<"Flavor"> | string | $Types.Skip
    category?: StringFilter<"Flavor"> | string | $Types.Skip
    price?: DecimalFilter<"Flavor"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: StringNullableFilter<"Flavor"> | string | null | $Types.Skip
    isActive?: BoolFilter<"Flavor"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"Flavor"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Flavor"> | Date | string | $Types.Skip
    firstPizzas?: OrderPizzaListRelationFilter | $Types.Skip
    secondPizzas?: OrderPizzaListRelationFilter | $Types.Skip
  }

  export type FlavorOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    imageUrl?: SortOrderInput | SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    firstPizzas?: OrderPizzaOrderByRelationAggregateInput | $Types.Skip
    secondPizzas?: OrderPizzaOrderByRelationAggregateInput | $Types.Skip
  }

  export type FlavorWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    name?: string | $Types.Skip
    AND?: FlavorWhereInput | FlavorWhereInput[] | $Types.Skip
    OR?: FlavorWhereInput[] | $Types.Skip
    NOT?: FlavorWhereInput | FlavorWhereInput[] | $Types.Skip
    description?: StringFilter<"Flavor"> | string | $Types.Skip
    category?: StringFilter<"Flavor"> | string | $Types.Skip
    price?: DecimalFilter<"Flavor"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: StringNullableFilter<"Flavor"> | string | null | $Types.Skip
    isActive?: BoolFilter<"Flavor"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"Flavor"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Flavor"> | Date | string | $Types.Skip
    firstPizzas?: OrderPizzaListRelationFilter | $Types.Skip
    secondPizzas?: OrderPizzaListRelationFilter | $Types.Skip
  }, "id" | "name">

  export type FlavorOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    imageUrl?: SortOrderInput | SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: FlavorCountOrderByAggregateInput | $Types.Skip
    _avg?: FlavorAvgOrderByAggregateInput | $Types.Skip
    _max?: FlavorMaxOrderByAggregateInput | $Types.Skip
    _min?: FlavorMinOrderByAggregateInput | $Types.Skip
    _sum?: FlavorSumOrderByAggregateInput | $Types.Skip
  }

  export type FlavorScalarWhereWithAggregatesInput = {
    AND?: FlavorScalarWhereWithAggregatesInput | FlavorScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: FlavorScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: FlavorScalarWhereWithAggregatesInput | FlavorScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Flavor"> | number | $Types.Skip
    name?: StringWithAggregatesFilter<"Flavor"> | string | $Types.Skip
    description?: StringWithAggregatesFilter<"Flavor"> | string | $Types.Skip
    category?: StringWithAggregatesFilter<"Flavor"> | string | $Types.Skip
    price?: DecimalWithAggregatesFilter<"Flavor"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: StringNullableWithAggregatesFilter<"Flavor"> | string | null | $Types.Skip
    isActive?: BoolWithAggregatesFilter<"Flavor"> | boolean | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Flavor"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Flavor"> | Date | string | $Types.Skip
  }

  export type CrustWhereInput = {
    AND?: CrustWhereInput | CrustWhereInput[] | $Types.Skip
    OR?: CrustWhereInput[] | $Types.Skip
    NOT?: CrustWhereInput | CrustWhereInput[] | $Types.Skip
    id?: IntFilter<"Crust"> | number | $Types.Skip
    name?: StringFilter<"Crust"> | string | $Types.Skip
    price?: DecimalFilter<"Crust"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFilter<"Crust"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"Crust"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Crust"> | Date | string | $Types.Skip
    pizzas?: OrderPizzaListRelationFilter | $Types.Skip
  }

  export type CrustOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    pizzas?: OrderPizzaOrderByRelationAggregateInput | $Types.Skip
  }

  export type CrustWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    name?: string | $Types.Skip
    AND?: CrustWhereInput | CrustWhereInput[] | $Types.Skip
    OR?: CrustWhereInput[] | $Types.Skip
    NOT?: CrustWhereInput | CrustWhereInput[] | $Types.Skip
    price?: DecimalFilter<"Crust"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFilter<"Crust"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"Crust"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Crust"> | Date | string | $Types.Skip
    pizzas?: OrderPizzaListRelationFilter | $Types.Skip
  }, "id" | "name">

  export type CrustOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: CrustCountOrderByAggregateInput | $Types.Skip
    _avg?: CrustAvgOrderByAggregateInput | $Types.Skip
    _max?: CrustMaxOrderByAggregateInput | $Types.Skip
    _min?: CrustMinOrderByAggregateInput | $Types.Skip
    _sum?: CrustSumOrderByAggregateInput | $Types.Skip
  }

  export type CrustScalarWhereWithAggregatesInput = {
    AND?: CrustScalarWhereWithAggregatesInput | CrustScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CrustScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CrustScalarWhereWithAggregatesInput | CrustScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Crust"> | number | $Types.Skip
    name?: StringWithAggregatesFilter<"Crust"> | string | $Types.Skip
    price?: DecimalWithAggregatesFilter<"Crust"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolWithAggregatesFilter<"Crust"> | boolean | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Crust"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Crust"> | Date | string | $Types.Skip
  }

  export type DrinkWhereInput = {
    AND?: DrinkWhereInput | DrinkWhereInput[] | $Types.Skip
    OR?: DrinkWhereInput[] | $Types.Skip
    NOT?: DrinkWhereInput | DrinkWhereInput[] | $Types.Skip
    id?: IntFilter<"Drink"> | number | $Types.Skip
    name?: StringFilter<"Drink"> | string | $Types.Skip
    description?: StringFilter<"Drink"> | string | $Types.Skip
    price?: DecimalFilter<"Drink"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFilter<"Drink"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"Drink"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Drink"> | Date | string | $Types.Skip
    order?: OrderItemListRelationFilter | $Types.Skip
  }

  export type DrinkOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    order?: OrderItemOrderByRelationAggregateInput | $Types.Skip
  }

  export type DrinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    name?: string | $Types.Skip
    AND?: DrinkWhereInput | DrinkWhereInput[] | $Types.Skip
    OR?: DrinkWhereInput[] | $Types.Skip
    NOT?: DrinkWhereInput | DrinkWhereInput[] | $Types.Skip
    description?: StringFilter<"Drink"> | string | $Types.Skip
    price?: DecimalFilter<"Drink"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFilter<"Drink"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"Drink"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Drink"> | Date | string | $Types.Skip
    order?: OrderItemListRelationFilter | $Types.Skip
  }, "id" | "name">

  export type DrinkOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: DrinkCountOrderByAggregateInput | $Types.Skip
    _avg?: DrinkAvgOrderByAggregateInput | $Types.Skip
    _max?: DrinkMaxOrderByAggregateInput | $Types.Skip
    _min?: DrinkMinOrderByAggregateInput | $Types.Skip
    _sum?: DrinkSumOrderByAggregateInput | $Types.Skip
  }

  export type DrinkScalarWhereWithAggregatesInput = {
    AND?: DrinkScalarWhereWithAggregatesInput | DrinkScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: DrinkScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: DrinkScalarWhereWithAggregatesInput | DrinkScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Drink"> | number | $Types.Skip
    name?: StringWithAggregatesFilter<"Drink"> | string | $Types.Skip
    description?: StringWithAggregatesFilter<"Drink"> | string | $Types.Skip
    price?: DecimalWithAggregatesFilter<"Drink"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolWithAggregatesFilter<"Drink"> | boolean | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Drink"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Drink"> | Date | string | $Types.Skip
  }

  export type CustomerCreateInput = {
    name: string
    phone: string
    address: string
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderCreateNestedManyWithoutCustomerInput | $Types.Skip
  }

  export type CustomerUncheckedCreateInput = {
    id?: number | $Types.Skip
    name: string
    phone: string
    address: string
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput | $Types.Skip
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phone?: StringFieldUpdateOperationsInput | string | $Types.Skip
    address?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUpdateManyWithoutCustomerNestedInput | $Types.Skip
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phone?: StringFieldUpdateOperationsInput | string | $Types.Skip
    address?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput | $Types.Skip
  }

  export type CustomerCreateManyInput = {
    id?: number | $Types.Skip
    name: string
    phone: string
    address: string
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phone?: StringFieldUpdateOperationsInput | string | $Types.Skip
    address?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phone?: StringFieldUpdateOperationsInput | string | $Types.Skip
    address?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type WorkingHourCreateInput = {
    dayOfWeek: number
    openingTime: string
    closingTime: string
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    pizzeria: PizzeriaCreateNestedOneWithoutWorkingHoursInput
  }

  export type WorkingHourUncheckedCreateInput = {
    id?: number | $Types.Skip
    pizzeriaId: number
    dayOfWeek: number
    openingTime: string
    closingTime: string
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type WorkingHourUpdateInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number | $Types.Skip
    openingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    closingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    pizzeria?: PizzeriaUpdateOneRequiredWithoutWorkingHoursNestedInput | $Types.Skip
  }

  export type WorkingHourUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    pizzeriaId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    dayOfWeek?: IntFieldUpdateOperationsInput | number | $Types.Skip
    openingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    closingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type WorkingHourCreateManyInput = {
    id?: number | $Types.Skip
    pizzeriaId: number
    dayOfWeek: number
    openingTime: string
    closingTime: string
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type WorkingHourUpdateManyMutationInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number | $Types.Skip
    openingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    closingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type WorkingHourUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    pizzeriaId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    dayOfWeek?: IntFieldUpdateOperationsInput | number | $Types.Skip
    openingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    closingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PizzeriaCreateInput = {
    name: string
    description?: string | null | $Types.Skip
    cnpj?: string | null | $Types.Skip
    address?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: string | null | $Types.Skip
    instagram?: string | null | $Types.Skip
    facebook?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    workingHours?: WorkingHourCreateNestedManyWithoutPizzeriaInput | $Types.Skip
  }

  export type PizzeriaUncheckedCreateInput = {
    id?: number | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    cnpj?: string | null | $Types.Skip
    address?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: string | null | $Types.Skip
    instagram?: string | null | $Types.Skip
    facebook?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    workingHours?: WorkingHourUncheckedCreateNestedManyWithoutPizzeriaInput | $Types.Skip
  }

  export type PizzeriaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    address?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    instagram?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    facebook?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    workingHours?: WorkingHourUpdateManyWithoutPizzeriaNestedInput | $Types.Skip
  }

  export type PizzeriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    address?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    instagram?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    facebook?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    workingHours?: WorkingHourUncheckedUpdateManyWithoutPizzeriaNestedInput | $Types.Skip
  }

  export type PizzeriaCreateManyInput = {
    id?: number | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    cnpj?: string | null | $Types.Skip
    address?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: string | null | $Types.Skip
    instagram?: string | null | $Types.Skip
    facebook?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type PizzeriaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    address?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    instagram?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    facebook?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PizzeriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    address?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    instagram?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    facebook?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderCreateInput = {
    deliveryAddress: string
    status: string
    totalAmount?: Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod: string
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    customer: CustomerCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput | $Types.Skip
  }

  export type OrderUncheckedCreateInput = {
    id?: number | $Types.Skip
    customerId: number
    deliveryAddress: string
    status: string
    totalAmount?: Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod: string
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput | $Types.Skip
  }

  export type OrderUpdateInput = {
    deliveryAddress?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput | $Types.Skip
    items?: OrderItemUpdateManyWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    customerId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    deliveryAddress?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderCreateManyInput = {
    id?: number | $Types.Skip
    customerId: number
    deliveryAddress: string
    status: string
    totalAmount?: Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod: string
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderUpdateManyMutationInput = {
    deliveryAddress?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    customerId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    deliveryAddress?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderItemCreateInput = {
    itemType: string
    quantity?: number | $Types.Skip
    unitPrice?: Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    pizza?: OrderPizzaCreateNestedOneWithoutOrderItemInput | $Types.Skip
    order: OrderCreateNestedOneWithoutItemsInput
    drink?: DrinkCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number | $Types.Skip
    orderId: number
    drinkId?: number | null | $Types.Skip
    itemType: string
    quantity?: number | $Types.Skip
    unitPrice?: Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    pizza?: OrderPizzaUncheckedCreateNestedOneWithoutOrderItemInput | $Types.Skip
  }

  export type OrderItemUpdateInput = {
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    pizza?: OrderPizzaUpdateOneWithoutOrderItemNestedInput | $Types.Skip
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput | $Types.Skip
    drink?: DrinkUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    drinkId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    pizza?: OrderPizzaUncheckedUpdateOneWithoutOrderItemNestedInput | $Types.Skip
  }

  export type OrderItemCreateManyInput = {
    id?: number | $Types.Skip
    orderId: number
    drinkId?: number | null | $Types.Skip
    itemType: string
    quantity?: number | $Types.Skip
    unitPrice?: Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderItemUpdateManyMutationInput = {
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    drinkId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderPizzaCreateInput = {
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orderItem: OrderItemCreateNestedOneWithoutPizzaInput
    firstFlavor: FlavorCreateNestedOneWithoutFirstPizzasInput
    secondFlavor?: FlavorCreateNestedOneWithoutSecondPizzasInput | $Types.Skip
    crust: CrustCreateNestedOneWithoutPizzasInput
  }

  export type OrderPizzaUncheckedCreateInput = {
    id?: number | $Types.Skip
    orderItemId: number
    firstFlavorId: number
    secondFlavorId?: number | null | $Types.Skip
    crustId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderPizzaUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orderItem?: OrderItemUpdateOneRequiredWithoutPizzaNestedInput | $Types.Skip
    firstFlavor?: FlavorUpdateOneRequiredWithoutFirstPizzasNestedInput | $Types.Skip
    secondFlavor?: FlavorUpdateOneWithoutSecondPizzasNestedInput | $Types.Skip
    crust?: CrustUpdateOneRequiredWithoutPizzasNestedInput | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderItemId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstFlavorId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    secondFlavorId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    crustId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderPizzaCreateManyInput = {
    id?: number | $Types.Skip
    orderItemId: number
    firstFlavorId: number
    secondFlavorId?: number | null | $Types.Skip
    crustId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderPizzaUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderItemId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstFlavorId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    secondFlavorId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    crustId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FlavorCreateInput = {
    name: string
    description: string
    category: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    firstPizzas?: OrderPizzaCreateNestedManyWithoutFirstFlavorInput | $Types.Skip
    secondPizzas?: OrderPizzaCreateNestedManyWithoutSecondFlavorInput | $Types.Skip
  }

  export type FlavorUncheckedCreateInput = {
    id?: number | $Types.Skip
    name: string
    description: string
    category: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    firstPizzas?: OrderPizzaUncheckedCreateNestedManyWithoutFirstFlavorInput | $Types.Skip
    secondPizzas?: OrderPizzaUncheckedCreateNestedManyWithoutSecondFlavorInput | $Types.Skip
  }

  export type FlavorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    firstPizzas?: OrderPizzaUpdateManyWithoutFirstFlavorNestedInput | $Types.Skip
    secondPizzas?: OrderPizzaUpdateManyWithoutSecondFlavorNestedInput | $Types.Skip
  }

  export type FlavorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    firstPizzas?: OrderPizzaUncheckedUpdateManyWithoutFirstFlavorNestedInput | $Types.Skip
    secondPizzas?: OrderPizzaUncheckedUpdateManyWithoutSecondFlavorNestedInput | $Types.Skip
  }

  export type FlavorCreateManyInput = {
    id?: number | $Types.Skip
    name: string
    description: string
    category: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type FlavorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FlavorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CrustCreateInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    pizzas?: OrderPizzaCreateNestedManyWithoutCrustInput | $Types.Skip
  }

  export type CrustUncheckedCreateInput = {
    id?: number | $Types.Skip
    name: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    pizzas?: OrderPizzaUncheckedCreateNestedManyWithoutCrustInput | $Types.Skip
  }

  export type CrustUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    pizzas?: OrderPizzaUpdateManyWithoutCrustNestedInput | $Types.Skip
  }

  export type CrustUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    pizzas?: OrderPizzaUncheckedUpdateManyWithoutCrustNestedInput | $Types.Skip
  }

  export type CrustCreateManyInput = {
    id?: number | $Types.Skip
    name: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CrustUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CrustUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type DrinkCreateInput = {
    name: string
    description: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    order?: OrderItemCreateNestedManyWithoutDrinkInput | $Types.Skip
  }

  export type DrinkUncheckedCreateInput = {
    id?: number | $Types.Skip
    name: string
    description: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    order?: OrderItemUncheckedCreateNestedManyWithoutDrinkInput | $Types.Skip
  }

  export type DrinkUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    order?: OrderItemUpdateManyWithoutDrinkNestedInput | $Types.Skip
  }

  export type DrinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    order?: OrderItemUncheckedUpdateManyWithoutDrinkNestedInput | $Types.Skip
  }

  export type DrinkCreateManyInput = {
    id?: number | $Types.Skip
    name: string
    description: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type DrinkUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type DrinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput | $Types.Skip
    some?: OrderWhereInput | $Types.Skip
    none?: OrderWhereInput | $Types.Skip
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    address?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    address?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    address?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type PizzeriaScalarRelationFilter = {
    is?: PizzeriaWhereInput | $Types.Skip
    isNot?: PizzeriaWhereInput | $Types.Skip
  }

  export type WorkingHourCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    pizzeriaId?: SortOrder | $Types.Skip
    dayOfWeek?: SortOrder | $Types.Skip
    openingTime?: SortOrder | $Types.Skip
    closingTime?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type WorkingHourAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    pizzeriaId?: SortOrder | $Types.Skip
    dayOfWeek?: SortOrder | $Types.Skip
  }

  export type WorkingHourMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    pizzeriaId?: SortOrder | $Types.Skip
    dayOfWeek?: SortOrder | $Types.Skip
    openingTime?: SortOrder | $Types.Skip
    closingTime?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type WorkingHourMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    pizzeriaId?: SortOrder | $Types.Skip
    dayOfWeek?: SortOrder | $Types.Skip
    openingTime?: SortOrder | $Types.Skip
    closingTime?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type WorkingHourSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    pizzeriaId?: SortOrder | $Types.Skip
    dayOfWeek?: SortOrder | $Types.Skip
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | $Types.Skip
  }

  export type WorkingHourListRelationFilter = {
    every?: WorkingHourWhereInput | $Types.Skip
    some?: WorkingHourWhereInput | $Types.Skip
    none?: WorkingHourWhereInput | $Types.Skip
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder | $Types.Skip
  }

  export type WorkingHourOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type PizzeriaCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    cnpj?: SortOrder | $Types.Skip
    address?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    minOrderValue?: SortOrder | $Types.Skip
    website?: SortOrder | $Types.Skip
    instagram?: SortOrder | $Types.Skip
    facebook?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type PizzeriaAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    minOrderValue?: SortOrder | $Types.Skip
  }

  export type PizzeriaMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    cnpj?: SortOrder | $Types.Skip
    address?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    minOrderValue?: SortOrder | $Types.Skip
    website?: SortOrder | $Types.Skip
    instagram?: SortOrder | $Types.Skip
    facebook?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type PizzeriaMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    cnpj?: SortOrder | $Types.Skip
    address?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    minOrderValue?: SortOrder | $Types.Skip
    website?: SortOrder | $Types.Skip
    instagram?: SortOrder | $Types.Skip
    facebook?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type PizzeriaSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    minOrderValue?: SortOrder | $Types.Skip
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput | $Types.Skip
    isNot?: CustomerWhereInput | $Types.Skip
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput | $Types.Skip
    some?: OrderItemWhereInput | $Types.Skip
    none?: OrderItemWhereInput | $Types.Skip
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    deliveryAddress?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    totalAmount?: SortOrder | $Types.Skip
    paymentMethod?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    totalAmount?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    deliveryAddress?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    totalAmount?: SortOrder | $Types.Skip
    paymentMethod?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    deliveryAddress?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    totalAmount?: SortOrder | $Types.Skip
    paymentMethod?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    totalAmount?: SortOrder | $Types.Skip
    deliveryTax?: SortOrder | $Types.Skip
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type OrderPizzaNullableScalarRelationFilter = {
    is?: OrderPizzaWhereInput | null | $Types.Skip
    isNot?: OrderPizzaWhereInput | null | $Types.Skip
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput | $Types.Skip
    isNot?: OrderWhereInput | $Types.Skip
  }

  export type DrinkNullableScalarRelationFilter = {
    is?: DrinkWhereInput | null | $Types.Skip
    isNot?: DrinkWhereInput | null | $Types.Skip
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    drinkId?: SortOrder | $Types.Skip
    itemType?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    unitPrice?: SortOrder | $Types.Skip
    subtotal?: SortOrder | $Types.Skip
    notes?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    drinkId?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    unitPrice?: SortOrder | $Types.Skip
    subtotal?: SortOrder | $Types.Skip
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    drinkId?: SortOrder | $Types.Skip
    itemType?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    unitPrice?: SortOrder | $Types.Skip
    subtotal?: SortOrder | $Types.Skip
    notes?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    drinkId?: SortOrder | $Types.Skip
    itemType?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    unitPrice?: SortOrder | $Types.Skip
    subtotal?: SortOrder | $Types.Skip
    notes?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    drinkId?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    unitPrice?: SortOrder | $Types.Skip
    subtotal?: SortOrder | $Types.Skip
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatNullableFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type OrderItemScalarRelationFilter = {
    is?: OrderItemWhereInput | $Types.Skip
    isNot?: OrderItemWhereInput | $Types.Skip
  }

  export type FlavorScalarRelationFilter = {
    is?: FlavorWhereInput | $Types.Skip
    isNot?: FlavorWhereInput | $Types.Skip
  }

  export type FlavorNullableScalarRelationFilter = {
    is?: FlavorWhereInput | null | $Types.Skip
    isNot?: FlavorWhereInput | null | $Types.Skip
  }

  export type CrustScalarRelationFilter = {
    is?: CrustWhereInput | $Types.Skip
    isNot?: CrustWhereInput | $Types.Skip
  }

  export type OrderPizzaCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderItemId?: SortOrder | $Types.Skip
    firstFlavorId?: SortOrder | $Types.Skip
    secondFlavorId?: SortOrder | $Types.Skip
    crustId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type OrderPizzaAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderItemId?: SortOrder | $Types.Skip
    firstFlavorId?: SortOrder | $Types.Skip
    secondFlavorId?: SortOrder | $Types.Skip
    crustId?: SortOrder | $Types.Skip
  }

  export type OrderPizzaMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderItemId?: SortOrder | $Types.Skip
    firstFlavorId?: SortOrder | $Types.Skip
    secondFlavorId?: SortOrder | $Types.Skip
    crustId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type OrderPizzaMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderItemId?: SortOrder | $Types.Skip
    firstFlavorId?: SortOrder | $Types.Skip
    secondFlavorId?: SortOrder | $Types.Skip
    crustId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type OrderPizzaSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderItemId?: SortOrder | $Types.Skip
    firstFlavorId?: SortOrder | $Types.Skip
    secondFlavorId?: SortOrder | $Types.Skip
    crustId?: SortOrder | $Types.Skip
  }

  export type OrderPizzaListRelationFilter = {
    every?: OrderPizzaWhereInput | $Types.Skip
    some?: OrderPizzaWhereInput | $Types.Skip
    none?: OrderPizzaWhereInput | $Types.Skip
  }

  export type OrderPizzaOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type FlavorCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    imageUrl?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type FlavorAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
  }

  export type FlavorMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    imageUrl?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type FlavorMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    category?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    imageUrl?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type FlavorSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
  }

  export type CrustCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CrustAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
  }

  export type CrustMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CrustMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CrustSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
  }

  export type DrinkCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type DrinkAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
  }

  export type DrinkMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type DrinkMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type DrinkSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[] | $Types.Skip
    createMany?: OrderCreateManyCustomerInputEnvelope | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[] | $Types.Skip
    createMany?: OrderCreateManyCustomerInputEnvelope | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string | $Types.Skip
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean | $Types.Skip
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string | $Types.Skip
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[] | $Types.Skip
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[] | $Types.Skip
    createMany?: OrderCreateManyCustomerInputEnvelope | $Types.Skip
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[] | $Types.Skip
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[] | $Types.Skip
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[] | $Types.Skip
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[] | $Types.Skip
    createMany?: OrderCreateManyCustomerInputEnvelope | $Types.Skip
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[] | $Types.Skip
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[] | $Types.Skip
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
  }

  export type PizzeriaCreateNestedOneWithoutWorkingHoursInput = {
    create?: XOR<PizzeriaCreateWithoutWorkingHoursInput, PizzeriaUncheckedCreateWithoutWorkingHoursInput> | $Types.Skip
    connectOrCreate?: PizzeriaCreateOrConnectWithoutWorkingHoursInput | $Types.Skip
    connect?: PizzeriaWhereUniqueInput | $Types.Skip
  }

  export type PizzeriaUpdateOneRequiredWithoutWorkingHoursNestedInput = {
    create?: XOR<PizzeriaCreateWithoutWorkingHoursInput, PizzeriaUncheckedCreateWithoutWorkingHoursInput> | $Types.Skip
    connectOrCreate?: PizzeriaCreateOrConnectWithoutWorkingHoursInput | $Types.Skip
    upsert?: PizzeriaUpsertWithoutWorkingHoursInput | $Types.Skip
    connect?: PizzeriaWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PizzeriaUpdateToOneWithWhereWithoutWorkingHoursInput, PizzeriaUpdateWithoutWorkingHoursInput>, PizzeriaUncheckedUpdateWithoutWorkingHoursInput> | $Types.Skip
  }

  export type WorkingHourCreateNestedManyWithoutPizzeriaInput = {
    create?: XOR<WorkingHourCreateWithoutPizzeriaInput, WorkingHourUncheckedCreateWithoutPizzeriaInput> | WorkingHourCreateWithoutPizzeriaInput[] | WorkingHourUncheckedCreateWithoutPizzeriaInput[] | $Types.Skip
    connectOrCreate?: WorkingHourCreateOrConnectWithoutPizzeriaInput | WorkingHourCreateOrConnectWithoutPizzeriaInput[] | $Types.Skip
    createMany?: WorkingHourCreateManyPizzeriaInputEnvelope | $Types.Skip
    connect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[] | $Types.Skip
  }

  export type WorkingHourUncheckedCreateNestedManyWithoutPizzeriaInput = {
    create?: XOR<WorkingHourCreateWithoutPizzeriaInput, WorkingHourUncheckedCreateWithoutPizzeriaInput> | WorkingHourCreateWithoutPizzeriaInput[] | WorkingHourUncheckedCreateWithoutPizzeriaInput[] | $Types.Skip
    connectOrCreate?: WorkingHourCreateOrConnectWithoutPizzeriaInput | WorkingHourCreateOrConnectWithoutPizzeriaInput[] | $Types.Skip
    createMany?: WorkingHourCreateManyPizzeriaInputEnvelope | $Types.Skip
    connect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[] | $Types.Skip
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null | $Types.Skip
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | $Types.Skip
    increment?: Decimal | DecimalJsLike | number | string | $Types.Skip
    decrement?: Decimal | DecimalJsLike | number | string | $Types.Skip
    multiply?: Decimal | DecimalJsLike | number | string | $Types.Skip
    divide?: Decimal | DecimalJsLike | number | string | $Types.Skip
  }

  export type WorkingHourUpdateManyWithoutPizzeriaNestedInput = {
    create?: XOR<WorkingHourCreateWithoutPizzeriaInput, WorkingHourUncheckedCreateWithoutPizzeriaInput> | WorkingHourCreateWithoutPizzeriaInput[] | WorkingHourUncheckedCreateWithoutPizzeriaInput[] | $Types.Skip
    connectOrCreate?: WorkingHourCreateOrConnectWithoutPizzeriaInput | WorkingHourCreateOrConnectWithoutPizzeriaInput[] | $Types.Skip
    upsert?: WorkingHourUpsertWithWhereUniqueWithoutPizzeriaInput | WorkingHourUpsertWithWhereUniqueWithoutPizzeriaInput[] | $Types.Skip
    createMany?: WorkingHourCreateManyPizzeriaInputEnvelope | $Types.Skip
    set?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[] | $Types.Skip
    disconnect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[] | $Types.Skip
    delete?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[] | $Types.Skip
    connect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[] | $Types.Skip
    update?: WorkingHourUpdateWithWhereUniqueWithoutPizzeriaInput | WorkingHourUpdateWithWhereUniqueWithoutPizzeriaInput[] | $Types.Skip
    updateMany?: WorkingHourUpdateManyWithWhereWithoutPizzeriaInput | WorkingHourUpdateManyWithWhereWithoutPizzeriaInput[] | $Types.Skip
    deleteMany?: WorkingHourScalarWhereInput | WorkingHourScalarWhereInput[] | $Types.Skip
  }

  export type WorkingHourUncheckedUpdateManyWithoutPizzeriaNestedInput = {
    create?: XOR<WorkingHourCreateWithoutPizzeriaInput, WorkingHourUncheckedCreateWithoutPizzeriaInput> | WorkingHourCreateWithoutPizzeriaInput[] | WorkingHourUncheckedCreateWithoutPizzeriaInput[] | $Types.Skip
    connectOrCreate?: WorkingHourCreateOrConnectWithoutPizzeriaInput | WorkingHourCreateOrConnectWithoutPizzeriaInput[] | $Types.Skip
    upsert?: WorkingHourUpsertWithWhereUniqueWithoutPizzeriaInput | WorkingHourUpsertWithWhereUniqueWithoutPizzeriaInput[] | $Types.Skip
    createMany?: WorkingHourCreateManyPizzeriaInputEnvelope | $Types.Skip
    set?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[] | $Types.Skip
    disconnect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[] | $Types.Skip
    delete?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[] | $Types.Skip
    connect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[] | $Types.Skip
    update?: WorkingHourUpdateWithWhereUniqueWithoutPizzeriaInput | WorkingHourUpdateWithWhereUniqueWithoutPizzeriaInput[] | $Types.Skip
    updateMany?: WorkingHourUpdateManyWithWhereWithoutPizzeriaInput | WorkingHourUpdateManyWithWhereWithoutPizzeriaInput[] | $Types.Skip
    deleteMany?: WorkingHourScalarWhereInput | WorkingHourScalarWhereInput[] | $Types.Skip
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput> | $Types.Skip
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput | $Types.Skip
    connect?: CustomerWhereUniqueInput | $Types.Skip
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[] | $Types.Skip
    createMany?: OrderItemCreateManyOrderInputEnvelope | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[] | $Types.Skip
    createMany?: OrderItemCreateManyOrderInputEnvelope | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput> | $Types.Skip
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput | $Types.Skip
    upsert?: CustomerUpsertWithoutOrdersInput | $Types.Skip
    connect?: CustomerWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput> | $Types.Skip
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[] | $Types.Skip
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[] | $Types.Skip
    createMany?: OrderItemCreateManyOrderInputEnvelope | $Types.Skip
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[] | $Types.Skip
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[] | $Types.Skip
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[] | $Types.Skip
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[] | $Types.Skip
    createMany?: OrderItemCreateManyOrderInputEnvelope | $Types.Skip
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[] | $Types.Skip
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[] | $Types.Skip
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
  }

  export type OrderPizzaCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<OrderPizzaCreateWithoutOrderItemInput, OrderPizzaUncheckedCreateWithoutOrderItemInput> | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutOrderItemInput | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | $Types.Skip
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput> | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput | $Types.Skip
    connect?: OrderWhereUniqueInput | $Types.Skip
  }

  export type DrinkCreateNestedOneWithoutOrderInput = {
    create?: XOR<DrinkCreateWithoutOrderInput, DrinkUncheckedCreateWithoutOrderInput> | $Types.Skip
    connectOrCreate?: DrinkCreateOrConnectWithoutOrderInput | $Types.Skip
    connect?: DrinkWhereUniqueInput | $Types.Skip
  }

  export type OrderPizzaUncheckedCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<OrderPizzaCreateWithoutOrderItemInput, OrderPizzaUncheckedCreateWithoutOrderItemInput> | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutOrderItemInput | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | $Types.Skip
  }

  export type OrderPizzaUpdateOneWithoutOrderItemNestedInput = {
    create?: XOR<OrderPizzaCreateWithoutOrderItemInput, OrderPizzaUncheckedCreateWithoutOrderItemInput> | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutOrderItemInput | $Types.Skip
    upsert?: OrderPizzaUpsertWithoutOrderItemInput | $Types.Skip
    disconnect?: OrderPizzaWhereInput | boolean | $Types.Skip
    delete?: OrderPizzaWhereInput | boolean | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<OrderPizzaUpdateToOneWithWhereWithoutOrderItemInput, OrderPizzaUpdateWithoutOrderItemInput>, OrderPizzaUncheckedUpdateWithoutOrderItemInput> | $Types.Skip
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput> | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput | $Types.Skip
    upsert?: OrderUpsertWithoutItemsInput | $Types.Skip
    connect?: OrderWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput> | $Types.Skip
  }

  export type DrinkUpdateOneWithoutOrderNestedInput = {
    create?: XOR<DrinkCreateWithoutOrderInput, DrinkUncheckedCreateWithoutOrderInput> | $Types.Skip
    connectOrCreate?: DrinkCreateOrConnectWithoutOrderInput | $Types.Skip
    upsert?: DrinkUpsertWithoutOrderInput | $Types.Skip
    disconnect?: DrinkWhereInput | boolean | $Types.Skip
    delete?: DrinkWhereInput | boolean | $Types.Skip
    connect?: DrinkWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<DrinkUpdateToOneWithWhereWithoutOrderInput, DrinkUpdateWithoutOrderInput>, DrinkUncheckedUpdateWithoutOrderInput> | $Types.Skip
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateOneWithoutOrderItemNestedInput = {
    create?: XOR<OrderPizzaCreateWithoutOrderItemInput, OrderPizzaUncheckedCreateWithoutOrderItemInput> | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutOrderItemInput | $Types.Skip
    upsert?: OrderPizzaUpsertWithoutOrderItemInput | $Types.Skip
    disconnect?: OrderPizzaWhereInput | boolean | $Types.Skip
    delete?: OrderPizzaWhereInput | boolean | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<OrderPizzaUpdateToOneWithWhereWithoutOrderItemInput, OrderPizzaUpdateWithoutOrderItemInput>, OrderPizzaUncheckedUpdateWithoutOrderItemInput> | $Types.Skip
  }

  export type OrderItemCreateNestedOneWithoutPizzaInput = {
    create?: XOR<OrderItemCreateWithoutPizzaInput, OrderItemUncheckedCreateWithoutPizzaInput> | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutPizzaInput | $Types.Skip
    connect?: OrderItemWhereUniqueInput | $Types.Skip
  }

  export type FlavorCreateNestedOneWithoutFirstPizzasInput = {
    create?: XOR<FlavorCreateWithoutFirstPizzasInput, FlavorUncheckedCreateWithoutFirstPizzasInput> | $Types.Skip
    connectOrCreate?: FlavorCreateOrConnectWithoutFirstPizzasInput | $Types.Skip
    connect?: FlavorWhereUniqueInput | $Types.Skip
  }

  export type FlavorCreateNestedOneWithoutSecondPizzasInput = {
    create?: XOR<FlavorCreateWithoutSecondPizzasInput, FlavorUncheckedCreateWithoutSecondPizzasInput> | $Types.Skip
    connectOrCreate?: FlavorCreateOrConnectWithoutSecondPizzasInput | $Types.Skip
    connect?: FlavorWhereUniqueInput | $Types.Skip
  }

  export type CrustCreateNestedOneWithoutPizzasInput = {
    create?: XOR<CrustCreateWithoutPizzasInput, CrustUncheckedCreateWithoutPizzasInput> | $Types.Skip
    connectOrCreate?: CrustCreateOrConnectWithoutPizzasInput | $Types.Skip
    connect?: CrustWhereUniqueInput | $Types.Skip
  }

  export type OrderItemUpdateOneRequiredWithoutPizzaNestedInput = {
    create?: XOR<OrderItemCreateWithoutPizzaInput, OrderItemUncheckedCreateWithoutPizzaInput> | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutPizzaInput | $Types.Skip
    upsert?: OrderItemUpsertWithoutPizzaInput | $Types.Skip
    connect?: OrderItemWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<OrderItemUpdateToOneWithWhereWithoutPizzaInput, OrderItemUpdateWithoutPizzaInput>, OrderItemUncheckedUpdateWithoutPizzaInput> | $Types.Skip
  }

  export type FlavorUpdateOneRequiredWithoutFirstPizzasNestedInput = {
    create?: XOR<FlavorCreateWithoutFirstPizzasInput, FlavorUncheckedCreateWithoutFirstPizzasInput> | $Types.Skip
    connectOrCreate?: FlavorCreateOrConnectWithoutFirstPizzasInput | $Types.Skip
    upsert?: FlavorUpsertWithoutFirstPizzasInput | $Types.Skip
    connect?: FlavorWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<FlavorUpdateToOneWithWhereWithoutFirstPizzasInput, FlavorUpdateWithoutFirstPizzasInput>, FlavorUncheckedUpdateWithoutFirstPizzasInput> | $Types.Skip
  }

  export type FlavorUpdateOneWithoutSecondPizzasNestedInput = {
    create?: XOR<FlavorCreateWithoutSecondPizzasInput, FlavorUncheckedCreateWithoutSecondPizzasInput> | $Types.Skip
    connectOrCreate?: FlavorCreateOrConnectWithoutSecondPizzasInput | $Types.Skip
    upsert?: FlavorUpsertWithoutSecondPizzasInput | $Types.Skip
    disconnect?: FlavorWhereInput | boolean | $Types.Skip
    delete?: FlavorWhereInput | boolean | $Types.Skip
    connect?: FlavorWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<FlavorUpdateToOneWithWhereWithoutSecondPizzasInput, FlavorUpdateWithoutSecondPizzasInput>, FlavorUncheckedUpdateWithoutSecondPizzasInput> | $Types.Skip
  }

  export type CrustUpdateOneRequiredWithoutPizzasNestedInput = {
    create?: XOR<CrustCreateWithoutPizzasInput, CrustUncheckedCreateWithoutPizzasInput> | $Types.Skip
    connectOrCreate?: CrustCreateOrConnectWithoutPizzasInput | $Types.Skip
    upsert?: CrustUpsertWithoutPizzasInput | $Types.Skip
    connect?: CrustWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<CrustUpdateToOneWithWhereWithoutPizzasInput, CrustUpdateWithoutPizzasInput>, CrustUncheckedUpdateWithoutPizzasInput> | $Types.Skip
  }

  export type OrderPizzaCreateNestedManyWithoutFirstFlavorInput = {
    create?: XOR<OrderPizzaCreateWithoutFirstFlavorInput, OrderPizzaUncheckedCreateWithoutFirstFlavorInput> | OrderPizzaCreateWithoutFirstFlavorInput[] | OrderPizzaUncheckedCreateWithoutFirstFlavorInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutFirstFlavorInput | OrderPizzaCreateOrConnectWithoutFirstFlavorInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManyFirstFlavorInputEnvelope | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
  }

  export type OrderPizzaCreateNestedManyWithoutSecondFlavorInput = {
    create?: XOR<OrderPizzaCreateWithoutSecondFlavorInput, OrderPizzaUncheckedCreateWithoutSecondFlavorInput> | OrderPizzaCreateWithoutSecondFlavorInput[] | OrderPizzaUncheckedCreateWithoutSecondFlavorInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutSecondFlavorInput | OrderPizzaCreateOrConnectWithoutSecondFlavorInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManySecondFlavorInputEnvelope | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
  }

  export type OrderPizzaUncheckedCreateNestedManyWithoutFirstFlavorInput = {
    create?: XOR<OrderPizzaCreateWithoutFirstFlavorInput, OrderPizzaUncheckedCreateWithoutFirstFlavorInput> | OrderPizzaCreateWithoutFirstFlavorInput[] | OrderPizzaUncheckedCreateWithoutFirstFlavorInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutFirstFlavorInput | OrderPizzaCreateOrConnectWithoutFirstFlavorInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManyFirstFlavorInputEnvelope | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
  }

  export type OrderPizzaUncheckedCreateNestedManyWithoutSecondFlavorInput = {
    create?: XOR<OrderPizzaCreateWithoutSecondFlavorInput, OrderPizzaUncheckedCreateWithoutSecondFlavorInput> | OrderPizzaCreateWithoutSecondFlavorInput[] | OrderPizzaUncheckedCreateWithoutSecondFlavorInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutSecondFlavorInput | OrderPizzaCreateOrConnectWithoutSecondFlavorInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManySecondFlavorInputEnvelope | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
  }

  export type OrderPizzaUpdateManyWithoutFirstFlavorNestedInput = {
    create?: XOR<OrderPizzaCreateWithoutFirstFlavorInput, OrderPizzaUncheckedCreateWithoutFirstFlavorInput> | OrderPizzaCreateWithoutFirstFlavorInput[] | OrderPizzaUncheckedCreateWithoutFirstFlavorInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutFirstFlavorInput | OrderPizzaCreateOrConnectWithoutFirstFlavorInput[] | $Types.Skip
    upsert?: OrderPizzaUpsertWithWhereUniqueWithoutFirstFlavorInput | OrderPizzaUpsertWithWhereUniqueWithoutFirstFlavorInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManyFirstFlavorInputEnvelope | $Types.Skip
    set?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    delete?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    update?: OrderPizzaUpdateWithWhereUniqueWithoutFirstFlavorInput | OrderPizzaUpdateWithWhereUniqueWithoutFirstFlavorInput[] | $Types.Skip
    updateMany?: OrderPizzaUpdateManyWithWhereWithoutFirstFlavorInput | OrderPizzaUpdateManyWithWhereWithoutFirstFlavorInput[] | $Types.Skip
    deleteMany?: OrderPizzaScalarWhereInput | OrderPizzaScalarWhereInput[] | $Types.Skip
  }

  export type OrderPizzaUpdateManyWithoutSecondFlavorNestedInput = {
    create?: XOR<OrderPizzaCreateWithoutSecondFlavorInput, OrderPizzaUncheckedCreateWithoutSecondFlavorInput> | OrderPizzaCreateWithoutSecondFlavorInput[] | OrderPizzaUncheckedCreateWithoutSecondFlavorInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutSecondFlavorInput | OrderPizzaCreateOrConnectWithoutSecondFlavorInput[] | $Types.Skip
    upsert?: OrderPizzaUpsertWithWhereUniqueWithoutSecondFlavorInput | OrderPizzaUpsertWithWhereUniqueWithoutSecondFlavorInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManySecondFlavorInputEnvelope | $Types.Skip
    set?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    delete?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    update?: OrderPizzaUpdateWithWhereUniqueWithoutSecondFlavorInput | OrderPizzaUpdateWithWhereUniqueWithoutSecondFlavorInput[] | $Types.Skip
    updateMany?: OrderPizzaUpdateManyWithWhereWithoutSecondFlavorInput | OrderPizzaUpdateManyWithWhereWithoutSecondFlavorInput[] | $Types.Skip
    deleteMany?: OrderPizzaScalarWhereInput | OrderPizzaScalarWhereInput[] | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateManyWithoutFirstFlavorNestedInput = {
    create?: XOR<OrderPizzaCreateWithoutFirstFlavorInput, OrderPizzaUncheckedCreateWithoutFirstFlavorInput> | OrderPizzaCreateWithoutFirstFlavorInput[] | OrderPizzaUncheckedCreateWithoutFirstFlavorInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutFirstFlavorInput | OrderPizzaCreateOrConnectWithoutFirstFlavorInput[] | $Types.Skip
    upsert?: OrderPizzaUpsertWithWhereUniqueWithoutFirstFlavorInput | OrderPizzaUpsertWithWhereUniqueWithoutFirstFlavorInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManyFirstFlavorInputEnvelope | $Types.Skip
    set?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    delete?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    update?: OrderPizzaUpdateWithWhereUniqueWithoutFirstFlavorInput | OrderPizzaUpdateWithWhereUniqueWithoutFirstFlavorInput[] | $Types.Skip
    updateMany?: OrderPizzaUpdateManyWithWhereWithoutFirstFlavorInput | OrderPizzaUpdateManyWithWhereWithoutFirstFlavorInput[] | $Types.Skip
    deleteMany?: OrderPizzaScalarWhereInput | OrderPizzaScalarWhereInput[] | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateManyWithoutSecondFlavorNestedInput = {
    create?: XOR<OrderPizzaCreateWithoutSecondFlavorInput, OrderPizzaUncheckedCreateWithoutSecondFlavorInput> | OrderPizzaCreateWithoutSecondFlavorInput[] | OrderPizzaUncheckedCreateWithoutSecondFlavorInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutSecondFlavorInput | OrderPizzaCreateOrConnectWithoutSecondFlavorInput[] | $Types.Skip
    upsert?: OrderPizzaUpsertWithWhereUniqueWithoutSecondFlavorInput | OrderPizzaUpsertWithWhereUniqueWithoutSecondFlavorInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManySecondFlavorInputEnvelope | $Types.Skip
    set?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    delete?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    update?: OrderPizzaUpdateWithWhereUniqueWithoutSecondFlavorInput | OrderPizzaUpdateWithWhereUniqueWithoutSecondFlavorInput[] | $Types.Skip
    updateMany?: OrderPizzaUpdateManyWithWhereWithoutSecondFlavorInput | OrderPizzaUpdateManyWithWhereWithoutSecondFlavorInput[] | $Types.Skip
    deleteMany?: OrderPizzaScalarWhereInput | OrderPizzaScalarWhereInput[] | $Types.Skip
  }

  export type OrderPizzaCreateNestedManyWithoutCrustInput = {
    create?: XOR<OrderPizzaCreateWithoutCrustInput, OrderPizzaUncheckedCreateWithoutCrustInput> | OrderPizzaCreateWithoutCrustInput[] | OrderPizzaUncheckedCreateWithoutCrustInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutCrustInput | OrderPizzaCreateOrConnectWithoutCrustInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManyCrustInputEnvelope | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
  }

  export type OrderPizzaUncheckedCreateNestedManyWithoutCrustInput = {
    create?: XOR<OrderPizzaCreateWithoutCrustInput, OrderPizzaUncheckedCreateWithoutCrustInput> | OrderPizzaCreateWithoutCrustInput[] | OrderPizzaUncheckedCreateWithoutCrustInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutCrustInput | OrderPizzaCreateOrConnectWithoutCrustInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManyCrustInputEnvelope | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
  }

  export type OrderPizzaUpdateManyWithoutCrustNestedInput = {
    create?: XOR<OrderPizzaCreateWithoutCrustInput, OrderPizzaUncheckedCreateWithoutCrustInput> | OrderPizzaCreateWithoutCrustInput[] | OrderPizzaUncheckedCreateWithoutCrustInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutCrustInput | OrderPizzaCreateOrConnectWithoutCrustInput[] | $Types.Skip
    upsert?: OrderPizzaUpsertWithWhereUniqueWithoutCrustInput | OrderPizzaUpsertWithWhereUniqueWithoutCrustInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManyCrustInputEnvelope | $Types.Skip
    set?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    delete?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    update?: OrderPizzaUpdateWithWhereUniqueWithoutCrustInput | OrderPizzaUpdateWithWhereUniqueWithoutCrustInput[] | $Types.Skip
    updateMany?: OrderPizzaUpdateManyWithWhereWithoutCrustInput | OrderPizzaUpdateManyWithWhereWithoutCrustInput[] | $Types.Skip
    deleteMany?: OrderPizzaScalarWhereInput | OrderPizzaScalarWhereInput[] | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateManyWithoutCrustNestedInput = {
    create?: XOR<OrderPizzaCreateWithoutCrustInput, OrderPizzaUncheckedCreateWithoutCrustInput> | OrderPizzaCreateWithoutCrustInput[] | OrderPizzaUncheckedCreateWithoutCrustInput[] | $Types.Skip
    connectOrCreate?: OrderPizzaCreateOrConnectWithoutCrustInput | OrderPizzaCreateOrConnectWithoutCrustInput[] | $Types.Skip
    upsert?: OrderPizzaUpsertWithWhereUniqueWithoutCrustInput | OrderPizzaUpsertWithWhereUniqueWithoutCrustInput[] | $Types.Skip
    createMany?: OrderPizzaCreateManyCrustInputEnvelope | $Types.Skip
    set?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    delete?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    connect?: OrderPizzaWhereUniqueInput | OrderPizzaWhereUniqueInput[] | $Types.Skip
    update?: OrderPizzaUpdateWithWhereUniqueWithoutCrustInput | OrderPizzaUpdateWithWhereUniqueWithoutCrustInput[] | $Types.Skip
    updateMany?: OrderPizzaUpdateManyWithWhereWithoutCrustInput | OrderPizzaUpdateManyWithWhereWithoutCrustInput[] | $Types.Skip
    deleteMany?: OrderPizzaScalarWhereInput | OrderPizzaScalarWhereInput[] | $Types.Skip
  }

  export type OrderItemCreateNestedManyWithoutDrinkInput = {
    create?: XOR<OrderItemCreateWithoutDrinkInput, OrderItemUncheckedCreateWithoutDrinkInput> | OrderItemCreateWithoutDrinkInput[] | OrderItemUncheckedCreateWithoutDrinkInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutDrinkInput | OrderItemCreateOrConnectWithoutDrinkInput[] | $Types.Skip
    createMany?: OrderItemCreateManyDrinkInputEnvelope | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
  }

  export type OrderItemUncheckedCreateNestedManyWithoutDrinkInput = {
    create?: XOR<OrderItemCreateWithoutDrinkInput, OrderItemUncheckedCreateWithoutDrinkInput> | OrderItemCreateWithoutDrinkInput[] | OrderItemUncheckedCreateWithoutDrinkInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutDrinkInput | OrderItemCreateOrConnectWithoutDrinkInput[] | $Types.Skip
    createMany?: OrderItemCreateManyDrinkInputEnvelope | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
  }

  export type OrderItemUpdateManyWithoutDrinkNestedInput = {
    create?: XOR<OrderItemCreateWithoutDrinkInput, OrderItemUncheckedCreateWithoutDrinkInput> | OrderItemCreateWithoutDrinkInput[] | OrderItemUncheckedCreateWithoutDrinkInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutDrinkInput | OrderItemCreateOrConnectWithoutDrinkInput[] | $Types.Skip
    upsert?: OrderItemUpsertWithWhereUniqueWithoutDrinkInput | OrderItemUpsertWithWhereUniqueWithoutDrinkInput[] | $Types.Skip
    createMany?: OrderItemCreateManyDrinkInputEnvelope | $Types.Skip
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    update?: OrderItemUpdateWithWhereUniqueWithoutDrinkInput | OrderItemUpdateWithWhereUniqueWithoutDrinkInput[] | $Types.Skip
    updateMany?: OrderItemUpdateManyWithWhereWithoutDrinkInput | OrderItemUpdateManyWithWhereWithoutDrinkInput[] | $Types.Skip
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
  }

  export type OrderItemUncheckedUpdateManyWithoutDrinkNestedInput = {
    create?: XOR<OrderItemCreateWithoutDrinkInput, OrderItemUncheckedCreateWithoutDrinkInput> | OrderItemCreateWithoutDrinkInput[] | OrderItemUncheckedCreateWithoutDrinkInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutDrinkInput | OrderItemCreateOrConnectWithoutDrinkInput[] | $Types.Skip
    upsert?: OrderItemUpsertWithWhereUniqueWithoutDrinkInput | OrderItemUpsertWithWhereUniqueWithoutDrinkInput[] | $Types.Skip
    createMany?: OrderItemCreateManyDrinkInputEnvelope | $Types.Skip
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    update?: OrderItemUpdateWithWhereUniqueWithoutDrinkInput | OrderItemUpdateWithWhereUniqueWithoutDrinkInput[] | $Types.Skip
    updateMany?: OrderItemUpdateManyWithWhereWithoutDrinkInput | OrderItemUpdateManyWithWhereWithoutDrinkInput[] | $Types.Skip
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | $Types.Skip
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatNullableFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type OrderCreateWithoutCustomerInput = {
    deliveryAddress: string
    status: string
    totalAmount?: Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod: string
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    items?: OrderItemCreateNestedManyWithoutOrderInput | $Types.Skip
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: number | $Types.Skip
    deliveryAddress: string
    status: string
    totalAmount?: Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod: string
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput | $Types.Skip
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
    OR?: OrderScalarWhereInput[] | $Types.Skip
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Order"> | number | $Types.Skip
    customerId?: IntFilter<"Order"> | number | $Types.Skip
    deliveryAddress?: StringFilter<"Order"> | string | $Types.Skip
    status?: StringFilter<"Order"> | string | $Types.Skip
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFilter<"Order"> | string | $Types.Skip
    deliveryTax?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
  }

  export type PizzeriaCreateWithoutWorkingHoursInput = {
    name: string
    description?: string | null | $Types.Skip
    cnpj?: string | null | $Types.Skip
    address?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: string | null | $Types.Skip
    instagram?: string | null | $Types.Skip
    facebook?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type PizzeriaUncheckedCreateWithoutWorkingHoursInput = {
    id?: number | $Types.Skip
    name: string
    description?: string | null | $Types.Skip
    cnpj?: string | null | $Types.Skip
    address?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: string | null | $Types.Skip
    instagram?: string | null | $Types.Skip
    facebook?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type PizzeriaCreateOrConnectWithoutWorkingHoursInput = {
    where: PizzeriaWhereUniqueInput
    create: XOR<PizzeriaCreateWithoutWorkingHoursInput, PizzeriaUncheckedCreateWithoutWorkingHoursInput>
  }

  export type PizzeriaUpsertWithoutWorkingHoursInput = {
    update: XOR<PizzeriaUpdateWithoutWorkingHoursInput, PizzeriaUncheckedUpdateWithoutWorkingHoursInput>
    create: XOR<PizzeriaCreateWithoutWorkingHoursInput, PizzeriaUncheckedCreateWithoutWorkingHoursInput>
    where?: PizzeriaWhereInput | $Types.Skip
  }

  export type PizzeriaUpdateToOneWithWhereWithoutWorkingHoursInput = {
    where?: PizzeriaWhereInput | $Types.Skip
    data: XOR<PizzeriaUpdateWithoutWorkingHoursInput, PizzeriaUncheckedUpdateWithoutWorkingHoursInput>
  }

  export type PizzeriaUpdateWithoutWorkingHoursInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    address?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    instagram?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    facebook?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PizzeriaUncheckedUpdateWithoutWorkingHoursInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    address?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    minOrderValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    instagram?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    facebook?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type WorkingHourCreateWithoutPizzeriaInput = {
    dayOfWeek: number
    openingTime: string
    closingTime: string
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type WorkingHourUncheckedCreateWithoutPizzeriaInput = {
    id?: number | $Types.Skip
    dayOfWeek: number
    openingTime: string
    closingTime: string
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type WorkingHourCreateOrConnectWithoutPizzeriaInput = {
    where: WorkingHourWhereUniqueInput
    create: XOR<WorkingHourCreateWithoutPizzeriaInput, WorkingHourUncheckedCreateWithoutPizzeriaInput>
  }

  export type WorkingHourCreateManyPizzeriaInputEnvelope = {
    data: WorkingHourCreateManyPizzeriaInput | WorkingHourCreateManyPizzeriaInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type WorkingHourUpsertWithWhereUniqueWithoutPizzeriaInput = {
    where: WorkingHourWhereUniqueInput
    update: XOR<WorkingHourUpdateWithoutPizzeriaInput, WorkingHourUncheckedUpdateWithoutPizzeriaInput>
    create: XOR<WorkingHourCreateWithoutPizzeriaInput, WorkingHourUncheckedCreateWithoutPizzeriaInput>
  }

  export type WorkingHourUpdateWithWhereUniqueWithoutPizzeriaInput = {
    where: WorkingHourWhereUniqueInput
    data: XOR<WorkingHourUpdateWithoutPizzeriaInput, WorkingHourUncheckedUpdateWithoutPizzeriaInput>
  }

  export type WorkingHourUpdateManyWithWhereWithoutPizzeriaInput = {
    where: WorkingHourScalarWhereInput
    data: XOR<WorkingHourUpdateManyMutationInput, WorkingHourUncheckedUpdateManyWithoutPizzeriaInput>
  }

  export type WorkingHourScalarWhereInput = {
    AND?: WorkingHourScalarWhereInput | WorkingHourScalarWhereInput[] | $Types.Skip
    OR?: WorkingHourScalarWhereInput[] | $Types.Skip
    NOT?: WorkingHourScalarWhereInput | WorkingHourScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"WorkingHour"> | number | $Types.Skip
    pizzeriaId?: IntFilter<"WorkingHour"> | number | $Types.Skip
    dayOfWeek?: IntFilter<"WorkingHour"> | number | $Types.Skip
    openingTime?: StringFilter<"WorkingHour"> | string | $Types.Skip
    closingTime?: StringFilter<"WorkingHour"> | string | $Types.Skip
    isActive?: BoolFilter<"WorkingHour"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"WorkingHour"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"WorkingHour"> | Date | string | $Types.Skip
  }

  export type CustomerCreateWithoutOrdersInput = {
    name: string
    phone: string
    address: string
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: number | $Types.Skip
    name: string
    phone: string
    address: string
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    itemType: string
    quantity?: number | $Types.Skip
    unitPrice?: Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    pizza?: OrderPizzaCreateNestedOneWithoutOrderItemInput | $Types.Skip
    drink?: DrinkCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number | $Types.Skip
    drinkId?: number | null | $Types.Skip
    itemType: string
    quantity?: number | $Types.Skip
    unitPrice?: Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    pizza?: OrderPizzaUncheckedCreateNestedOneWithoutOrderItemInput | $Types.Skip
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput | $Types.Skip
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput | $Types.Skip
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phone?: StringFieldUpdateOperationsInput | string | $Types.Skip
    address?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    phone?: StringFieldUpdateOperationsInput | string | $Types.Skip
    address?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
    OR?: OrderItemScalarWhereInput[] | $Types.Skip
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"OrderItem"> | number | $Types.Skip
    orderId?: IntFilter<"OrderItem"> | number | $Types.Skip
    drinkId?: IntNullableFilter<"OrderItem"> | number | null | $Types.Skip
    itemType?: StringFilter<"OrderItem"> | string | $Types.Skip
    quantity?: IntFilter<"OrderItem"> | number | $Types.Skip
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: StringNullableFilter<"OrderItem"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string | $Types.Skip
  }

  export type OrderPizzaCreateWithoutOrderItemInput = {
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    firstFlavor: FlavorCreateNestedOneWithoutFirstPizzasInput
    secondFlavor?: FlavorCreateNestedOneWithoutSecondPizzasInput | $Types.Skip
    crust: CrustCreateNestedOneWithoutPizzasInput
  }

  export type OrderPizzaUncheckedCreateWithoutOrderItemInput = {
    id?: number | $Types.Skip
    firstFlavorId: number
    secondFlavorId?: number | null | $Types.Skip
    crustId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderPizzaCreateOrConnectWithoutOrderItemInput = {
    where: OrderPizzaWhereUniqueInput
    create: XOR<OrderPizzaCreateWithoutOrderItemInput, OrderPizzaUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderCreateWithoutItemsInput = {
    deliveryAddress: string
    status: string
    totalAmount?: Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod: string
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    customer: CustomerCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: number | $Types.Skip
    customerId: number
    deliveryAddress: string
    status: string
    totalAmount?: Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod: string
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type DrinkCreateWithoutOrderInput = {
    name: string
    description: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type DrinkUncheckedCreateWithoutOrderInput = {
    id?: number | $Types.Skip
    name: string
    description: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type DrinkCreateOrConnectWithoutOrderInput = {
    where: DrinkWhereUniqueInput
    create: XOR<DrinkCreateWithoutOrderInput, DrinkUncheckedCreateWithoutOrderInput>
  }

  export type OrderPizzaUpsertWithoutOrderItemInput = {
    update: XOR<OrderPizzaUpdateWithoutOrderItemInput, OrderPizzaUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderPizzaCreateWithoutOrderItemInput, OrderPizzaUncheckedCreateWithoutOrderItemInput>
    where?: OrderPizzaWhereInput | $Types.Skip
  }

  export type OrderPizzaUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: OrderPizzaWhereInput | $Types.Skip
    data: XOR<OrderPizzaUpdateWithoutOrderItemInput, OrderPizzaUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderPizzaUpdateWithoutOrderItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    firstFlavor?: FlavorUpdateOneRequiredWithoutFirstPizzasNestedInput | $Types.Skip
    secondFlavor?: FlavorUpdateOneWithoutSecondPizzasNestedInput | $Types.Skip
    crust?: CrustUpdateOneRequiredWithoutPizzasNestedInput | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstFlavorId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    secondFlavorId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    crustId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput | $Types.Skip
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput | $Types.Skip
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    deliveryAddress?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    customerId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    deliveryAddress?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type DrinkUpsertWithoutOrderInput = {
    update: XOR<DrinkUpdateWithoutOrderInput, DrinkUncheckedUpdateWithoutOrderInput>
    create: XOR<DrinkCreateWithoutOrderInput, DrinkUncheckedCreateWithoutOrderInput>
    where?: DrinkWhereInput | $Types.Skip
  }

  export type DrinkUpdateToOneWithWhereWithoutOrderInput = {
    where?: DrinkWhereInput | $Types.Skip
    data: XOR<DrinkUpdateWithoutOrderInput, DrinkUncheckedUpdateWithoutOrderInput>
  }

  export type DrinkUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type DrinkUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderItemCreateWithoutPizzaInput = {
    itemType: string
    quantity?: number | $Types.Skip
    unitPrice?: Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    order: OrderCreateNestedOneWithoutItemsInput
    drink?: DrinkCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrderItemUncheckedCreateWithoutPizzaInput = {
    id?: number | $Types.Skip
    orderId: number
    drinkId?: number | null | $Types.Skip
    itemType: string
    quantity?: number | $Types.Skip
    unitPrice?: Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderItemCreateOrConnectWithoutPizzaInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutPizzaInput, OrderItemUncheckedCreateWithoutPizzaInput>
  }

  export type FlavorCreateWithoutFirstPizzasInput = {
    name: string
    description: string
    category: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    secondPizzas?: OrderPizzaCreateNestedManyWithoutSecondFlavorInput | $Types.Skip
  }

  export type FlavorUncheckedCreateWithoutFirstPizzasInput = {
    id?: number | $Types.Skip
    name: string
    description: string
    category: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    secondPizzas?: OrderPizzaUncheckedCreateNestedManyWithoutSecondFlavorInput | $Types.Skip
  }

  export type FlavorCreateOrConnectWithoutFirstPizzasInput = {
    where: FlavorWhereUniqueInput
    create: XOR<FlavorCreateWithoutFirstPizzasInput, FlavorUncheckedCreateWithoutFirstPizzasInput>
  }

  export type FlavorCreateWithoutSecondPizzasInput = {
    name: string
    description: string
    category: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    firstPizzas?: OrderPizzaCreateNestedManyWithoutFirstFlavorInput | $Types.Skip
  }

  export type FlavorUncheckedCreateWithoutSecondPizzasInput = {
    id?: number | $Types.Skip
    name: string
    description: string
    category: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: string | null | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    firstPizzas?: OrderPizzaUncheckedCreateNestedManyWithoutFirstFlavorInput | $Types.Skip
  }

  export type FlavorCreateOrConnectWithoutSecondPizzasInput = {
    where: FlavorWhereUniqueInput
    create: XOR<FlavorCreateWithoutSecondPizzasInput, FlavorUncheckedCreateWithoutSecondPizzasInput>
  }

  export type CrustCreateWithoutPizzasInput = {
    name: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CrustUncheckedCreateWithoutPizzasInput = {
    id?: number | $Types.Skip
    name: string
    price?: Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CrustCreateOrConnectWithoutPizzasInput = {
    where: CrustWhereUniqueInput
    create: XOR<CrustCreateWithoutPizzasInput, CrustUncheckedCreateWithoutPizzasInput>
  }

  export type OrderItemUpsertWithoutPizzaInput = {
    update: XOR<OrderItemUpdateWithoutPizzaInput, OrderItemUncheckedUpdateWithoutPizzaInput>
    create: XOR<OrderItemCreateWithoutPizzaInput, OrderItemUncheckedCreateWithoutPizzaInput>
    where?: OrderItemWhereInput | $Types.Skip
  }

  export type OrderItemUpdateToOneWithWhereWithoutPizzaInput = {
    where?: OrderItemWhereInput | $Types.Skip
    data: XOR<OrderItemUpdateWithoutPizzaInput, OrderItemUncheckedUpdateWithoutPizzaInput>
  }

  export type OrderItemUpdateWithoutPizzaInput = {
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput | $Types.Skip
    drink?: DrinkUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderItemUncheckedUpdateWithoutPizzaInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    drinkId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FlavorUpsertWithoutFirstPizzasInput = {
    update: XOR<FlavorUpdateWithoutFirstPizzasInput, FlavorUncheckedUpdateWithoutFirstPizzasInput>
    create: XOR<FlavorCreateWithoutFirstPizzasInput, FlavorUncheckedCreateWithoutFirstPizzasInput>
    where?: FlavorWhereInput | $Types.Skip
  }

  export type FlavorUpdateToOneWithWhereWithoutFirstPizzasInput = {
    where?: FlavorWhereInput | $Types.Skip
    data: XOR<FlavorUpdateWithoutFirstPizzasInput, FlavorUncheckedUpdateWithoutFirstPizzasInput>
  }

  export type FlavorUpdateWithoutFirstPizzasInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    secondPizzas?: OrderPizzaUpdateManyWithoutSecondFlavorNestedInput | $Types.Skip
  }

  export type FlavorUncheckedUpdateWithoutFirstPizzasInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    secondPizzas?: OrderPizzaUncheckedUpdateManyWithoutSecondFlavorNestedInput | $Types.Skip
  }

  export type FlavorUpsertWithoutSecondPizzasInput = {
    update: XOR<FlavorUpdateWithoutSecondPizzasInput, FlavorUncheckedUpdateWithoutSecondPizzasInput>
    create: XOR<FlavorCreateWithoutSecondPizzasInput, FlavorUncheckedCreateWithoutSecondPizzasInput>
    where?: FlavorWhereInput | $Types.Skip
  }

  export type FlavorUpdateToOneWithWhereWithoutSecondPizzasInput = {
    where?: FlavorWhereInput | $Types.Skip
    data: XOR<FlavorUpdateWithoutSecondPizzasInput, FlavorUncheckedUpdateWithoutSecondPizzasInput>
  }

  export type FlavorUpdateWithoutSecondPizzasInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    firstPizzas?: OrderPizzaUpdateManyWithoutFirstFlavorNestedInput | $Types.Skip
  }

  export type FlavorUncheckedUpdateWithoutSecondPizzasInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: StringFieldUpdateOperationsInput | string | $Types.Skip
    category?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    firstPizzas?: OrderPizzaUncheckedUpdateManyWithoutFirstFlavorNestedInput | $Types.Skip
  }

  export type CrustUpsertWithoutPizzasInput = {
    update: XOR<CrustUpdateWithoutPizzasInput, CrustUncheckedUpdateWithoutPizzasInput>
    create: XOR<CrustCreateWithoutPizzasInput, CrustUncheckedCreateWithoutPizzasInput>
    where?: CrustWhereInput | $Types.Skip
  }

  export type CrustUpdateToOneWithWhereWithoutPizzasInput = {
    where?: CrustWhereInput | $Types.Skip
    data: XOR<CrustUpdateWithoutPizzasInput, CrustUncheckedUpdateWithoutPizzasInput>
  }

  export type CrustUpdateWithoutPizzasInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CrustUncheckedUpdateWithoutPizzasInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderPizzaCreateWithoutFirstFlavorInput = {
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orderItem: OrderItemCreateNestedOneWithoutPizzaInput
    secondFlavor?: FlavorCreateNestedOneWithoutSecondPizzasInput | $Types.Skip
    crust: CrustCreateNestedOneWithoutPizzasInput
  }

  export type OrderPizzaUncheckedCreateWithoutFirstFlavorInput = {
    id?: number | $Types.Skip
    orderItemId: number
    secondFlavorId?: number | null | $Types.Skip
    crustId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderPizzaCreateOrConnectWithoutFirstFlavorInput = {
    where: OrderPizzaWhereUniqueInput
    create: XOR<OrderPizzaCreateWithoutFirstFlavorInput, OrderPizzaUncheckedCreateWithoutFirstFlavorInput>
  }

  export type OrderPizzaCreateManyFirstFlavorInputEnvelope = {
    data: OrderPizzaCreateManyFirstFlavorInput | OrderPizzaCreateManyFirstFlavorInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type OrderPizzaCreateWithoutSecondFlavorInput = {
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orderItem: OrderItemCreateNestedOneWithoutPizzaInput
    firstFlavor: FlavorCreateNestedOneWithoutFirstPizzasInput
    crust: CrustCreateNestedOneWithoutPizzasInput
  }

  export type OrderPizzaUncheckedCreateWithoutSecondFlavorInput = {
    id?: number | $Types.Skip
    orderItemId: number
    firstFlavorId: number
    crustId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderPizzaCreateOrConnectWithoutSecondFlavorInput = {
    where: OrderPizzaWhereUniqueInput
    create: XOR<OrderPizzaCreateWithoutSecondFlavorInput, OrderPizzaUncheckedCreateWithoutSecondFlavorInput>
  }

  export type OrderPizzaCreateManySecondFlavorInputEnvelope = {
    data: OrderPizzaCreateManySecondFlavorInput | OrderPizzaCreateManySecondFlavorInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type OrderPizzaUpsertWithWhereUniqueWithoutFirstFlavorInput = {
    where: OrderPizzaWhereUniqueInput
    update: XOR<OrderPizzaUpdateWithoutFirstFlavorInput, OrderPizzaUncheckedUpdateWithoutFirstFlavorInput>
    create: XOR<OrderPizzaCreateWithoutFirstFlavorInput, OrderPizzaUncheckedCreateWithoutFirstFlavorInput>
  }

  export type OrderPizzaUpdateWithWhereUniqueWithoutFirstFlavorInput = {
    where: OrderPizzaWhereUniqueInput
    data: XOR<OrderPizzaUpdateWithoutFirstFlavorInput, OrderPizzaUncheckedUpdateWithoutFirstFlavorInput>
  }

  export type OrderPizzaUpdateManyWithWhereWithoutFirstFlavorInput = {
    where: OrderPizzaScalarWhereInput
    data: XOR<OrderPizzaUpdateManyMutationInput, OrderPizzaUncheckedUpdateManyWithoutFirstFlavorInput>
  }

  export type OrderPizzaScalarWhereInput = {
    AND?: OrderPizzaScalarWhereInput | OrderPizzaScalarWhereInput[] | $Types.Skip
    OR?: OrderPizzaScalarWhereInput[] | $Types.Skip
    NOT?: OrderPizzaScalarWhereInput | OrderPizzaScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"OrderPizza"> | number | $Types.Skip
    orderItemId?: IntFilter<"OrderPizza"> | number | $Types.Skip
    firstFlavorId?: IntFilter<"OrderPizza"> | number | $Types.Skip
    secondFlavorId?: IntNullableFilter<"OrderPizza"> | number | null | $Types.Skip
    crustId?: IntFilter<"OrderPizza"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"OrderPizza"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"OrderPizza"> | Date | string | $Types.Skip
  }

  export type OrderPizzaUpsertWithWhereUniqueWithoutSecondFlavorInput = {
    where: OrderPizzaWhereUniqueInput
    update: XOR<OrderPizzaUpdateWithoutSecondFlavorInput, OrderPizzaUncheckedUpdateWithoutSecondFlavorInput>
    create: XOR<OrderPizzaCreateWithoutSecondFlavorInput, OrderPizzaUncheckedCreateWithoutSecondFlavorInput>
  }

  export type OrderPizzaUpdateWithWhereUniqueWithoutSecondFlavorInput = {
    where: OrderPizzaWhereUniqueInput
    data: XOR<OrderPizzaUpdateWithoutSecondFlavorInput, OrderPizzaUncheckedUpdateWithoutSecondFlavorInput>
  }

  export type OrderPizzaUpdateManyWithWhereWithoutSecondFlavorInput = {
    where: OrderPizzaScalarWhereInput
    data: XOR<OrderPizzaUpdateManyMutationInput, OrderPizzaUncheckedUpdateManyWithoutSecondFlavorInput>
  }

  export type OrderPizzaCreateWithoutCrustInput = {
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orderItem: OrderItemCreateNestedOneWithoutPizzaInput
    firstFlavor: FlavorCreateNestedOneWithoutFirstPizzasInput
    secondFlavor?: FlavorCreateNestedOneWithoutSecondPizzasInput | $Types.Skip
  }

  export type OrderPizzaUncheckedCreateWithoutCrustInput = {
    id?: number | $Types.Skip
    orderItemId: number
    firstFlavorId: number
    secondFlavorId?: number | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderPizzaCreateOrConnectWithoutCrustInput = {
    where: OrderPizzaWhereUniqueInput
    create: XOR<OrderPizzaCreateWithoutCrustInput, OrderPizzaUncheckedCreateWithoutCrustInput>
  }

  export type OrderPizzaCreateManyCrustInputEnvelope = {
    data: OrderPizzaCreateManyCrustInput | OrderPizzaCreateManyCrustInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type OrderPizzaUpsertWithWhereUniqueWithoutCrustInput = {
    where: OrderPizzaWhereUniqueInput
    update: XOR<OrderPizzaUpdateWithoutCrustInput, OrderPizzaUncheckedUpdateWithoutCrustInput>
    create: XOR<OrderPizzaCreateWithoutCrustInput, OrderPizzaUncheckedCreateWithoutCrustInput>
  }

  export type OrderPizzaUpdateWithWhereUniqueWithoutCrustInput = {
    where: OrderPizzaWhereUniqueInput
    data: XOR<OrderPizzaUpdateWithoutCrustInput, OrderPizzaUncheckedUpdateWithoutCrustInput>
  }

  export type OrderPizzaUpdateManyWithWhereWithoutCrustInput = {
    where: OrderPizzaScalarWhereInput
    data: XOR<OrderPizzaUpdateManyMutationInput, OrderPizzaUncheckedUpdateManyWithoutCrustInput>
  }

  export type OrderItemCreateWithoutDrinkInput = {
    itemType: string
    quantity?: number | $Types.Skip
    unitPrice?: Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    pizza?: OrderPizzaCreateNestedOneWithoutOrderItemInput | $Types.Skip
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateWithoutDrinkInput = {
    id?: number | $Types.Skip
    orderId: number
    itemType: string
    quantity?: number | $Types.Skip
    unitPrice?: Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    pizza?: OrderPizzaUncheckedCreateNestedOneWithoutOrderItemInput | $Types.Skip
  }

  export type OrderItemCreateOrConnectWithoutDrinkInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutDrinkInput, OrderItemUncheckedCreateWithoutDrinkInput>
  }

  export type OrderItemCreateManyDrinkInputEnvelope = {
    data: OrderItemCreateManyDrinkInput | OrderItemCreateManyDrinkInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type OrderItemUpsertWithWhereUniqueWithoutDrinkInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutDrinkInput, OrderItemUncheckedUpdateWithoutDrinkInput>
    create: XOR<OrderItemCreateWithoutDrinkInput, OrderItemUncheckedCreateWithoutDrinkInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutDrinkInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutDrinkInput, OrderItemUncheckedUpdateWithoutDrinkInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutDrinkInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutDrinkInput>
  }

  export type OrderCreateManyCustomerInput = {
    id?: number | $Types.Skip
    deliveryAddress: string
    status: string
    totalAmount?: Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod: string
    deliveryTax?: Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderUpdateWithoutCustomerInput = {
    deliveryAddress?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    items?: OrderItemUpdateManyWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    deliveryAddress?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    deliveryAddress?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: StringFieldUpdateOperationsInput | string | $Types.Skip
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    deliveryTax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type WorkingHourCreateManyPizzeriaInput = {
    id?: number | $Types.Skip
    dayOfWeek: number
    openingTime: string
    closingTime: string
    isActive?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type WorkingHourUpdateWithoutPizzeriaInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number | $Types.Skip
    openingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    closingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type WorkingHourUncheckedUpdateWithoutPizzeriaInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    dayOfWeek?: IntFieldUpdateOperationsInput | number | $Types.Skip
    openingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    closingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type WorkingHourUncheckedUpdateManyWithoutPizzeriaInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    dayOfWeek?: IntFieldUpdateOperationsInput | number | $Types.Skip
    openingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    closingTime?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number | $Types.Skip
    drinkId?: number | null | $Types.Skip
    itemType: string
    quantity?: number | $Types.Skip
    unitPrice?: Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderItemUpdateWithoutOrderInput = {
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    pizza?: OrderPizzaUpdateOneWithoutOrderItemNestedInput | $Types.Skip
    drink?: DrinkUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    drinkId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    pizza?: OrderPizzaUncheckedUpdateOneWithoutOrderItemNestedInput | $Types.Skip
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    drinkId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderPizzaCreateManyFirstFlavorInput = {
    id?: number | $Types.Skip
    orderItemId: number
    secondFlavorId?: number | null | $Types.Skip
    crustId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderPizzaCreateManySecondFlavorInput = {
    id?: number | $Types.Skip
    orderItemId: number
    firstFlavorId: number
    crustId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderPizzaUpdateWithoutFirstFlavorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orderItem?: OrderItemUpdateOneRequiredWithoutPizzaNestedInput | $Types.Skip
    secondFlavor?: FlavorUpdateOneWithoutSecondPizzasNestedInput | $Types.Skip
    crust?: CrustUpdateOneRequiredWithoutPizzasNestedInput | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateWithoutFirstFlavorInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderItemId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    secondFlavorId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    crustId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateManyWithoutFirstFlavorInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderItemId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    secondFlavorId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    crustId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderPizzaUpdateWithoutSecondFlavorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orderItem?: OrderItemUpdateOneRequiredWithoutPizzaNestedInput | $Types.Skip
    firstFlavor?: FlavorUpdateOneRequiredWithoutFirstPizzasNestedInput | $Types.Skip
    crust?: CrustUpdateOneRequiredWithoutPizzasNestedInput | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateWithoutSecondFlavorInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderItemId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstFlavorId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    crustId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateManyWithoutSecondFlavorInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderItemId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstFlavorId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    crustId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderPizzaCreateManyCrustInput = {
    id?: number | $Types.Skip
    orderItemId: number
    firstFlavorId: number
    secondFlavorId?: number | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderPizzaUpdateWithoutCrustInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orderItem?: OrderItemUpdateOneRequiredWithoutPizzaNestedInput | $Types.Skip
    firstFlavor?: FlavorUpdateOneRequiredWithoutFirstPizzasNestedInput | $Types.Skip
    secondFlavor?: FlavorUpdateOneWithoutSecondPizzasNestedInput | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateWithoutCrustInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderItemId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstFlavorId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    secondFlavorId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderPizzaUncheckedUpdateManyWithoutCrustInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderItemId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstFlavorId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    secondFlavorId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderItemCreateManyDrinkInput = {
    id?: number | $Types.Skip
    orderId: number
    itemType: string
    quantity?: number | $Types.Skip
    unitPrice?: Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type OrderItemUpdateWithoutDrinkInput = {
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    pizza?: OrderPizzaUpdateOneWithoutOrderItemNestedInput | $Types.Skip
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput | $Types.Skip
  }

  export type OrderItemUncheckedUpdateWithoutDrinkInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    pizza?: OrderPizzaUncheckedUpdateOneWithoutOrderItemNestedInput | $Types.Skip
  }

  export type OrderItemUncheckedUpdateManyWithoutDrinkInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    itemType?: StringFieldUpdateOperationsInput | string | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    notes?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}