import { MessageType } from '@/config/enums.js'
import type { Response } from '@/types/index.js'
import { getFirstName } from '@/utils/@index.js'

interface ITextResponseBuilder {
  addTitle(title: string): this
  addText(...text: string[]): this
  addEmptyLine(): this
  addMenu(menu: string[]): this
  addBulletPoint(text: string): this
  addGreeting(name: string): this
  build(): Response
}

export class TextResponseBuilder implements ITextResponseBuilder {
  private parts: string[] = []

  constructor() {
    this.reset()
  }

  // ###
  public addTitle(title: string): this {
    return this.addPart(`*${title.toUpperCase()}*`)
  }

  public addText(...text: string[]): this {
    return this.addPart(text.join(' '))
  }

  public addEmptyLine(): this {
    return this.addPart('\n')
  }

  public addMenu(menu: string[]): this {
    return this.addPart(menu.join('\n'))
  }

  public addBulletPoint(text: string): this {
    return this.addPart(`• ${text}`)
  }

  public addGreeting(name: string): this {
    this.addPart(`👋 Olá, ${getFirstName(name)}!`)
    return this
  }

  //
  public build() {
    const content = this.parts
    this.reset()

    return { type: MessageType.TEXT, content }
  }

  // ###
  private addPart(text: string): this {
    this.parts.push(text)
    return this
  }

  private reset(): this {
    this.parts = []
    return this
  }
}
