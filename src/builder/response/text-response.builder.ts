import { MessageType } from '@/config/enums.js'
import { BaseResponseBuilder } from './base-response.builder.js'

import type { FlowResponse } from '@/types/flows.js'

export class TextResponseBuilder extends BaseResponseBuilder {
  public addMono(text?: string): this {
    const delimiter = '`'.repeat(3)
    return this.setText(text ? delimiter + text + delimiter : delimiter)
  }

  public addLine(char = '-', length = 20): this {
    return this.setText(char.repeat(length))
  }

  //
  public addMenu(items: string[]): this {
    if (items?.length === 0) return this
    return this.setText(items.join('\n'))
  }

  public addBulletList(items: string[]): this {
    if (items?.length === 0) return this

    const formattedItems = items.map((item) => `- ${item}`)
    return this.setText(formattedItems.join('\n'))
  }

  public addNumberedList(items: string[], startIndex = 1): this {
    if (items?.length === 0) return this

    const formattedItems = items.map((item, index) => `${index + startIndex}. ${item}`)
    return this.setText(formattedItems.join('\n'))
  }

  //#
  public build(): FlowResponse {
    if (this.state.text.length === 0) this.setText('Nenhuma mensagem disponível');

    const response = {
      type: MessageType.TEXT,
      content: { text: this.state.text.join('\n') },
    }
    this.reset()

    return response
  }
}
