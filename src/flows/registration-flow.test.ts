import { FlowStep } from '@/config/enums.js'
import type { FlowStateManager } from '@/managers/flow-state-manager.js'
import { RegistrationMessages } from '@/messages/registration.js'
import type { CustomerService } from '@/services/customer-service.js'
import { RegistrationFlow } from './registration-flow.js'

const PHONE_NUMBER = '123456789'
const CUSTOMER_NAME = 'João da Silva'
const CUSTOMER_ADDRESS = 'Rua das Flores, n° 123, centro'

const mockFlowState = {
  setState: vi.fn(),
  getState: vi.fn(() => ({
    data: { name: CUSTOMER_NAME, address: CUSTOMER_ADDRESS },
  })),
}

const mockCustomerService = {
  createCustomer: vi.fn(),
}

const registrationFlow = new RegistrationFlow(
  mockFlowState as unknown as FlowStateManager,
  mockCustomerService as unknown as CustomerService,
)

describe('RegistrationFlow:', () => {
  // !!!
  it('should handle unknown step gracefully', () => {
    const response = registrationFlow.handle(PHONE_NUMBER, '', {
      step: 'UNKNOWN_STEP' as FlowStep,
      data: {},
    })

    expect(response).toEqual(RegistrationMessages.GENERIC_ERROR)
  })
  it('should handle invalid name input', () => {
    const response = registrationFlow.handle(PHONE_NUMBER, '', {
      step: FlowStep.COLLECT_NAME,
      data: {},
    })

    expect(response).toEqual(RegistrationMessages.INVALID_NAME)
    expect(mockFlowState.setState).not.toHaveBeenCalled()
  })
  it('should handle invalid address input', () => {
    const response = registrationFlow.handle(PHONE_NUMBER, '', {
      step: FlowStep.COLLECT_ADDRESS,
      data: {},
    })

    expect(response).toEqual(RegistrationMessages.INVALID_ADDRESS)
    expect(mockFlowState.setState).not.toHaveBeenCalled()
  })
  // ###
  it('should initiate registration', () => {
    const result = registrationFlow.handle(PHONE_NUMBER, '', {
      step: FlowStep.INITIAL,
      data: {},
    })

    expect(result).toEqual(RegistrationMessages.INITIAL)
    expect(mockFlowState.setState).toHaveBeenCalledWith(
      PHONE_NUMBER,
      FlowStep.COLLECT_NAME,
    )
  })
  it('should handle valid name input and proceed to address step', () => {
    const response = registrationFlow.handle(PHONE_NUMBER, CUSTOMER_NAME, {
      step: FlowStep.COLLECT_NAME,
      data: {},
    })

    expect(response).toEqual([
      expect.stringMatching(/^.*João.*$/),
      ...RegistrationMessages.COLLECT_ADDRESS,
    ])
    expect(mockFlowState.setState).toHaveBeenCalledWith(
      PHONE_NUMBER,
      FlowStep.COLLECT_ADDRESS,
      { name: CUSTOMER_NAME },
    )
  })
  it('should handle valid address input and finalize registration', () => {
    const response = registrationFlow.handle(PHONE_NUMBER, CUSTOMER_ADDRESS, {
      step: FlowStep.COLLECT_ADDRESS,
      data: {},
    })

    expect(response).toEqual(RegistrationMessages.FINALIZE(CUSTOMER_NAME))

    expect(mockFlowState.setState).toHaveBeenCalledWith(
      PHONE_NUMBER,
      FlowStep.MENU,
    )

    expect(mockCustomerService.createCustomer).toHaveBeenCalledWith({
      phone: PHONE_NUMBER,
      name: CUSTOMER_NAME,
      address: CUSTOMER_ADDRESS,
    })
  })
})
