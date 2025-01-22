import { MainMenu } from './main-menu.js'

export const WelcomeMessage = (name: string) => [
  '🍕 Olá, [Nome do Cliente]! Que bom ter você de volta!',
  'Estamos ansiosos para preparar algo delicioso para você. 😋🍽\n',
  // 
  ...MainMenu,
]
