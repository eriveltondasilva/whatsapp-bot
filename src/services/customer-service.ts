import { singleton } from 'tsyringe'

import type { Customer } from '@/types.js'

@singleton()
export class CustomerService {
  private customers: Map<string, Customer> = new Map()

  constructor() {
    this.createCustomer({
      phone: '558298350441@c.us',
      name: 'Ingrid Alves',
      address: '123 Main St, Springfield',
    })
  }

  public getCustomer(phoneNumber: string): Customer | null {
    return this.customers.get(phoneNumber) || null
  }

  public createCustomer(data: Omit<Customer, 'id' | 'createdAt'>): Customer {
    const newCustomer: Customer = {
      ...data,
      id: this.customers.size + 1,
      createdAt: new Date().toISOString(),
    }

    this.customers.set(newCustomer.phone, newCustomer)

    return newCustomer
  }

  public updateCustomer(
    phoneNumber: string,
    data: Partial<Omit<Customer, 'id' | 'createdAt'>>,
  ): Customer | null {
    const customer = this.getCustomer(phoneNumber)
    if (!customer) return null

    const updatedCustomer = { ...customer, ...data }
    this.customers.set(phoneNumber, updatedCustomer)

    return updatedCustomer
  }

  public deleteCustomer(phoneNumber: string): boolean {
    return this.customers.delete(phoneNumber)
  }
}
