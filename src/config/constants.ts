import { env } from 'node:process'

export const SESSION_NAME = env.SESSION_NAME || 'session-name'
export const ERIVELTON_NUMBER = env.ERIVELTON_NUMBER || ''
export const INGRID_NUMBER = env.INGRID_NUMBER || ''

export const LOG_LEVEL = env.LOG_LEVEL || 'info'
