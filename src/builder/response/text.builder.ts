import { MessageType } from '@/config/enums.js'
import { BaseResponseBuilder } from './base.builder.js'

export class TextResponseBuilder extends BaseResponseBuilder {
  public addMono(): this {
    return this.setText('```')
  }

  public addLine(): this {
    return this.setText('--------------------')
  }

  public addMenu(menu: string[]): this {
    return menu.length ? this.setText(menu.join('\n')) : this
  }

  public addGreeting(name: string): this {
    if (!name) return this
    const firstName = name.split(' ')[0]

    return this.setText(`👋 Olá, ${firstName}!`)
  }

  //#
  public build() {
    const response = { type: MessageType.TEXT, content: [this.state.text.join('\n')] }
    this.reset()

    return response
  }
}
