// import { injectable } from 'tsyringe';

// import { MenuOption } from '@/config/enums.js';
// import { mainMenu, orderMenu } from '@/templates/@index.js';
// import { OrderState } from './order.state.js';
// import { ExitState } from './exit.state.js';
// import { TextResponseBuilder } from '@/builder/@index.js';

// import type { IState } from './state.interface.js';

// @injectable()
// export class MenuState implements IState {
//   private readonly inProgressMessage = [
//     '🚧 Esta funcionalidade está em desenvolvimento.',
//     'Por favor, aguarde novidades!',
//   ].join('\n');

//   constructor(
//     @inject(TextResponseBuilder) private responseBuilder: TextResponseBuilder,
//     @inject(StateManager) private stateManager: StateManager,
//     @inject(CustomerRepository) private customerRepository: CustomerRepository,
//     @inject(LoggerProvider) private logger: LoggerProvider,
//   ) {}

//   async handle(phone: string, message: string) {
//     this.logger.debug('📌 Menu State');

//     // switch (message) {
//     //   case MenuOption.ORDER:
//     //     return this.responseBuilder.addMenu(orderMenu).build();
//     //   case MenuOption.EXIT:
//     //     return this.responseBuilder
//     //       .addText('✨ Obrigado por utilizar nossos serviços!')
//     //       .addText('Se precisar de algo, estamos aqui para ajudar.')
//     //       .addLineBreak()
//     //       .addText('👋 Até a próxima!')
//     //       .build();
//     //   default:
//     //     return this.responseBuilder
//     //       .addTitle('❌ OPÇÃO INVÁLIDA')
//     //       .addLineBreak()
//     //       .addMenu(mainMenu)
//     //       .build();
//     }
//   }

//   async next(phone: string, message: string) {
//     // switch (message) {
//     //   case MenuOption.ORDER:
//     //     return new OrderState(this.logger, this.responseBuilder, this.stateManager);
//     //   case MenuOption.EXIT:
//     //     return new ExitState(this.logger, this.responseBuilder, this.stateManager);
//     //   default:
//     //     return this;
//     // }
//   }
// }
