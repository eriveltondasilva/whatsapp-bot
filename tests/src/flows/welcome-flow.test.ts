// import { describe, vi, beforeEach, afterEach, it, expect } from 'vitest'

// import { FlowStep } from '../../../src/config/enums.js'
// import { WelcomeMessage } from '../../../src/messages/welcome.js'
// import { WelcomeFlow } from '../../../src/flows/welcome-flow.js'

// import type { FlowStateManager } from '../../../src/managers/index.js'
// import type { CustomerService, LoggerService } from '../../../src/services/index.js'
// import type { RegistrationFlow } from '../../../src/flows/index.js'

// describe('WelcomeFlow', () => {
//   const customer = {
//     name: 'John Doe',
//     address: '123 Main St',
//     phone: '123456789',
//   }
//   const message = 'Hello'

//   let mockFlowStateManager: Partial<FlowStateManager>
//   let mockCustomerService: Partial<CustomerService>
//   let mockRegistrationFlow: Partial<RegistrationFlow>
//   let mockLogger: Partial<LoggerService>
//   let welcomeFlow: WelcomeFlow

//   beforeEach(() => {
//     mockFlowStateManager = {
//       updateState: vi.fn(),
//     }

//     mockCustomerService = {
//       getCustomer: vi.fn(() => ({
//         id: 1,
//         name: customer.name,
//         address: customer.address,
//         phone: customer.phone,
//         createdAt: new Date().toISOString(),
//       })),
//     }

//     mockRegistrationFlow = {
//       handle: vi.fn(),
//     }

//     mockLogger = {
//       debug: vi.fn(),
//     }

//     welcomeFlow = new WelcomeFlow(
//       mockFlowStateManager as FlowStateManager,
//       mockCustomerService as CustomerService,
//       mockRegistrationFlow as RegistrationFlow,
//       mockLogger as LoggerService,
//     )
//   })
//   afterEach(() => {
//     vi.clearAllMocks()
//   })
//   // !!!
//   it('should initiate registration if customer is not found', () => {
//     mockCustomerService.getCustomer = vi.fn(() => null)

//     const result = welcomeFlow.handle(customer.phone, '')

//     expect(mockCustomerService.getCustomer).toHaveBeenCalledWith(customer.phone)
//     expect(mockCustomerService.getCustomer).toHaveReturnedWith(null)
//     expect(mockFlowStateManager.updateState).toHaveBeenCalledWith(customer.phone, {
//       step: FlowStep.REGISTRATION,
//     })
//     expect(mockFlowStateManager.updateState).toReturnTimes(1)
//     expect(mockRegistrationFlow.handle).toHaveBeenCalledWith(customer.phone, '')
//     expect(result).toBeUndefined()
//   })
//   // ###
//   it('should display welcome message if customer is found', () => {
//     const result = welcomeFlow.handle(customer.phone, message)

//     expect(mockCustomerService.getCustomer).toHaveBeenCalledWith(customer.phone)
//     expect(mockFlowStateManager.updateState).toHaveBeenCalledWith(customer.phone, {
//       step: FlowStep.MAIN_MENU,
//     })
//     expect(mockFlowStateManager.updateState).toReturnTimes(1)
//     expect(mockRegistrationFlow.handle).not.toHaveBeenCalled()
//     expect(result).toEqual(WelcomeMessage(customer.name.split(' ')[0]))
//   })
// })
