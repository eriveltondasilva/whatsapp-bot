import { MessageType } from '@/config/enums.js'
import { BaseResponseBuilder, type BuilderState } from './base.builder.js'

import type { ListResponse } from '@/types/index.js'

export type ListBuilderState = BuilderState & {
  list: ListResponse[]
}

export class ListResponseBuilder extends BaseResponseBuilder {
  protected override state: ListBuilderState

  constructor() {
    super()
    this.state = this.createInitialState()
  }

  public addList(items: ListResponse[]): this {
    if (items.length) {
      this.state.list = [...items]
    }
    return this
  }

  //#
  public build() {
    if (!this.state.list.length) throw new Error('List is empty')

    const response = {
      type: MessageType.LIST,
      content: { text: this.state.text.join('\n'), list: [...this.state.list] },
      // content: [this.state.text.join('\n'), ...this.state.list],
    }
    this.reset()

    return response
  }

  //#
  protected override createInitialState() {
    return { text: [], list: [] }
  }
}
