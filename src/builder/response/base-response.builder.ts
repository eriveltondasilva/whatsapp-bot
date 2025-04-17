import type { FlowResponse } from '@/types/flows.js'

export type BuilderState = {
  text: string[]
}

export abstract class BaseResponseBuilder<T extends BuilderState = BuilderState> {
  protected state: T

  constructor() {
    this.state = this.createInitialState() as T
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

  public addCode(text: string): this {
    return text ? this.setText(`\`${text}\``) : this
  }

  //*
  public addEmptyLine(): this {
    return this.setText('')
  }

  //#
  protected setText(text: string): this {
    this.state.text.push(text)
    return this
  }

  protected reset(): void {
    this.state = this.createInitialState() as T
  }

  protected createInitialState(): BuilderState {
    return { text: [] }
  }

  //#
  public abstract build(): FlowResponse
}
