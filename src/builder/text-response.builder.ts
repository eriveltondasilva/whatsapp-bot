import { MessageType } from '@/config/enums.js'
import type { Response } from '@/types/index.js'

export class TextResponseBuilder {
  private parts: string[] = []

  private addPart(text: string): TextResponseBuilder {
    this.parts.push(text)
    return this
  }

  // ###
  addTitle(title: string): TextResponseBuilder {
    return this.addPart(`*${title.toUpperCase()}*`)
  }

  addText(text: string): TextResponseBuilder {
    return this.addPart(text)
  }

  addLineBreak(): TextResponseBuilder {
    return this.addPart('\n')
  }

  addMenu(menu: string[]): TextResponseBuilder {
    return this.addPart(menu.join('\n'))
  }

  addBulletPoint(text: string): TextResponseBuilder {
    return this.addPart(`• ${text}`)
  }

  // ###
  build(): Response {
    return {
      type: MessageType.TEXT,
      content: this.parts,
    }
  }
}
