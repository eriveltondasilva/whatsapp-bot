import dayjs from 'dayjs'

import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import relativeTime from 'dayjs/plugin/relativeTime.js'

import 'dayjs/locale/pt-br'

dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)

dayjs.locale('pt-br')

export { dayjs }
