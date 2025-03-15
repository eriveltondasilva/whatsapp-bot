import type { Response } from '@/types/index.js'

export interface ResponseBuilder {
  build(): Response
}
