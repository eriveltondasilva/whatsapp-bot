import { MessageType } from '@/config/enums.js'
import { BaseResponseBuilder, type BuilderState } from './base-response.builder.js'

import type { ResponseList } from '@/types/responses.js'

export type ListBuilderState = BuilderState & {
  list: ResponseList[]
}

export class ListResponseBuilder extends BaseResponseBuilder<ListBuilderState> {
  constructor() {
    super()
    this.state = this.createInitialState()
  }

  public addList(items: ResponseList[]): this {
    if (items.length > 0) {
      this.state.list = [...items]
    }
    return this
  }

  //#
  public build() {
    if (!this.state.list.length) {
      throw new Error(
        'Lista vazia: Adicione pelo menos um item à lista antes de construir a resposta',
      )
    }

    const response = {
      type: MessageType.LIST,
      content: {
        text: this.state.text.join('\n'),
        list: [...this.state.list],
      },
    }
    this.reset()

    return response
  }

  //#
  protected override createInitialState() {
    return { text: [], list: [] }
  }
}
