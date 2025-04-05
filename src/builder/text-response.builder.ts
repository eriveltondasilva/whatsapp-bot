import { MessageType } from '@/config/enums.js'

export class TextResponseBuilder {
  private parts: string[] = []

  constructor() {
    this.reset()
  }

  //#
  public addText(...text: string[]): this {
    return text.length ? this.addPart(text.join(' ')) : this
  }

  public addBold(text: string): this {
    return text ? this.addPart(`*${text}*`) : this
  }

  public addItalic(text: string): this {
    return text ? this.addPart(`_${text}_`) : this
  }

  public addStrike(text: string): this {
    return text ? this.addPart(`~${text}~`) : this
  }

  public addQuote(text: string): this {
    return text ? this.addPart(`> ${text}`) : this
  }

  public addMono(): this {
    return this.addPart('```')
  }

  //
  public addLine(): this {
    return this.addPart('--------------------')
  }

  public addEmptyLine(): this {
    return this.addPart('')
  }

  //
  public addMenu(menu: string[]): this {
    return menu.length ? this.addPart(menu.join('\n')) : this
  }

  public addGreeting(name: string): this {
    if (!name) return this
    const firstName = name.split(' ')[0]

    return this.addPart(`👋 Olá, ${firstName}!`)
  }

  //
  public build() {
    const response = { type: MessageType.TEXT, content: [...this.parts.join('\n')] }
    this.reset()

    return response
  }

  //#
  private addPart(part: string): this {
    this.parts.push(part)
    return this
  }

  private reset(): this {
    this.parts = []
    return this
  }
}
