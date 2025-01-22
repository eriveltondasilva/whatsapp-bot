import { container } from 'tsyringe';

import { FlowStep } from '@/config/enums.js';
import { FlowStateManager } from '@/managers/flow-state-manager.js';
import { WelcomeMessage } from '@/messages/welcome.js';
import { CustomerService } from '@/services/customer-service.js';
import { RegistrationFlow } from './registration-flow.js';
import { WelcomeFlow } from './welcome-flow.js';

describe('WelcomeFlow', () => {
  let flowStateManagerMock: FlowStateManager;
  let customerServiceMock: CustomerService;
  let registrationFlowMock: RegistrationFlow;
  let welcomeFlow: WelcomeFlow;
  
  const PHONE_NUMBER = '123456789';
  const MESSAGE = 'Hello';

  beforeEach(() => {
    flowStateManagerMock = {
      setState: vi.fn(),
    } as unknown as FlowStateManager;

    customerServiceMock = {
      getCustomer: vi.fn(),
    } as unknown as CustomerService;

    registrationFlowMock = {
      handle: vi.fn(),
    } as unknown as RegistrationFlow;

    container.registerInstance(FlowStateManager, flowStateManagerMock);
    container.registerInstance(CustomerService, customerServiceMock);
    container.registerInstance(RegistrationFlow, registrationFlowMock);

    welcomeFlow = container.resolve(WelcomeFlow);
  });

  it('deve redirecionar para RegistrationFlow se o cliente não for encontrado', () => {
    const state = { step: FlowStep.INITIAL };

    vi.spyOn(customerServiceMock, 'getCustomer').mockReturnValue(null);
    vi.spyOn(registrationFlowMock, 'handle').mockReturnValue(['Registration Message']);

    const result = welcomeFlow.handle(PHONE_NUMBER, MESSAGE, state);

    expect(customerServiceMock.getCustomer).toHaveBeenCalledWith(PHONE_NUMBER);
    expect(flowStateManagerMock.setState).toHaveBeenCalledWith(PHONE_NUMBER, FlowStep.INITIAL);
    expect(registrationFlowMock.handle).toHaveBeenCalledWith(PHONE_NUMBER, '', state);
    expect(result).toEqual(['Registration Message']);
  });

  it('deve retornar mensagem de boas-vindas se o cliente for encontrado', () => {
    const state = { step: FlowStep.INITIAL };
    const customer = { name: 'John Doe' };

    vi.spyOn(customerServiceMock, 'getCustomer').mockReturnValue(customer);

    const result = welcomeFlow.handle(PHONE_NUMBER, MESSAGE, state);

    expect(customerServiceMock.getCustomer).toHaveBeenCalledWith(PHONE_NUMBER);
    expect(flowStateManagerMock.setState).toHaveBeenCalledWith(PHONE_NUMBER, FlowStep.MAIN_MENU);
    expect(result).toEqual(WelcomeMessage(customer.name));
  });
});
