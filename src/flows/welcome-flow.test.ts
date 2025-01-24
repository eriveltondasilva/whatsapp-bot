import { FlowStep } from '@/config/enums.js'
import { WelcomeMessage } from '@/messages/welcome.js'
import type { RegistrationFlow } from './registration-flow.js'
import { WelcomeFlow } from './welcome-flow.js'

import type { FlowStateManager } from '@/managers/index.js'
import type { CustomerService, LoggerService } from '@/services/index.js'

describe('WelcomeFlow', () => {
  const CUSTOMER_NAME = 'John Doe'
  const CUSTOMER_ADDRESS = '123 Main St'
  const PHONE_NUMBER = '123456789'
  const MESSAGE = 'Hello'

  let mockFlowStateManager: Partial<FlowStateManager>
  let mockCustomerService: Partial<CustomerService>
  let mockRegistrationFlow: Partial<RegistrationFlow>
  let mockLogger: Partial<LoggerService>
  let welcomeFlow: WelcomeFlow

  beforeEach(() => {
    mockFlowStateManager = {
      updateState: vi.fn(),
    }

    mockCustomerService = {
      getCustomer: vi.fn(() => ({
        id: 1,
        name: CUSTOMER_NAME,
        address: CUSTOMER_ADDRESS,
        phone: PHONE_NUMBER,
        createdAt: new Date().toISOString(),
      })),
    }

    mockRegistrationFlow = {
      handle: vi.fn(),
    }

    mockLogger = {
      debug: vi.fn(),
    }

    welcomeFlow = new WelcomeFlow(
      mockFlowStateManager as FlowStateManager,
      mockCustomerService as CustomerService,
      mockRegistrationFlow as RegistrationFlow,
      mockLogger as LoggerService,
    )
  })
  afterEach(() => {
    vi.clearAllMocks()
  })
  // !!!
  it('should initiate registration if customer is not found', () => {
    mockCustomerService.getCustomer = vi.fn(() => null)

    const state = { step: FlowStep.INITIAL, data: {} }
    const result = welcomeFlow.handle(PHONE_NUMBER, MESSAGE, state)

    expect(mockCustomerService.getCustomer).toHaveBeenCalledWith(PHONE_NUMBER)
    expect(mockFlowStateManager.updateState).toHaveBeenCalledWith(
      PHONE_NUMBER,
      FlowStep.INITIAL,
    )
    expect(mockRegistrationFlow.handle).toHaveBeenCalledWith(
      PHONE_NUMBER,
      MESSAGE,
      state,
    )
    expect(result).toBeUndefined()
  })
  // ###
  it('should display welcome message if customer is found', () => {
    const result = welcomeFlow.handle(PHONE_NUMBER, MESSAGE, {
      step: FlowStep.INITIAL,
      data: {},
    })

    expect(mockCustomerService.getCustomer).toHaveBeenCalledWith(PHONE_NUMBER)
    expect(mockFlowStateManager.updateState).toHaveBeenCalledWith(
      PHONE_NUMBER,
      FlowStep.MAIN_MENU,
    )
    expect(mockRegistrationFlow.handle).not.toHaveBeenCalled()
    expect(result).toEqual(WelcomeMessage(CUSTOMER_NAME))
  })
})
