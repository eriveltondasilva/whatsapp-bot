import { MessageType } from '@/config/enums.js'
import { BaseResponseBuilder, type BuilderState } from './base.builder.js'

type ListBuilderState = BuilderState & {
  list: string[]
}

export class ListResponseBuilder extends BaseResponseBuilder {
  protected state: ListBuilderState

  constructor() {
    super()
    this.state = this.createInitialState()
  }

  public addList(items: string[]): this {
    if (items.length) {
      this.state.list.push(items.join('\n'))
    }
    return this
  }

  //#
  public build() {
    if (!this.state.list.length) throw new Error('List is empty')

    const response = {
      type: MessageType.LIST,
      content: [this.state.text.join('\n'), ...this.state.list],
    }
    this.reset()

    return response
  }

  //#
  protected createInitialState(): ListBuilderState {
    return { text: [], list: [] }
  }
}
