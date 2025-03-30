import { MessageType } from '@/config/enums.js'
import type { Response } from '@/types/index.js'

type Section = {
  title: string
  description: string
  items: string[]
}

export class ListResponseBuilder {
  private section: Section = {
    title: '',
    description: '',
    items: [],
  }

  constructor() {
    this.reset()
  }

  //#
  public addTitle(title: string): this {
    this.section.title = `*${title.toUpperCase()}*\n`
    return this
  }

  public addText(text: string): this {
    this.section.description += `${text}\n`
    return this
  }

  public addList(list: string[]): this {
    this.section.items = [...list]
    return this
  }

  public build(): Response {
    if (!this.section.items.length) {
      throw new Error('Você deve adicionar itens à lista antes de construir a resposta.')
    }

    const { title, description, items } = this.section
    const response = { type: MessageType.LIST, content: [title, description, ...items] }

    this.reset()
    return response
  }

  //#
  private reset() {
    this.section = {
      title: '',
      description: '',
      items: [],
    }
  }
}
