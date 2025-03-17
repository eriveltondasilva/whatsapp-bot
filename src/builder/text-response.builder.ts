import { MessageType } from '@/config/enums.js'
import type { ResponseBuilder } from './response-builder.js'

export class TextResponseBuilder implements ResponseBuilder {
  private parts: string[] = []

  constructor() {
    this.reset()
  }

  private addPart(text: string): this {
    this.parts.push(text)
    return this
  }

  private reset(): this {
    this.parts = []
    return this
  }

  // ###
  addTitle(title: string): this {
    return this.addPart(`*${title.toUpperCase()}*`)
  }

  addText(...text: string[]): this {
    return this.addPart(text.join(' '))
  }

  addLineBreak(): this {
    return this.addPart('\n')
  }

  addMenu(menu: string[]): this {
    return this.addPart(menu.join('\n'))
  }

  addBulletPoint(text: string): this {
    return this.addPart(`• ${text}`)
  }

  // ###
  build() {
    const content = this.parts
    this.reset()

    return { type: MessageType.TEXT, content }
  }
}
