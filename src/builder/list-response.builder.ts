import { MessageType } from '@/config/enums.js'
import type { Response } from '@/types/index.js'

type Section = {
  title: string
  description: string
  items: string[]
}

interface IListResponseBuilder {
  addTitle(text: string): this
  addDescription(text: string): this
  addList(list: string[]): this
  build(): Response
}

export class ListResponseBuilder implements IListResponseBuilder {
  private section: Partial<Section> = {}

  constructor() {
    this.reset()
  }

  // ###
  public addTitle(text: string): this {
    this.section.title = `*${text.toUpperCase()}*\n`
    return this
  }

  public addDescription(text: string): this {
    this.section.description = text
    return this
  }

  public addList(list: string[]): this {
    this.section.items = list
    return this
  }

  // 
  public build(): Response {
    if (this.section.items?.length === 0)
      throw new Error('You must add list items before building the response.')

    const { title = '', description = '', items = [] } = this.section
    this.reset()
    return {
      type: MessageType.LIST,
      content: [title, description, ...items],
    }
  }

  // ###
  private reset() {
    this.section = {
      title: '',
      description: '',
      items: [],
    }
  }
}
