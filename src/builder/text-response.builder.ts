import { MessageType } from '@/config/enums.js'

export class TextResponseBuilder {
  private parts: string[] = []

  constructor() {
    this.reset()
  }

  //#
  public addText(...text: string[]): this {
    if (!text.length) return this
    return this.addPart(text.join(' '))
  }

  public addBold(text: string): this {
    if (!text) return this
    return this.addPart(`*${text}*`)
  }

  public addItalic(text: string): this {
    if (!text) return this
    return this.addPart(`_${text}_`)
  }

  public addStrike(text: string): this {
    if (!text) return this
    return this.addPart(`~${text}~`)
  }

  public addQuote(text: string): this {
    if (!text) return this
    return this.addPart(`> ${text}`)
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
    if (!menu.length) return this
    return this.addPart(menu.join('\n'))
  }

  public addGreeting(name: string): this {
    if (!name) return this
    const [firstName] = name.split(' ')
    return this.addPart(`👋 Olá, ${firstName}!`)
  }

  //
  public build() {
    const content = [...this.parts]
    this.reset()
    return { type: MessageType.TEXT, content }
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
