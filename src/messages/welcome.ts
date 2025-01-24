import { MainMenu } from './main-menu.js'

export const WelcomeMessage = (name: string) => [
  `🍕 Olá, ${name}! Que bom ter você de volta!`,
  'Estamos ansiosos para preparar algo delicioso para você. 😋🍽\n',
  //
  ...MainMenu,
]
