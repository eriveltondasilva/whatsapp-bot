import type { ResponseList } from '@/types/responses.js'

export type BuilderState = {
  text: string[]
}

export type ListBuilderState = BuilderState & {
  list: ResponseList[]
}
