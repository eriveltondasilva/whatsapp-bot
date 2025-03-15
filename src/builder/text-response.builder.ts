import { MessageType } from '@/config/enums.js'
import type { ResponseBuilder } from './response-builder.js'

export class TextResponseBuilder implements ResponseBuilder {
  private parts: string[] = []

  private addPart(text: string): this {
    this.parts.push(text)
    return this
  }

  // ###
  addTitle(title: string): this {
    return this.addPart(`*${title.toUpperCase()}*`)
  }

  addText(text: string): this {
    return this.addPart(text)
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
    return {
      type: MessageType.TEXT,
      content: this.parts,
    }
  }
}
