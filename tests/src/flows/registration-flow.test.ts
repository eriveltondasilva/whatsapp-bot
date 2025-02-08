import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { FlowStep } from '../../../src/config/enums.js'
import { RegistrationMessages } from '../../../src/messages/index.js'
import { RegistrationFlow } from '../../../src/flows/index.js'

import type { FlowStateManager } from '../../../src/managers/index.js'
import type { CustomerService, LoggerService } from '../../../src/services/index.js'

describe('RegistrationFlow:', () => {
  const customer = {
    name: 'John Doe',
    address: '123 Main St',
    phone: '123456789',
  }

  let mockFlowStateManager: Partial<FlowStateManager>
  let mockCustomerService: Partial<CustomerService>
  let mockLogger: Partial<LoggerService>
  let registrationFlow: RegistrationFlow

  beforeEach(() => {
    mockFlowStateManager = {
      getState: vi.fn(() => ({
        step: FlowStep.REGISTRATION,
        data: { name: customer.name, address: customer.address },
      })),
      updateState: vi.fn(),
      clearState: vi.fn(),
    }

    mockCustomerService = {
      createCustomer: vi.fn(),
      deleteCustomer: vi.fn(),
    }

    mockLogger = {
      debug: vi.fn(),
    }

    registrationFlow = new RegistrationFlow(
      mockFlowStateManager as FlowStateManager,
      mockCustomerService as CustomerService,
      mockLogger as LoggerService,
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
  })
  // !!!
  it('should handle unknown step gracefully', () => {
    mockFlowStateManager.getState = vi.fn(() => ({
      step: 'unknown' as FlowStep,
    }))

    const response = registrationFlow.handle(customer.phone, '')

    expect(mockFlowStateManager.getState).toReturnWith({
      step: 'unknown',
    })
    expect(mockFlowStateManager.clearState).toHaveBeenCalledWith(customer.phone)
    expect(mockCustomerService.deleteCustomer).toHaveBeenCalledWith(customer.phone)
    expect(response).toEqual(RegistrationMessages.GENERIC_ERROR)
  })
  it('should handle invalid name input', () => {
    mockFlowStateManager.getState = vi.fn(() => ({
      step: FlowStep.COLLECT_NAME,
    }))

    const response = registrationFlow.handle(customer.phone, '')

    expect(mockFlowStateManager.updateState).not.toHaveBeenCalled()
    expect(response).toEqual(RegistrationMessages.INVALID_NAME)
  })
  it('should handle invalid address input', () => {
    mockFlowStateManager.getState = vi.fn(() => ({
      step: FlowStep.COLLECT_ADDRESS,
    }))

    const response = registrationFlow.handle(customer.phone, '')

    expect(mockFlowStateManager.updateState).not.toHaveBeenCalled()
    expect(response).toEqual(RegistrationMessages.INVALID_ADDRESS)
  })
  // ###
  it('should initiate registration', () => {
    const result = registrationFlow.handle(customer.phone, '')

    expect(mockFlowStateManager.updateState).toHaveBeenCalledWith(customer.phone, {
      step: FlowStep.COLLECT_NAME,
    })
    expect(result).toEqual(RegistrationMessages.INITIAL)
  })
  it('should handle valid name input and proceed to address step', () => {
    mockFlowStateManager.getState = vi.fn(() => ({
      step: FlowStep.COLLECT_NAME,
    }))

    const response = registrationFlow.handle(customer.phone, customer.name)

    expect(mockFlowStateManager.updateState).toHaveBeenCalledWith(customer.phone, {
      step: FlowStep.COLLECT_ADDRESS,
      data: { name: customer.name },
    })
    expect(response).toEqual([
      expect.stringMatching(/^.*John.*$/),
      ...RegistrationMessages.COLLECT_ADDRESS,
    ])
  })
  it('should handle valid address input and finalize registration', () => {
    mockFlowStateManager.getState = vi.fn(() => ({
      step: FlowStep.COLLECT_ADDRESS,
      data: { name: customer.name },
    }))

    const response = registrationFlow.handle(customer.phone, customer.address)

    const customerName = customer.name.split(' ')[0]

    expect(mockFlowStateManager.getState).toHaveBeenCalledWith(customer.phone)
    expect(mockCustomerService.createCustomer).toHaveBeenCalledWith({
      name: customer.name,
      phone: customer.phone,
      address: customer.address,
    })
    expect(mockFlowStateManager.clearState).toHaveBeenCalledWith(customer.phone)
    expect(mockFlowStateManager.updateState).toHaveBeenCalledWith(customer.phone, {
      step: FlowStep.MAIN_MENU,
    })
    expect(response).toEqual(RegistrationMessages.FINALIZE(customerName))
  })
})
