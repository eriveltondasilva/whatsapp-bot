import { MainMenu } from './main-menu.js'

export const RegistrationMessages = {
  COLLECT_ADDRESS: [
    'Agora me diga onde vamos entregar suas delícias?\n',
    //
    '✍🏻 *Qual o seu endereço completo?*',
    '> Exemplo: _"Rua das Flores, n° 83, Centro"_',
  ],
  //
  INVALID_NAME: [
    '❌ *NOME INVÁLIDO*\n',
    //
    'Por favor, informe seu nome completo:',
    '> Exemplo: _"João da Silva"_',
  ],
  INVALID_ADDRESS: [
    '❌ *ENDEREÇO INVÁLIDO*\n',
    //
    'Por favor, informe seu endereço completo:',
    '> Exemplo: _"Rua das Flores, n° 83, Centro"_',
  ],
  GENERIC_ERROR: ['Ops! Algo deu errado. Por favor, tente novamente.'],
  // TODO: remover
  INITIAL: [
    '🍕 Olá! Bem-vindo(a) à *Pizzaria [Nome da Pizzaria]*!\n',
    //
    'Estamos prontos para transformar a sua fome em felicidade. 😊',
    'Antes de começar, precisamos fazer um _rápido_ cadastro. 🏃🏻💨\n',
    //
    '✍🏻 *Qual o seu nome completo?*',
    '> Exemplo: _"João da Silva"_',
  ],
  INITIALIZE: (name: string) => [
    `🍕 Olá! Bem-vindo(a) à *Pizzaria ${name}*!\n`,
    //
    'Estamos prontos para transformar a sua fome em felicidade. 😊',
    'Antes de começar, precisamos fazer um _rápido_ cadastro. 🏃🏻💨\n',
    //
    '✍🏻 *Qual o seu nome completo?*',
    '> Exemplo: _"João da Silva"_',
  ],
  FINALIZE: (name: string) => [
    `🎉 Cadastro concluído com sucesso, ${name}!`,
    'Agora, vamos ao que interessa: _escolher algo gostoso_! 😋\n',
    //
    ...MainMenu,
  ],
}
