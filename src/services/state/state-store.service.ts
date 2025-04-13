import type { FlowState } from '@/types/flows.js'
import { singleton } from 'tsyringe'

@singleton()
export class StateStore {
  private readonly stateStore = new Map<string, FlowState>()

  public get(phone: string): FlowState | undefined {
    return this.stateStore.get(phone)
  }

  public set(phone: string, state: FlowState): void {
    this.stateStore.set(phone, state)
  }

  public delete(phone: string): boolean {
    return this.stateStore.delete(phone)
  }

  public clear(): void {
    this.stateStore.clear()
  }

  public has(phone: string): boolean {
    return this.stateStore.has(phone)
  }

  public getSize(): number {
    return this.stateStore.size
  }

  public getAllEntries(): [string, FlowState][] {
    return Array.from(this.stateStore.entries())
  }
}
