import type { Response } from '@/types/index.js'

export interface IState {
  handle(phone: string, message: string): Promise<Response>
  next(phone: string, message: string): Promise<IState>
}
