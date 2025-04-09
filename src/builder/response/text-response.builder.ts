import { MessageType } from '@/config/enums.js'
import { BaseResponseBuilder } from './base.builder.js'

import type { FlowResponse } from '@/types/flows.js'

export class TextResponseBuilder extends BaseResponseBuilder {
  public addMono(): this {
    return this.setText('```')
  }

  public addLine(): this {
    return this.setText('--------------------')
  }

  public addMenu(menu: string[]): this {
    return menu.length ? this.setText(menu.join('\n')) : this
  }

  //#
  public build(): FlowResponse {
    const response = {
      type: MessageType.TEXT,
      content: { text: this.state.text.join('\n') },
    }
    this.reset()

    return response
  }
}
