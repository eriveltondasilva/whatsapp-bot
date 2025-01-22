import { FlowStep } from '@/config/enums.js'
import type { FlowStateManager } from '@/managers/flow-state-manager.js'
import { WelcomeMessage } from '@/messages/welcome.js'
import type { CustomerService } from '@/services/customer-service.js'
import type { RegistrationFlow } from './registration-flow.js'
import { WelcomeFlow } from './welcome-flow.js'

describe('WelcomeFlow', () => {
  const CUSTOMER_NAME = 'John Doe'
  const CUSTOMER_ADDRESS = '123 Main St'
  const PHONE_NUMBER = '123456789'
  const MESSAGE = 'Hello'

  let flowStateManagerMock: Partial<FlowStateManager>
  let customerServiceMock: Partial<CustomerService>
  let registrationFlowMock: Partial<RegistrationFlow>
  let welcomeFlow: WelcomeFlow

  beforeEach(() => {
    flowStateManagerMock = {
      setState: vi.fn(),
    }

    customerServiceMock = {
      getCustomer: vi.fn(() => ({
        id: 1,
        name: CUSTOMER_NAME,
        address: CUSTOMER_ADDRESS,
        phone: PHONE_NUMBER,
        createdAt: new Date().toISOString(),
      })),
    }

    registrationFlowMock = {
      handle: vi.fn(),
    }

    welcomeFlow = new WelcomeFlow(
      flowStateManagerMock as FlowStateManager,
      customerServiceMock as CustomerService,
      registrationFlowMock as RegistrationFlow,
    )
  })
  afterEach(() => {
    vi.clearAllMocks()
  })
  // !!!
  it('should initiate registration if customer is not found', () => {
    customerServiceMock.getCustomer = vi.fn(() => null)

    const state = { step: FlowStep.INITIAL, data: {} }
    const result = welcomeFlow.handle(PHONE_NUMBER, MESSAGE, state)

    expect(customerServiceMock.getCustomer).toHaveBeenCalledWith(PHONE_NUMBER)
    expect(flowStateManagerMock.setState).toHaveBeenCalledWith(
      PHONE_NUMBER,
      FlowStep.INITIAL,
    )
    expect(registrationFlowMock.handle).toHaveBeenCalledWith(
      PHONE_NUMBER,
      '',
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

    expect(customerServiceMock.getCustomer).toHaveBeenCalledWith(PHONE_NUMBER)
    expect(flowStateManagerMock.setState).toHaveBeenCalledWith(
      PHONE_NUMBER,
      FlowStep.MAIN_MENU,
    )
    expect(registrationFlowMock.handle).not.toHaveBeenCalled()
    expect(result).toEqual(WelcomeMessage(CUSTOMER_NAME))
  })
})
