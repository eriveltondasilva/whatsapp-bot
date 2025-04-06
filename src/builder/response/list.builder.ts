import { MessageType } from '@/config/enums.js'
import { BaseResponseBuilder } from './base.builder.js'

import type { ResponseList } from '@/types/responses.js'
import type { ListBuilderState } from './type.js'

export class ListResponseBuilder extends BaseResponseBuilder {
  protected override state: ListBuilderState

  constructor() {
    super()
    this.state = this.createInitialState()
  }

  public addList(items: ResponseList[]): this {
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
    }
    this.reset()

    return response
  }

  //#
  protected override createInitialState() {
    return { text: [], list: [] }
  }
}
