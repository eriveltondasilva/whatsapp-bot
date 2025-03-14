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

  // ###
  addTitle(text: string): ListResponseBuilder {
    this.section.title = `*${text.toUpperCase()}*\n`
    return this
  }

  addDescription(text: string): ListResponseBuilder {
    this.section.description = text
    return this
  }

  addList(list: string[]): ListResponseBuilder {
    this.section.items = [...list]
    return this
  }

  // ###
  build(): Response {
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
