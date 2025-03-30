import { MessageType } from '@/config/enums.js'
import { getFirstName } from '@/utils/@index.js'

export class TextResponseBuilder {
  private parts: string[] = []

  constructor() {
    this.reset()
  }

  //#
  public addTitle(title: string): this {
    if (!title) return this
    return this.addPart(`*${title.toUpperCase()}*`)
  }

  public addText(...text: string[]): this {
    if (!text.length) return this
    return this.addPart(text.join(' '))
  }

  public addMenu(menu: string[]): this {
    if (!menu.length) return this
    return this.addPart(menu.join('\n'))
  }

  public addEmptyLine(): this {
    return this.addPart('')
  }

  // public addBulletPoint(text: string): this {
  //   return this.addPart(`• ${text}`)
  // }

  public addGreeting(name: string): this {
    return this.addPart(`👋 Olá, ${getFirstName(name)}!`)
  }

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
