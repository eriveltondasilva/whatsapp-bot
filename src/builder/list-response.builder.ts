import { MessageType } from '@/config/enums.js'
import type { Response } from '@/types/index.js'

type content = {
  text: string
  items: string[]
}

export class ListResponseBuilder {
  private text: string[] = []
  private list: string[] = []

  constructor() {
    this.reset()
  }

  //#
  public addBold(text: string): this {
    this.text.push(`*${text}*`)
    return this
  }

  public addText(...text: string[]): this {
    this.text.push(text.join(' '))
    return this
  }

  public addList(list: string[]): this {
    this.list.push(list.join('\n'))
    return this
  }

  public addEmptyLine(): this {
    this.text.push('')
    return this
  }

  //
  public build(): Response {
    if (!this.list.length) throw new Error('List is empty')

    const response = { type: MessageType.LIST, content: [this.text.join('\n'), ...this.list] }
    this.reset()

    return response
  }

  //#
  private reset(): void {
    this.text = []
    this.list = []
  }
}
