import { env } from 'node:process'

export const SESSION_NAME = env.SESSION_NAME || 'session-name'
export const PHONE_NUMBER = env.ERIVELTON_NUMBER || ''
export const PIZZERIA_NAME = env.PIZZERIA_NAME || 'Lorem Ipsum'

export const LOG_LEVEL = env.LOG_LEVEL || 'info'
