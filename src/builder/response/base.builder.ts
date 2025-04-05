import type { FlowResponse } from '@/types/index.js'

export type BuilderState = {
  text: string[]
}

export abstract class BaseResponseBuilder {
  protected state: BuilderState

  constructor() {
    this.state = this.createInitialState()
  }

  //#
  public addText(...text: string[]): this {
    return text.length ? this.setText(text.join(' ')) : this
  }

  public addBold(text: string): this {
    return text ? this.setText(`*${text}*`) : this
  }

  public addItalic(text: string): this {
    return text ? this.setText(`_${text}_`) : this
  }

  public addStrike(text: string): this {
    return text ? this.setText(`~${text}~`) : this
  }

  public addQuote(text: string): this {
    return text ? this.setText(`> ${text}`) : this
  }

  //#
  public addEmptyLine(): this {
    return this.setText('')
  }

  //#
  protected setText(text: string): this {
    this.state.text.push(text)
    return this
  }

  protected reset(): void {
    this.state = this.createInitialState()
  }

  protected createInitialState() {
    return { text: [] }
  }

  //#
  public abstract build(): FlowResponse
}
