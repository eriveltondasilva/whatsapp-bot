import { MessageType } from '@/config/enums.js'
import type { Response } from '@/types/index.js'

export const createResponse = (...content: string[]): Response => ({
  type: MessageType.TEXT,
  content,
})

export const createResponseWithList = (...content: string[]): Response => ({
  type: MessageType.LIST,
  content,
})

export const createResponseWithImage = (...content: string[]): Response => ({
  type: MessageType.IMAGE,
  content,
})
