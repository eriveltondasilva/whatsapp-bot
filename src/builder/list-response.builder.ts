import { MessageType } from '@/config/enums.js'
import type { ResponseBuilder } from './response-builder.js'

type Section = {
  title: string
  description: string
  items: string[]
}

export class ListResponseBuilder implements ResponseBuilder {
  private section: Section = {
    title: '',
    description: '',
    items: [],
  }

  // ###
  addTitle(text: string): this {
    this.section.title = `*${text.toUpperCase()}*\n`
    return this
  }

  addDescription(text: string): this {
    this.section.description = text
    return this
  }

  addList(list: string[]): this {
    this.section.items = [...list]
    return this
  }

  // ###
  build() {
    if (this.section.items.length === 0) {
      throw new Error('You must add list items before building the response.')
    }

    const { title, description, items } = this.section
    return {
      type: MessageType.LIST,
      content: [title, description, ...items],
    }
  }
}
