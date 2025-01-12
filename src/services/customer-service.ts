import type { Customer } from '../types/index.js'
// import  from '../database/customers.json';

export class CustomerService {
  private customers: Map<string, Customer> = new Map()

  getCustomer(phoneNumber: string) {
    return this.customers.get(phoneNumber) || null
  }

  createCustomer(data: Omit<Customer, 'id' | 'createdAt'>) {
    const newCustomer = {
      ...data,
      id: this.customers.size + 1,
      createdAt: new Date().toISOString(),
    }
    this.customers.set(newCustomer.phone, newCustomer)

    return newCustomer
  }

  updateCustomer(
    phoneNumber: string,
    data: Partial<Omit<Customer, 'createdAt' | 'id'>>,
  ) {
    const customer = this.getCustomer(phoneNumber)
    if (!customer) return null

    const updatedCustomer = { ...customer, ...data }
    this.customers.set(phoneNumber, updatedCustomer)

    return updatedCustomer
  }
}
