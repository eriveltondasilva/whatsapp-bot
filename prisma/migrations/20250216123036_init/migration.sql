-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('pending', 'preparing', 'delivering', 'completed', 'cancelled');

-- CreateEnum
CREATE TYPE "FlavorCategory" AS ENUM ('sweet', 'savory');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('cash', 'credit', 'debit');

-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('pizza', 'drink');

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "address" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flavors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "category" "FlavorCategory" NOT NULL DEFAULT 'savory',
    "ingredients" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "flavors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crusts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "crusts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drinks" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "drinks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "delivery_address" TEXT NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'pending',
    "total_amount" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "payment_method" "PaymentMethod" NOT NULL DEFAULT 'cash',
    "notes" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "customer_id" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" SERIAL NOT NULL,
    "itemType" "ItemType" NOT NULL,
    "quantity" SMALLINT NOT NULL DEFAULT 1,
    "unit_price" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "subtotal" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "notes" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order_id" INTEGER NOT NULL,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_pizzas" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order_item_id" INTEGER NOT NULL,
    "first_flavor_id" INTEGER NOT NULL,
    "second_flavor_id" INTEGER,
    "crust_id" INTEGER NOT NULL,

    CONSTRAINT "order_pizzas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_drinks" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order_item_id" INTEGER NOT NULL,
    "drink_id" INTEGER NOT NULL,

    CONSTRAINT "order_drinks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "working_hours" (
    "id" SERIAL NOT NULL,
    "day_of_week" SMALLINT NOT NULL,
    "opening_time" VARCHAR(8) NOT NULL,
    "closing_time" VARCHAR(8) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "working_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pizzerias" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "cnpj" VARCHAR(20) NOT NULL,
    "address" TEXT NOT NULL,
    "phone" VARCHAR(20),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "delivery_tax" DECIMAL(10,2) DEFAULT 0.00,
    "min_order_value" DECIMAL(10,2) DEFAULT 0.00,
    "website" VARCHAR(100),
    "instagram" VARCHAR(100),
    "facebook" VARCHAR(100),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "pizzerias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_phone_key" ON "customers"("phone");

-- CreateIndex
CREATE INDEX "customers_phone_idx" ON "customers"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "flavors_name_key" ON "flavors"("name");

-- CreateIndex
CREATE INDEX "flavors_name_idx" ON "flavors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "crusts_name_key" ON "crusts"("name");

-- CreateIndex
CREATE INDEX "crusts_name_idx" ON "crusts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "drinks_name_key" ON "drinks"("name");

-- CreateIndex
CREATE INDEX "drinks_name_idx" ON "drinks"("name");

-- CreateIndex
CREATE INDEX "orders_customer_id_idx" ON "orders"("customer_id");

-- CreateIndex
CREATE INDEX "orders_status_idx" ON "orders"("status");

-- CreateIndex
CREATE INDEX "orders_created_at_idx" ON "orders"("created_at");

-- CreateIndex
CREATE INDEX "order_items_order_id_idx" ON "order_items"("order_id");

-- CreateIndex
CREATE INDEX "order_items_itemType_idx" ON "order_items"("itemType");

-- CreateIndex
CREATE UNIQUE INDEX "order_pizzas_order_item_id_key" ON "order_pizzas"("order_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "order_drinks_order_item_id_key" ON "order_drinks"("order_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "working_hours_day_of_week_active_key" ON "working_hours"("day_of_week", "active");

-- CreateIndex
CREATE UNIQUE INDEX "pizzerias_cnpj_key" ON "pizzerias"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "pizzerias_phone_key" ON "pizzerias"("phone");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_pizzas" ADD CONSTRAINT "order_pizzas_order_item_id_fkey" FOREIGN KEY ("order_item_id") REFERENCES "order_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_pizzas" ADD CONSTRAINT "order_pizzas_first_flavor_id_fkey" FOREIGN KEY ("first_flavor_id") REFERENCES "flavors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_pizzas" ADD CONSTRAINT "order_pizzas_second_flavor_id_fkey" FOREIGN KEY ("second_flavor_id") REFERENCES "flavors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_pizzas" ADD CONSTRAINT "order_pizzas_crust_id_fkey" FOREIGN KEY ("crust_id") REFERENCES "crusts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_drinks" ADD CONSTRAINT "order_drinks_order_item_id_fkey" FOREIGN KEY ("order_item_id") REFERENCES "order_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_drinks" ADD CONSTRAINT "order_drinks_drink_id_fkey" FOREIGN KEY ("drink_id") REFERENCES "drinks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
